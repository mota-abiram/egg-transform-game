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
  const [characterPosition, setCharacterPosition] = useState(50); // Percentage position
  const [characterDirection, setCharacterDirection] = useState(1); // 1 for right, -1 for left
  const [acquiredNutrients, setAcquiredNutrients] = useState<string[]>([]);
  const [characterStage, setCharacterStage] = useState(2); // Character transformation stage (2-5)
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const characterMovementRef = useRef<number>();

  const maxHealth = 100;
  const healthPerEgg = 20;
  const hitTolerance = 15; // Percentage tolerance for hit detection
  const characterSpeed = 0.8; // Movement speed per frame (increased for more visible movement)

  // Character Movement Animation - Continuous loop movement when game is active
  const animateCharacterMovement = () => {
    setCharacterPosition((prevPosition) => {
      let newPosition = prevPosition + (characterDirection * characterSpeed);

      // Reverse direction at boundaries for continuous loop
      if (newPosition >= 85) {
        newPosition = 85;
        setCharacterDirection(-1);
      } else if (newPosition <= 15) {
        newPosition = 15;
        setCharacterDirection(1);
      }

      return newPosition;
    });

    // Continue movement only when game is started and not won
    if (gameStarted && !gameWon) {
      characterMovementRef.current = requestAnimationFrame(animateCharacterMovement);
    }
  };

  // Character Movement Effect - Start when game starts, stop when game ends
  useEffect(() => {
    if (gameStarted && !gameWon) {
      // Start character movement when game starts
      animateCharacterMovement();
    } else {
      // Stop character movement when game stops or is won
      if (characterMovementRef.current) {
        cancelAnimationFrame(characterMovementRef.current);
      }
    }

    // Cleanup function to stop movement when component unmounts
    return () => {
      if (characterMovementRef.current) {
        cancelAnimationFrame(characterMovementRef.current);
      }
    };
  }, [gameStarted, gameWon]); // Dependencies: gameStarted and gameWon

  useEffect(() => {
    if (health >= maxHealth && !gameWon) {
      setGameWon(true);
      toast.success("🎉 Transformation Complete!", {
        description: "You've powered up with Nature's Multivitamin!",
      });
    }
  }, [health, gameWon]);

  useEffect(() => {
    if (!gameStarted) return;

    const animate = () => {
      setEggs((prevEggs) => {
        const updated = prevEggs
          .map((egg) => ({
            ...egg,
            y: egg.y + egg.velocity,
            velocity: egg.velocity + 0.3, // gravity
          }))
          .filter((egg) => {
            // Simple check - if egg reaches the ground, it's a miss
            if (egg.y > 500) {
              handleEggMiss(egg);
              return false;
            }
            return egg.y < 600; // Remove if off screen
          });
        return updated;
      });

      setParticles((prevParticles) =>
        prevParticles
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.3,
            life: p.life - 1,
          }))
          .filter((p) => p.life > 0)
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [gameStarted]);

  // Process Successful Egg Landing - Main State Update Function
  const processSuccessfulEggLanding = (egg: Egg) => {
    if (health < maxHealth) {
      const newScore = score + 1;
      const newHealth = Math.min(health + healthPerEgg, maxHealth);

      // Update score and health
      setScore(newScore);
      setHealth(newHealth);

      // Update character stage based on successful hits (2-5)
      setCharacterStage(Math.min(newScore + 1, 5));

      // Add nutrient based on hit count
      const nutrients = ['☀️ Vitamin D3', '🧠 DHA', '💪 Selenium', '🌿 Omega 3'];
      if (newScore <= nutrients.length) {
        setAcquiredNutrients(prev => [...prev, nutrients[newScore - 1]]);
      }

      // Create visual effects
      createParticles(egg.x, egg.y);

      // Show success message
      toast.success("🎯 Perfect Hit!", {
        description: `Egg landed on head! +20 Health (${newScore}/5) - Stage ${Math.min(newScore + 1, 5)}`,
      });
    }
  };

  const handleEggHit = (egg: Egg) => {
    processSuccessfulEggLanding(egg);
  };

  const handleEggMiss = (egg: Egg) => {
    // Create different particles for missed eggs
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
    toast.error("💥 Missed!", {
      description: "Try aiming for the head!",
    });
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

  const dropEgg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gameStarted || gameWon) return;

    const rect = gameAreaRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate character's current position based on percentage
    const characterCenterX = (rect.width * characterPosition) / 100;
    const characterWidth = 100; // Approximate character width
    const headY = 400; // Y position where head starts
    const headHeight = 50; // Height of head area

    // Enhanced hit detection with tolerance
    const isInHeadX = x >= characterCenterX - characterWidth / 2 && x <= characterCenterX + characterWidth / 2;
    const isInHeadY = y >= headY && y <= headY + headHeight;

    if (isInHeadX && isInHeadY) {
      // Perfect hit on moving character - no egg animation needed
      handleEggHit({ id: Date.now(), x: characterCenterX, y: headY, velocity: 0 });
    } else {
      // Miss - show egg falling animation
      const newEgg: Egg = {
        id: Date.now(),
        x,
        y: 0,
        velocity: 2,
      };
      setEggs((prev) => [...prev, newEgg]);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setHealth(0);
    setScore(0);
    setEggs([]);
    setParticles([]);
    setGameWon(false);
    setCharacterPosition(50);
    setCharacterDirection(1);
    setAcquiredNutrients([]);

    toast.info("🎮 Game Started!", {
      description: "Click on the moving character to drop eggs!",
    });
  };

  const resetGame = () => {
    setGameStarted(false);
    setHealth(0);
    setScore(0);
    setEggs([]);
    setParticles([]);
    setGameWon(false);
    setCharacterPosition(50);
    setCharacterDirection(1);
    setAcquiredNutrients([]);
    setCharacterStage(2); // Reset to stage 2

    // Note: Character movement continues running (not stopped on reset)
  };

  const getCharacterStyle = () => {
    const healthPercent = health / maxHealth;

    // More dramatic size changes for realistic transformation
    const scaleValue = 0.8 + (healthPercent * 0.4); // Scale from 80% to 120%

    return {
      transform: `scale(${scaleValue})`,
      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    };
  };


  return (
    <div id="game" className="min-h-screen bg-gradient-to-b from-yellow-50/60 via-orange-50/40 to-amber-50/60 backdrop-blur-sm flex flex-col items-center justify-center p-4 scroll-mt-20">
      <div className="max-w-4xl w-full space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient animate-bounce-in">
            Power of Hello Eggs
          </h1>
          <p className="text-xl text-muted-foreground">
            Drop nutrition. Watch transformation. 🥚
          </p>
        </div>

        {/* Game Stats */}
        {gameStarted && (
          <Card className="p-4 space-y-3 game-shadow">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Eggs Landed: {score}</span>
              <span className="text-sm font-medium">Health: {health}%</span>
            </div>
            <Progress value={health} className="h-3" />
            <div className="flex flex-wrap gap-2 text-xs">
              {acquiredNutrients.map((nutrient, index) => (
                <span
                  key={index}
                  className="bg-primary/20 text-primary px-2 py-1 rounded-full animate-bounce-in"
                >
                  {nutrient}
                </span>
              ))}
            </div>
          </Card>
        )}

        {/* Game Area */}
        <Card
          ref={gameAreaRef}
          onClick={dropEgg}
          className={`relative w-full h-[600px] overflow-hidden cursor-crosshair game-shadow ${gameStarted && !gameWon ? "bg-gradient-to-b from-sky-100 to-green-50" : "bg-muted"
            }`}
        >
          {/* Eggs */}
          {eggs.map((egg) => (
            <div
              key={egg.id}
              className="absolute w-12 h-14 text-4xl"
              style={{
                left: `${egg.x - 24}px`,
                top: `${egg.y}px`,
                transform: `rotate(${egg.velocity * 2}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              🥚
            </div>
          ))}

          {/* Particles */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                opacity: particle.life / 30,
                backgroundColor: particle.life > 15 ? '#10b981' : '#ef4444', // Green for hits, red for misses
                boxShadow: `0 0 ${particle.life}px ${particle.life > 15 ? '#10b981' : '#ef4444'}`,
              }}
            />
          ))}

          {/* Character */}
          <div
            className="absolute bottom-16 flex flex-col items-center transition-all duration-100 ease-out"
            style={{
              left: `${characterPosition}%`,
              transform: 'translateX(-50%)'
            }}
          >
            {/* Head target indicator */}
            {gameStarted && !gameWon && (
              <div
                className="absolute -top-12 w-20 h-12 border-2 border-dashed border-yellow-400 rounded-full opacity-50 animate-pulse"
                style={{ top: '-48px' }}
              >
                <div className="text-xs text-yellow-600 font-bold text-center mt-2">AIM HERE</div>
              </div>
            )}
            <div
              className={`${health >= maxHealth ? "animate-pulse-glow" : ""
                }`}
              style={getCharacterStyle()}
            >
              <img
                src={`/charcaters/${characterStage}.png`}
                alt={`Character Stage ${characterStage}`}
                className="w-24 h-24 object-contain"
                style={{
                  filter: health >= maxHealth ? 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))' : 'none'
                }}
              />
            </div>
            {health >= maxHealth && (
              <div className="absolute -top-12 animate-bounce-in flex gap-2">
                <span className="text-3xl">✨</span>
                <span className="text-3xl">🌟</span>
                <span className="text-3xl">✨</span>
              </div>
            )}
            {/* Health indicator */}
            <div className="absolute -bottom-6 text-xs font-semibold text-muted-foreground">
              {health === 0 && "Weak & Thin"}
              {health > 0 && health < 50 && "Getting Stronger"}
              {health >= 50 && health < 100 && "Healthy & Active"}
              {health >= 100 && "Peak Performance!"}
            </div>
          </div>

          {/* Start/Win Overlay */}
          {(!gameStarted || gameWon) && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                {!gameStarted && (
                  <>
                    <h2 className="text-3xl font-bold text-white">
                      Ready to Transform?
                    </h2>
                    <p className="text-white/80">
                      Click anywhere to drop Hello Eggs and watch the magic happen!
                    </p>
                    <Button onClick={startGame} size="lg" className="text-lg">
                      🎮 Start Game
                    </Button>
                  </>
                )}
                {gameWon && (
                  <>
                    <div className="text-6xl animate-bounce-in">🎉</div>
                    <h2 className="text-4xl font-bold text-white animate-bounce-in">
                      Transformation Complete!
                    </h2>
                    <p className="text-white/90 text-lg">
                      You've powered up with {score} Hello Eggs!
                    </p>
                    <div className="space-y-2">
                      <Button size="lg" className="text-lg w-full" asChild>
                        <a href="https://srinivasafarms.com" target="_blank" rel="noopener noreferrer">
                          🛒 Get Hello Eggs Now
                        </a>
                      </Button>
                      <Button
                        onClick={resetGame}
                        variant="outline"
                        size="lg"
                        className="text-lg w-full"
                      >
                        🔄 Play Again
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Instructions */}
          {gameStarted && !gameWon && eggs.length === 0 && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center animate-float">
              <p className="text-lg font-medium text-foreground bg-white/80 px-4 py-2 rounded-full">
                🎯 Click on the moving character's head to hit!
              </p>
            </div>
          )}
        </Card>

        {/* Info */}
        <Card className="p-6 space-y-3 text-center">
          <h3 className="text-2xl font-bold">Say Hello to Nature's Multivitamin</h3>
          <p className="text-muted-foreground">
            Each Hello Egg is enriched with Vitamin D3, DHA, Selenium, and Omega 3 to support your health at every stage of life.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              100% Natural
            </span>
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
              Nutritionally Enhanced
            </span>
            <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
              Farm to Table in 24hrs
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Game;
