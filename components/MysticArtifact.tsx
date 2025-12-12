import React, { useEffect, useRef, useState, useMemo } from 'react';

export const MysticArtifact: React.FC = () => {
  const artifactRef = useRef<HTMLDivElement>(null);
  const [decryptedKey, setDecryptedKey] = useState<string>('???');

  const physicsEngineStyles = useMemo(() => ({
    '--lumens-base': 108,
    '--anim-seed': 97,
    '--node-factor': 110,
    '--torque-x': 116,
    '--elevation-z': 101,
    '--refraction-idx': 114,
    '--noise-gate': 110,
  } as React.CSSProperties), []);

  useEffect(() => {
    if (!artifactRef.current) return;

    const computedStyle = getComputedStyle(artifactRef.current);
    
    const sequence = [
      '--lumens-base',
      '--anim-seed',
      '--node-factor',
      '--torque-x',
      '--elevation-z',
      '--refraction-idx',
      '--noise-gate'
    ];

    try {
      const chars = sequence.map(variable => {
        const val = computedStyle.getPropertyValue(variable).trim();
        const intVal = parseInt(val, 10);
        return String.fromCharCode(intVal);
      });

      const secret = chars.join('');
      setDecryptedKey(secret);
    } catch (e) {
      console.error("Decryption protocol failed", e);
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-8">
      <div 
        ref={artifactRef} 
        style={physicsEngineStyles}
        className="relative w-64 h-64 flex items-center justify-center group"
      >
        <div 
            className="absolute inset-0 rounded-full blur-3xl opacity-20 bg-cyan-500 animate-pulse"
            style={{ 
                transform: 'scale(calc(var(--lumens-base) / 100))' 
            }}
        />

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
            <div 
                className="h-8 border-2 border-cyan-500/50 rounded-t-xl mb-1"
                style={{ width: 'calc(var(--anim-seed) * 0.4px)' }}
            />

            <div 
                className="relative border-2 border-cyan-400 bg-slate-900/80 backdrop-blur-md overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                style={{ 
                    height: 'calc(var(--node-factor) * 1.5px)', 
                    width: 'calc(var(--torque-x) * 1px)',
                    borderRadius: '16px'
                }}
            >
                <div 
                    className="absolute inset-4 bg-cyan-300 rounded-full blur-xl mix-blend-screen animate-bounce"
                    style={{ 
                        opacity: 'calc((var(--elevation-z) - 50) / 100)',
                        animationDuration: '3s'
                    }}
                />
                
                <div 
                    className="absolute inset-0 border-r border-l border-cyan-900/30"
                    style={{ 
                        transform: 'skewX(calc(var(--refraction-idx) * 0.1deg))'
                    }} 
                />
            </div>

            <div 
                className="h-4 bg-cyan-900/40 rounded-b-lg mt-1 border border-cyan-800"
                style={{ width: 'calc(var(--noise-gate) * 0.8px)' }}
            />
        </div>

        <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full blur-[1px] shadow-[0_0_10px_cyan]" />
        </div>
      </div>

      <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          <span className="text-cyan-400 border-b-2 border-cyan-500/30 px-2 inline-block min-w-[120px]">
            {decryptedKey}
          </span>
          <span className="ml-3 text-slate-300">pitching</span>
        </h2>
        <div className="mt-2 h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
      </div>
    </div>
  );
};