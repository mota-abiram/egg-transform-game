import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface Egg {
  id: number;
  x: number;
  y: number;
  velocity: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

const Game = () => {
  const [health, setHealth] = useState(0);
  const [eggs, setEggs] = useState<Egg[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [acquiredNutrients, setAcquiredNutrients] = useState<string[]>([]);
  const [characterStage, setCharacterStage] = useState(1);
  const [stageMessage, setStageMessage] = useState("Weak & Thin");
  const [highScore, setHighScore] = useState<number | null>(null);

  const gameAreaRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const movementRef = useRef<number>();
  const scoreRef = useRef(0); // Track score in ref for immediate updates
  const healthRef = useRef(0); // Track health in ref for immediate updates
  const totalEggsDroppedRef = useRef(0); // Track total eggs dropped for high score

  const maxHealth = 100;
  const healthPerEgg = 20;

  // Refs for smooth movement independent of re-render
  const characterPositionRef = useRef(50); // actual position for calculation
  const characterDirectionRef = useRef(1); // 1=right, -1=left
  const [characterPositionUI, setCharacterPositionUI] = useState(50); // for UI

  // Smooth character movement with throttled UI updates
  useEffect(() => {
    if (!gameStarted || gameWon) return;

    const speed = 0.8;
    let lastUIUpdate = 0;
    const uiUpdateInterval = 16; // ~60fps for UI updates

    const move = () => {
      let next = characterPositionRef.current + characterDirectionRef.current * speed;
      if (next >= 85) characterDirectionRef.current = -1;
      else if (next <= 15) characterDirectionRef.current = 1;
      characterPositionRef.current += characterDirectionRef.current * speed;

      // Throttle UI updates to prevent excessive re-renders
      const now = performance.now();
      if (now - lastUIUpdate > uiUpdateInterval) {
        setCharacterPositionUI(characterPositionRef.current);
        lastUIUpdate = now;
      }

      movementRef.current = requestAnimationFrame(move);
    };

    movementRef.current = requestAnimationFrame(move);

    return () => {
      if (movementRef.current) cancelAnimationFrame(movementRef.current);
    };
  }, [gameStarted, gameWon]);

  // Debug: Monitor character stage changes
  useEffect(() => {
    console.log(`🔄 Character stage changed to: ${characterStage}`);
  }, [characterStage]);

  // Game win - now handled in processSuccessfulEggLanding when score reaches 5
  useEffect(() => {
    if (health >= maxHealth && !gameWon) {
      setGameWon(true);
      toast.success("🎉 Transformation Complete!", {
        description: "You've powered up with Nature's Multivitamin!",
      });
    }
  }, [health, gameWon]);

  // Egg & particle animation
  useEffect(() => {
    if (!gameStarted) return;

    const animate = () => {
      setEggs((prev) => {
        const updated = prev
          .map((egg) => ({ ...egg, y: egg.y + egg.velocity, velocity: egg.velocity + 0.3 }))
          .filter((egg) => {
            // Check if egg hits the character
            if (checkEggCharacterCollision(egg)) {
              handleEggHit(egg);
              return false; // Remove egg after hit
            }

            // Check if egg hits the ground (miss)
            if (egg.y > 500) {
              handleEggMiss(egg);
              return false;
            }

            return egg.y < 600; // Keep egg if still on screen
          });
        return updated;
      });

      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, x: p.x + p.vx, y: p.y + p.vy, vy: p.vy + 0.3, life: p.life - 1 }))
          .filter((p) => p.life > 0)
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [gameStarted]);

  // Check if falling egg collides with character
  const checkEggCharacterCollision = (egg: Egg) => {
    const rect = gameAreaRef.current?.getBoundingClientRect();
    if (!rect) return false;

    // Use the live ref position for real-time collision detection
    const characterCenterX = (rect.width * characterPositionRef.current) / 100;

    // Calculate character dimensions based on current scale
    const baseSize = 128; // w-32 h-32 = 128px
    const scaleValue = 1 + (healthRef.current / maxHealth) * 0.5;
    const characterSizePx = baseSize * scaleValue;

    // Character position from bottom
    const characterBottomOffsetPx = 64; // bottom-16 = 64px
    const gameAreaHeight = rect.height;

    // Calculate hit area
    const yStart = gameAreaHeight - characterBottomOffsetPx - characterSizePx;
    const yEnd = gameAreaHeight - characterBottomOffsetPx;

    const halfCharacterWidth = characterSizePx / 2;
    const xStart = characterCenterX - halfCharacterWidth;
    const xEnd = characterCenterX + halfCharacterWidth;

    // Check collision with more generous tolerance
    const tolerance = 40; // Increased tolerance for easier hitting
    const isInBodyX = egg.x >= (xStart - tolerance) && egg.x <= (xEnd + tolerance);
    const isInBodyY = egg.y >= (yStart - tolerance) && egg.y <= (yEnd + tolerance);

    const isCollision = isInBodyX && isInBodyY;

    // Debug logging
    if (isCollision) {
      console.log("🎯 COLLISION DETECTED!", {
        eggPos: { x: egg.x, y: egg.y },
        characterPos: { x: characterCenterX, y: yStart },
        hitArea: { xStart, xEnd, yStart, yEnd },
        tolerance
      });
    }

    return isCollision;
  };

  const handleEggMiss = (egg: Egg) => {
    const missParticles: Particle[] = [];
    for (let i = 0; i < 5; i++) {
      missParticles.push({
        id: Date.now() + i,
        x: egg.x,
        y: egg.y,
        vx: (Math.random() - 0.5) * 4,
        vy: -Math.random() * 3 - 1,
        life: 20,
      });
    }
    setParticles((prev) => [...prev, ...missParticles]);
    toast.error("💥 Missed!", { description: "Try aiming for the head!" });
  };

  const processSuccessfulEggLanding = (egg: Egg) => {
    const currentHealth = healthRef.current;
    if (currentHealth < maxHealth) {
      // Use ref to get current score immediately
      const currentScore = scoreRef.current;
      const newScore = currentScore + 1;

      // Update refs immediately
      scoreRef.current = newScore;

      const newHealth = Math.min(currentHealth + healthPerEgg, maxHealth);
      healthRef.current = newHealth;
      console.log(`💚 HEALTH: ${currentHealth}% → ${newHealth}% (+${healthPerEgg}%)`);
      setScore(newScore);
      setHealth(newHealth);

      // Update character stage: 1st hit = 1→2, 2nd hit = 2→3, 3rd hit = 3→4, 4th hit = 4→5
      const newStage = Math.min(newScore + 1, 5);
      console.log(`🎯 HIT! Score: ${currentScore} → ${newScore}, Stage: ${characterStage} → ${newStage}`);
      console.log(`🔄 IMAGE CHANGE: ${characterStage}.png → ${newStage}.png`);
      setCharacterStage(newStage);

      const stageMessages = [
        "Weak & Thin",
        "Getting Stronger",
        "Healthy & Active",
        "Strong & Energetic",
        "Peak Performance!",
      ];
      setStageMessage(stageMessages[Math.min(newScore - 1, stageMessages.length - 1)]);

      const nutrients = ["☀️ Vitamin D3", "🧠 DHA", "💪 Selenium", "🌿 Omega 3"];
      if (newScore <= nutrients.length) {
        setAcquiredNutrients((prev) => [...prev, nutrients[newScore - 1]]);
      }

      createParticles(egg.x, egg.y);

      // Check if game should end at score 5
      if (newScore >= 5) {
        setGameWon(true);

        // Check for high score (minimum eggs to complete)
        const totalEggsUsed = totalEggsDroppedRef.current;
        if (highScore === null || totalEggsUsed < highScore) {
          setHighScore(totalEggsUsed);
          toast.success("🏆 New High Score!", {
            description: `Completed in just ${totalEggsUsed} eggs! Perfect accuracy!`,
          });
        } else {
          toast.success("🎉 Game Complete!", {
            description: `Perfect! You've reached the maximum score of 5!`,
          });
        }
      } else {
        toast.success("🎯 Perfect Hit!", {
          description: `Egg landed on head! +20 Health (${newScore}/5) - Stage ${newStage}`,
        });
      }
    }
  };

  const createParticles = (x: number, y: number) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 8; i++) {
      newParticles.push({
        id: Date.now() + i,
        x,
        y,
        vx: (Math.random() - 0.5) * 6,
        vy: -Math.random() * 6 - 2,
        life: 30,
      });
    }
    setParticles((prev) => [...prev, ...newParticles]);
  };

  const handleEggHit = (egg: Egg) => {
    processSuccessfulEggLanding(egg);
  };

  // Drop egg logic - always create falling egg
  const dropEgg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gameStarted || gameWon) return;

    const rect = gameAreaRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Always create a falling egg at click position
    const newEgg: Egg = { id: Date.now(), x, y: 0, velocity: 2 };
    setEggs((prev) => [...prev, newEgg]);

    // Track total eggs dropped for high score
    totalEggsDroppedRef.current += 1;
  };

  const startGame = () => {
    setGameStarted(true);
    setGameWon(false);
    setHealth(0);
    setScore(0);
    scoreRef.current = 0; // Reset score ref
    healthRef.current = 0; // Reset health ref
    totalEggsDroppedRef.current = 0; // Reset total eggs dropped
    setEggs([]);
    setParticles([]);
    characterPositionRef.current = 50;
    setCharacterPositionUI(50);
    characterDirectionRef.current = 1;
    setAcquiredNutrients([]);
    setCharacterStage(1);
    setStageMessage("Weak & Thin");

    toast.info("🎮 Game Started!", { description: "Click on the moving character to drop eggs!" });
  };

  const resetGame = () => {
    setGameStarted(false);
    setHealth(0);
    setScore(0);
    scoreRef.current = 0; // Reset score ref
    healthRef.current = 0; // Reset health ref
    totalEggsDroppedRef.current = 0; // Reset total eggs dropped
    setEggs([]);
    setParticles([]);
    setGameWon(false);
    characterPositionRef.current = 50;
    setCharacterPositionUI(50);
    characterDirectionRef.current = 1;
    setAcquiredNutrients([]);
    setCharacterStage(1);
    setStageMessage("Weak & Thin");
  };

  const getCharacterStyle = () => {
    const healthPercent = health / maxHealth;
    const scaleValue = 1 + healthPercent * 0.5; // bigger images
    return {
      transform: `scale(${scaleValue})`,
      transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
      willChange: "transform" // Optimize for smooth scaling
    };
  };

  const showInitialAim = gameStarted && !gameWon && score === 0;

  return (
    <div id="game" className="min-h-screen bg-gradient-to-b from-yellow-50/60 via-orange-50/40 to-amber-50/60 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold">Power of Hello Eggs</h1>
          <p className="text-xl text-muted-foreground">Drop nutrition. Watch transformation. 🥚</p>
        </div>

        {gameStarted && (
          <Card className="p-6 space-y-4 bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🥚</span>
                <span className="text-lg font-bold text-orange-700">Eggs Landed: {score}/5</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">❤️</span>
                <span className="text-lg font-bold text-red-600">Health: {health}%</span>
              </div>
            </div>
            {highScore !== null && (
              <div className="text-center">
                <span className="text-sm text-orange-600 font-medium">🏆 Best Score: {highScore} eggs</span>
              </div>
            )}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Progress</span>
                <span>{health}%</span>
              </div>
              <Progress value={health} className="h-4 bg-orange-100" />
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {acquiredNutrients.map((nutrient, i) => (
                <span key={i} className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full font-medium border border-green-200">
                  {nutrient}
                </span>
              ))}
            </div>
          </Card>
        )}

        <Card ref={gameAreaRef} onClick={dropEgg} className={`relative w-full h-[600px] overflow-hidden cursor-crosshair ${showInitialAim || (gameStarted && !gameWon) ? "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" : "bg-gradient-to-br from-gray-100 to-gray-200"}`}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating orbs with custom animations */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full animate-float-orb blur-sm"></div>
            <div className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full animate-drift blur-sm" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-48 left-1/4 w-12 h-12 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full animate-float-orb blur-sm" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-20 right-1/3 w-14 h-14 bg-gradient-to-r from-yellow-200/30 to-red-200/30 rounded-full animate-drift blur-sm" style={{ animationDelay: '0.5s' }}></div>

            {/* Additional floating orbs */}
            <div className="absolute top-60 left-1/2 w-8 h-8 bg-gradient-to-r from-indigo-200/25 to-cyan-200/25 rounded-full animate-float-orb blur-sm" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-80 right-1/4 w-10 h-10 bg-gradient-to-r from-emerald-200/25 to-teal-200/25 rounded-full animate-drift blur-sm" style={{ animationDelay: '4s' }}></div>

            {/* Sparkling particles */}
            <div className="absolute top-16 left-1/2 w-2 h-2 bg-blue-300/60 rounded-full animate-sparkle" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-40 left-1/3 w-1 h-1 bg-purple-300/70 rounded-full animate-sparkle" style={{ animationDelay: '4s' }}></div>
            <div className="absolute top-60 right-1/4 w-1.5 h-1.5 bg-pink-300/60 rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-80 left-1/5 w-2 h-2 bg-green-300/60 rounded-full animate-sparkle" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute top-24 right-1/2 w-1 h-1 bg-yellow-300/70 rounded-full animate-sparkle" style={{ animationDelay: '5s' }}></div>
            <div className="absolute top-72 left-1/6 w-1.5 h-1.5 bg-cyan-300/60 rounded-full animate-sparkle" style={{ animationDelay: '0.8s' }}></div>

            {/* Subtle grid pattern with animation */}
            <div className="absolute inset-0 opacity-5 animate-pulse" style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>

            {/* Radial gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/5"></div>
          </div>

          {eggs.map((egg) => (
            <div key={egg.id} className="absolute w-12 h-14 text-4xl" style={{ left: `${egg.x - 24}px`, top: `${egg.y}px`, transform: `rotate(${egg.velocity * 2}deg)` }}>🥚</div>
          ))}
          {particles.map((p) => (
            <div key={p.id} className="absolute w-3 h-3 rounded-full" style={{ left: `${p.x}px`, top: `${p.y}px`, opacity: p.life / 30, backgroundColor: p.life > 15 ? "#10b981" : "#ef4444" }} />
          ))}

          <div
            className="absolute bottom-16 flex flex-col items-center"
            style={{
              left: `${characterPositionUI}%`,
              transform: "translateX(-50%)",
              willChange: "left", // Optimize for smooth animations
              transition: "none" // Disable CSS transitions for direct positioning
            }}
          >
            {showInitialAim && (
              <div className="absolute -top-12 w-20 h-12 border-2 border-dashed border-yellow-400 rounded-full opacity-50 animate-pulse">
                <div className="text-xs text-yellow-600 font-bold text-center mt-2">AIM HERE</div>
              </div>
            )}

            <div className={health >= maxHealth ? "animate-pulse-glow" : ""} style={getCharacterStyle()}>
              <img
                key={characterStage} // Force re-render when stage changes
                src={`/charcaters/${characterStage}.png`}
                alt={`Character Stage ${characterStage}`}
                className="w-32 h-32 object-contain"
                style={{ filter: health >= maxHealth ? "drop-shadow(0 0 20px rgba(255,215,0,0.8))" : "none" }}
                onLoad={() => console.log(`✅ Image loaded: ${characterStage}.png`)}
                onError={(e) => console.error(`❌ Image failed to load: ${characterStage}.png`, e)}
              />
            </div>

            {/* Stage message under character */}
            {stageMessage && <div className="mt-2 text-center text-sm font-semibold text-green-600">{stageMessage}</div>}

            {health >= maxHealth && (
              <div className="absolute -top-12 animate-bounce-in flex gap-2"><span className="text-3xl">✨</span><span className="text-3xl">🌟</span><span className="text-3xl">✨</span></div>
            )}

          </div>

          {(!gameStarted || gameWon) && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                {!gameStarted && (
                  <>
                    <h2 className="text-3xl font-bold text-white">Ready to Transform?</h2>
                    <p className="text-white/80">Click anywhere to drop Hello Eggs and watch the magic happen!</p>
                    <Button onClick={startGame} size="lg" className="text-lg">🎮 Start Game</Button>
                  </>
                )}
                {gameWon && (
                  <>
                    <div className="text-6xl animate-bounce-in">🎉</div>
                    <h2 className="text-4xl font-bold text-white animate-bounce-in">Transformation Complete!</h2>
                    <p className="text-white/90 text-lg">You've powered up with {score} Hello Eggs!</p>
                    {highScore !== null && (
                      <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-3">
                        <p className="text-yellow-200 text-sm font-medium">
                          🏆 Best Score: {highScore} eggs to complete!
                        </p>
                      </div>
                    )}

                    {/* Nutritional Facts */}
                    <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-3">🌟 Nutritional Power Gained:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-white/90">
                          <span className="text-lg">☀️</span>
                          <div>
                            <span className="font-medium">Vitamin D3:</span> Stronger bones & immune system
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-white/90">
                          <span className="text-lg">🧠</span>
                          <div>
                            <span className="font-medium">DHA:</span> Enhanced brain function & memory
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-white/90">
                          <span className="text-lg">💪</span>
                          <div>
                            <span className="font-medium">Selenium:</span> Powerful antioxidant protection
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-white/90">
                          <span className="text-lg">🌿</span>
                          <div>
                            <span className="font-medium">Omega 3:</span> Heart health & inflammation reduction
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button size="lg" className="text-lg w-full" asChild>
                        <a href="https://srinivasafarms.com" target="_blank" rel="noopener noreferrer">🛒 Get Hello Eggs Now</a>
                      </Button>
                      <Button onClick={resetGame} variant="outline" size="lg" className="text-lg w-full">🔄 Play Again</Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {showInitialAim && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center animate-float">
              <p className="text-lg font-medium text-foreground bg-white/80 px-4 py-2 rounded-full">🎯 Click on the moving character's head to hit!</p>
            </div>
          )}
        </Card>

        <Card className="p-6 space-y-3 text-center">
          <h3 className="text-2xl font-bold">Say Hello to Nature's Multivitamin</h3>
          <p className="text-muted-foreground">Each Hello Egg is enriched with Vitamin D3, DHA, Selenium, and Omega 3 to support your health at every stage of life.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">100% Natural</span>
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">Nutritionally Enhanced</span>
            <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">Farm to Table in 24hrs</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Game;
