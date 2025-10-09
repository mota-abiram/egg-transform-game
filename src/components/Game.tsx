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
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const maxHealth = 100;
  const healthPerEgg = 20;

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
            velocity: egg.velocity + 0.5, // gravity
          }))
          .filter((egg) => {
            if (egg.y > 400 && egg.y < 480) {
              // Hit the character
              handleEggHit(egg);
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

  const handleEggHit = (egg: Egg) => {
    if (health < maxHealth) {
      setHealth((prev) => Math.min(prev + healthPerEgg, maxHealth));
      setScore((prev) => prev + 1);
      createParticles(egg.x, egg.y);
      toast.success("🥚 Egg landed!", {
        description: "+20 Health",
      });
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

  const dropEgg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gameStarted || gameWon) return;

    const rect = gameAreaRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const newEgg: Egg = {
      id: Date.now(),
      x,
      y: 0,
      velocity: 2,
    };
    setEggs((prev) => [...prev, newEgg]);
  };

  const startGame = () => {
    setGameStarted(true);
    setHealth(0);
    setScore(0);
    setEggs([]);
    setParticles([]);
    setGameWon(false);
    toast.info("🎮 Game Started!", {
      description: "Click anywhere to drop eggs!",
    });
  };

  const resetGame = () => {
    setGameStarted(false);
    setHealth(0);
    setScore(0);
    setEggs([]);
    setParticles([]);
    setGameWon(false);
  };

  const getCharacterStyle = () => {
    const healthPercent = health / maxHealth;
    
    // More dramatic size changes for realistic transformation
    const scaleValue = 0.7 + (healthPercent * 0.5); // Scale from 70% to 120%
    
    return {
      filter: `
        saturate(${0.4 + healthPercent * 0.6})
        brightness(${0.6 + healthPercent * 0.4})
        contrast(${1 + healthPercent * 0.2})
      `,
      transform: `scale(${scaleValue})`,
      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    };
  };

  const getCharacterEmoji = () => {
    const healthPercent = health / maxHealth;
    // Show realistic body transformation stages
    if (healthPercent === 0) return "🧍"; // Very weak/thin starting point
    if (healthPercent < 25) return "🚶"; // Slight improvement
    if (healthPercent < 50) return "🧍‍♂️"; // Getting stronger
    if (healthPercent < 75) return "🏃"; // Active and energetic
    if (healthPercent < 100) return "🏋️"; // Strong and fit
    return "💪"; // Peak health
  };

  return (
    <div id="game" className="min-h-screen bg-gradient-to-b from-muted/50 to-background flex flex-col items-center justify-center p-4 scroll-mt-20">
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
              {health >= 20 && (
                <span className="bg-primary/20 text-primary px-2 py-1 rounded-full animate-bounce-in">
                  ☀️ Vitamin D3
                </span>
              )}
              {health >= 40 && (
                <span className="bg-accent/20 text-accent px-2 py-1 rounded-full animate-bounce-in">
                  🧠 DHA
                </span>
              )}
              {health >= 60 && (
                <span className="bg-secondary/20 text-secondary px-2 py-1 rounded-full animate-bounce-in">
                  💪 Selenium
                </span>
              )}
              {health >= 80 && (
                <span className="bg-primary/20 text-primary px-2 py-1 rounded-full animate-bounce-in">
                  🌿 Omega 3
                </span>
              )}
            </div>
          </Card>
        )}

        {/* Game Area */}
        <Card
          ref={gameAreaRef}
          onClick={dropEgg}
          className={`relative w-full h-[600px] overflow-hidden cursor-crosshair game-shadow ${
            gameStarted && !gameWon ? "bg-gradient-to-b from-sky-100 to-green-50" : "bg-muted"
          }`}
        >
          {/* Eggs */}
          {eggs.map((egg) => (
            <div
              key={egg.id}
              className="absolute w-12 h-14 text-4xl transition-transform"
              style={{
                left: `${egg.x - 24}px`,
                top: `${egg.y}px`,
                transform: `rotate(${egg.velocity * 3}deg)`,
              }}
            >
              🥚
            </div>
          ))}

          {/* Particles */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 bg-accent rounded-full"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                opacity: particle.life / 30,
              }}
            />
          ))}

          {/* Character */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div
              className={`text-8xl ${
                health >= maxHealth ? "animate-pulse-glow" : ""
              }`}
              style={getCharacterStyle()}
            >
              {getCharacterEmoji()}
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
                👆 Click to drop eggs!
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
