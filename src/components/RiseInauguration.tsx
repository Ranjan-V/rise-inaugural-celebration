import { useState, useEffect } from 'react';
import { Button } from './ui/button';

const RiseInauguration = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleInaugurate = () => {
    setCurrentPage(2);
    setTimeout(() => setShowCelebration(true), 300);
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
    
    return Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className={`absolute w-2 h-2 ${colors[i % colors.length]} animate-confetti-fall opacity-80`}
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 2}s`
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
    
    return Array.from({ length: 8 }, (_, i) => (
      <div
        key={i}
        className={`absolute w-16 h-20 ${balloonColors[i % balloonColors.length]} rounded-full animate-balloon-float`}
        style={{
          left: `${10 + (i * 10)}%`,
          bottom: '20%',
          animationDelay: `${i * 0.3}s`,
          boxShadow: 'inset -5px -5px 0 rgba(255,255,255,0.3)'
        }}
      >
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-foreground opacity-50" />
      </div>
    ));
  };

  const createSparkles = () => {
    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-celebration-gold animate-sparkle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`
        }}
      />
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
          {/* Decorative elements for page 1 */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-celebration-gold rounded-full animate-celebrate-pulse opacity-30" />
          <div className="absolute top-20 right-20 w-16 h-16 bg-celebration-pink rounded-full animate-celebrate-pulse opacity-40" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-celebration-blue rounded-full animate-celebrate-pulse opacity-25" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-10 right-10 w-18 h-18 bg-celebration-purple rounded-full animate-celebrate-pulse opacity-35" style={{ animationDelay: '1.5s' }} />
          
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
                👤 Guest: XYZ, XYZ Position
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
          {/* Confetti */}
          {showCelebration && (
            <div className="absolute inset-0 pointer-events-none">
              {createConfetti()}
            </div>
          )}
          
          {/* Balloons */}
          {showCelebration && (
            <div className="absolute inset-0 pointer-events-none">
              {createBalloons()}
            </div>
          )}
          
          {/* Sparkles */}
          {showCelebration && (
            <div className="absolute inset-0 pointer-events-none">
              {createSparkles()}
            </div>
          )}
          
          {/* Ribbon */}
          {showCelebration && (
            <div className="absolute top-0 left-0 w-full h-2 bg-celebration-gold animate-ribbon-cut" />
          )}
          
          {/* Main content */}
          <div className="text-center z-10 max-w-4xl mx-auto p-8">
            <div className="animate-bounce-in">
              <h1 className="text-8xl md:text-9xl font-bold mb-8 drop-shadow-2xl animate-celebrate-pulse">
                <span className="text-primary-foreground">RISE</span>
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-celebration-gold mb-8 drop-shadow-lg animate-celebrate-pulse">
                Foundation
              </h2>
            </div>
            
            <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 animate-bounce-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 animate-celebrate-pulse">
                🎊 Successfully Inaugurated! 🎊
              </h3>
              <p className="text-xl md:text-2xl text-primary-foreground font-medium">
                Welcome to a new era of growth and opportunity!
              </p>
            </div>
            
            <div className="mt-8 animate-bounce-in" style={{ animationDelay: '1s' }}>
              <Button
                onClick={() => window.location.reload()}
                className="text-xl px-8 py-4 rounded-full font-bold transform hover:scale-110 transition-all duration-300"
                variant="secondary"
              >
                🔄 Celebrate Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiseInauguration;