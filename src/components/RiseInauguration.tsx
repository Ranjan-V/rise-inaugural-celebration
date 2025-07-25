import { useState, useEffect } from 'react';
import { Button } from './ui/button';

const RiseInauguration = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleInaugurate = () => {
    setCurrentPage(2);
    setTimeout(() => setShowCelebration(true), 500);
  };

  const createConfetti = () => {
    const colors = [
      'bg-celebration-gold',
      'bg-celebration-pink', 
      'bg-celebration-blue',
      'bg-celebration-green',
      'bg-celebration-purple',
      'bg-celebration-orange'
    ];
    
    const shapes = ['rounded-full', 'rounded-none', 'rounded-sm'];
    
    return Array.from({ length: 120 }, (_, i) => (
      <div
        key={i}
        className={`absolute ${colors[i % colors.length]} ${shapes[i % shapes.length]} animate-confetti-fall opacity-90`}
        style={{
          width: `${4 + Math.random() * 8}px`,
          height: `${4 + Math.random() * 8}px`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${4 + Math.random() * 3}s`
        }}
      />
    ));
  };

  const createFireworks = () => {
    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="absolute w-4 h-4 bg-celebration-gold rounded-full animate-fireworks opacity-80"
        style={{
          left: `${10 + Math.random() * 80}%`,
          top: `${10 + Math.random() * 60}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random()}s`,
          boxShadow: '0 0 20px currentColor'
        }}
      />
    ));
  };

  const createBalloons = () => {
    const balloonColors = [
      'bg-celebration-pink',
      'bg-celebration-blue', 
      'bg-celebration-gold',
      'bg-celebration-green',
      'bg-celebration-purple'
    ];
    
    return Array.from({ length: 18 }, (_, i) => (
      <div
        key={i}
        className={`absolute ${balloonColors[i % balloonColors.length]} rounded-full animate-balloon-float shadow-lg`}
        style={{
          width: `${40 + Math.random() * 30}px`,
          height: `${50 + Math.random() * 30}px`,
          left: `${5 + (i * 7)}%`,
          bottom: `${15 + Math.random() * 20}%`,
          animationDelay: `${i * 0.2}s`,
          boxShadow: 'inset -8px -8px 0 rgba(255,255,255,0.3), 0 5px 15px rgba(0,0,0,0.2)',
        }}
      >
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-foreground opacity-60" 
          style={{ height: `${30 + Math.random() * 20}px` }}
        />
      </div>
    ));
  };

  const createSparkles = () => {
    return Array.from({ length: 60 }, (_, i) => (
      <div
        key={i}
        className="absolute animate-sparkle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`
        }}
      >
        <div className="w-2 h-2 bg-celebration-gold transform rotate-45" 
             style={{ boxShadow: '0 0 10px currentColor' }} />
      </div>
    ));
  };

  const createFloatingElements = () => {
    const elements = ['🎊', '🎉', '✨', '🌟', '💫', '🎈'];
    return Array.from({ length: 25 }, (_, i) => (
      <div
        key={i}
        className="absolute text-2xl animate-float-gentle opacity-70"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))'
        }}
      >
        {elements[i % elements.length]}
      </div>
    ));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Page 1 - Welcome */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
        currentPage === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}>
        <div 
          className="min-h-screen w-full flex items-center justify-center relative"
          style={{
            background: 'var(--gradient-celebration)'
          }}
        >
          {/* Enhanced decorative elements for page 1 */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-celebration-gold rounded-full animate-celebrate-pulse opacity-30" />
          <div className="absolute top-20 right-20 w-16 h-16 bg-celebration-pink rounded-full animate-celebrate-pulse opacity-40" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-celebration-blue rounded-full animate-celebrate-pulse opacity-25" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-10 right-10 w-18 h-18 bg-celebration-purple rounded-full animate-celebrate-pulse opacity-35" style={{ animationDelay: '1.5s' }} />
          
          {/* Additional floating elements for page 1 */}
          <div className="absolute top-1/3 left-5 w-12 h-12 bg-celebration-orange rounded-full animate-bounce opacity-40" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-5 w-14 h-14 bg-celebration-green rounded-full animate-bounce opacity-35" style={{ animationDelay: '2.5s' }} />
          <div className="absolute top-3/4 left-1/4 w-10 h-10 bg-celebration-pink rounded-full animate-bounce opacity-45" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-celebration-blue rounded-full animate-bounce opacity-30" style={{ animationDelay: '3.5s' }} />
          
          {/* Floating sparkles for page 1 */}
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`
              }}
            >
              <div className="w-2 h-2 bg-celebration-gold transform rotate-45" 
                   style={{ boxShadow: '0 0 10px currentColor' }} />
            </div>
          ))}
          
          <div className="text-center z-10 max-w-4xl mx-auto p-8">
            <div className="mb-8 animate-bounce-in">
              <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-6 drop-shadow-lg">
                Welcome to
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-celebration-gold mb-8 drop-shadow-lg animate-celebrate-pulse">
                RISE Foundation
              </h2>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8 animate-bounce-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
                🎉 Grand Inauguration 🎉
              </h3>
              <p className="text-xl md:text-2xl text-primary-foreground mb-2 font-medium">
                📅 Date: 26-07-2025
              </p>
              <p className="text-lg md:text-xl text-primary-foreground">
                👤 Guest: Smt. Subha Kalyan Ma'am (I.A.S)
              </p>
              <p className="text-lg md:text-xl text-primary-foreground">
                📍 Tumkur, Karnataka, India
              </p>
            </div>
            
            <Button
              onClick={handleInaugurate}
              className="text-2xl md:text-3xl px-12 py-6 rounded-full font-bold transform hover:scale-110 transition-all duration-300 animate-bounce-in shadow-lg hover:shadow-2xl"
              style={{ 
                background: 'var(--gradient-balloons)',
                animationDelay: '0.6s',
                boxShadow: 'var(--shadow-celebration)'
              }}
            >
              🎊 INAUGURATE 🎊
            </Button>
          </div>
        </div>
      </div>

      {/* Page 2 - Celebration */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
        currentPage === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}>
        <div 
          className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
          style={{
            background: 'var(--gradient-confetti)'
          }}
        >
          {/* Enhanced Confetti */}
          {showCelebration && (
            <div className="absolute inset-0 pointer-events-none">
              {createConfetti()}
            </div>
          )}
          
          {/* Fireworks */}
          {showCelebration && (
            <div className="absolute inset-0 pointer-events-none">
              {createFireworks()}
            </div>
          )}
          
          {/* Floating emoji elements */}
          {showCelebration && (
            <div className="absolute inset-0 pointer-events-none">
              {createFloatingElements()}
            </div>
          )}
          
          {/* Enhanced Balloons */}
          {showCelebration && (
            <div className="absolute inset-0 pointer-events-none">
              {createBalloons()}
            </div>
          )}
          
          {/* Enhanced Sparkles */}
          {showCelebration && (
            <div className="absolute inset-0 pointer-events-none">
              {createSparkles()}
            </div>
          )}
          
          {/* Ribbon cutting effect */}
          {showCelebration && (
            <>
              <div className="absolute top-0 left-0 w-full h-3 bg-celebration-gold animate-ribbon-cut shadow-lg" />
              <div className="absolute top-0 left-0 w-full h-1 bg-celebration-pink animate-ribbon-cut" style={{ animationDelay: '0.2s' }} />
            </>
          )}
          
          {/* Main content with logo */}
          <div className="text-center z-10 max-w-5xl mx-auto p-8">
            {/* RISE Foundation Logo */}
            <div className="mb-8 animate-logo-entrance" style={{ animationDelay: '0.8s' }}>
              <img 
                src="/lovable-uploads/bb25d9e2-5862-42ff-a03e-034d73787699.png" 
                alt="RISE Foundation Logo" 
                className="mx-auto max-w-md w-full animate-rainbow-rotate"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.8))',
                  maxHeight: '400px'
                }}
              />
            </div>
            
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 mb-8 animate-bounce-in border border-white/30" style={{ animationDelay: '1.2s' }}>
              <h3 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 animate-celebrate-pulse">
                🎊 Successfully Inaugurated! 🎊
              </h3>
              <p className="text-xl md:text-3xl text-primary-foreground font-medium mb-2 animate-shimmer bg-gradient-to-r from-primary-foreground via-celebration-gold to-primary-foreground bg-clip-text text-transparent" 
                 style={{ backgroundSize: '200% 100%' }}>
                Welcome to a new era of growth and opportunity!
              </p>
              <p className="text-lg md:text-xl text-celebration-gold font-semibold animate-float-gentle">
                Reach • Inspire • Support • Empower
              </p>
            </div>
            
            <div className="flex gap-4 justify-center items-center animate-bounce-in" style={{ animationDelay: '1.5s' }}>
              <Button
                onClick={() => window.location.reload()}
                className="text-xl px-8 py-4 rounded-full font-bold transform hover:scale-110 transition-all duration-300 animate-shimmer"
                variant="secondary"
                style={{ backgroundSize: '200% 100%' }}
              >
                🔄 Celebrate Again
              </Button>
              <Button
                onClick={() => setCurrentPage(1)}
                className="text-xl px-8 py-4 rounded-full font-bold transform hover:scale-110 transition-all duration-300"
                style={{ 
                  background: 'var(--gradient-balloons)',
                  color: 'white'
                }}
              >
                ← Back to Welcome
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiseInauguration;