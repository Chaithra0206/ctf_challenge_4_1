import React from 'react';

export const Lantern: React.FC = () => {
  const visualMatrix = {
    '--kelvin-K': 75,
    '--dim-3': 51,
    '--yaw-y': 121,
    '--dash-idx': 45,
    '--lumens-9': 57,
    '--flux-f': 102,
    '--alpha-A': 65,
    '--gamma-7': 55,
    '--zoom-2': 50,
    '--x-axis': 120,
    '--quantum-Q': 81,
    '--mass-m': 109,
    '--pascal-P': 80,
    '--bang-!': 33,
    '--const-c': 99,
    '--temp-T': 84,
  } as React.CSSProperties;

  return (
    <div 
      className="relative flex flex-col items-center justify-start py-12"
      style={visualMatrix}
    >
        <div className="w-[2px] h-16 bg-gradient-to-b from-neutral-800 to-amber-900/50 relative z-0"></div>
        
        <div 
          className="w-8 h-8 rounded-full border-4 border-amber-900/80 -mt-2 relative z-10 shadow-lg bg-neutral-900"
          style={{ 
            width: 'calc(var(--kelvin-K) * 0.4px)', 
            height: 'calc(var(--kelvin-K) * 0.4px)' 
          }}
        ></div>

        <div 
           className="w-32 h-8 bg-amber-950 rounded-t-2xl border-b-4 border-amber-900 relative z-20 shadow-xl"
           style={{ 
             width: 'calc(var(--quantum-Q) * 1.6px)' 
           }}
        ></div>

        <div 
            className="relative bg-gradient-to-b from-amber-500/10 to-amber-500/5 backdrop-blur-sm border-2 border-amber-900/30 overflow-hidden"
            style={{
                height: 'calc(var(--x-axis) * 1.5px)',
                width: 'calc(var(--flux-f) * 1.2px)',
                borderRadius: 'calc(var(--dim-3) * 0.5px)',
            }}
        >
            <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-md bg-orange-500 mix-blend-screen animate-pulse"
                style={{
                    width: 'calc(var(--gamma-7) * 0.8px)',
                    height: 'calc(var(--temp-T) * 1px)',
                    opacity: 'calc(var(--lumens-9) / 100)',
                    animationDuration: 'calc(var(--zoom-2) * 50ms)'
                }}
            />
            
            <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-8 bg-yellow-200 rounded-full blur-sm animate-bounce"
                style={{
                    animationDuration: 'calc(var(--mass-m) * 20ms)'
                }}
            />

            <div 
                className="absolute top-0 right-4 w-2 h-full bg-white/5 skew-x-6"
                style={{ transform: 'skewX(calc(var(--dash-idx) * -0.2deg))' }}
            />
             <div 
                className="absolute top-0 left-4 w-1 h-full bg-white/5 skew-x-6"
            />
        </div>

        <div 
            className="h-6 bg-amber-950 rounded-b-xl border-t-4 border-amber-900 shadow-2xl z-20"
            style={{ 
                width: 'calc(var(--const-c) * 1.3px)'
            }}
        ></div>

        <div 
            className="absolute bottom-0 translate-y-full w-48 h-12 bg-orange-500/20 blur-3xl rounded-full"
            style={{
                opacity: 'calc(var(--alpha-A) / 200)'
            }}
        />
        
        <div className="absolute inset-0 pointer-events-none">
            <div 
                className="absolute top-1/2 left-10 w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                style={{ animationDuration: 'calc(var(--bang-!) * 100ms)' }}
            />
             <div 
                className="absolute top-2/3 right-10 w-1 h-1 bg-orange-300 rounded-full animate-ping"
                style={{ animationDelay: '1s', animationDuration: 'calc(var(--pascal-P) * 50ms)' }}
            />
        </div>
    </div>
  );
};