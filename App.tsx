import React from 'react';
import { Lantern } from './components/Lantern';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-neutral-950 text-amber-50 selection:bg-orange-500 selection:text-white">
      <header className="mb-16 text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-amber-500/80 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">
          THE ILLUMINATION
        </h1>
        <p className="text-neutral-500 text-xs font-mono uppercase tracking-[0.3em]">
          Visual Component Loaded
        </p>
      </header>

      <main className="w-full max-w-2xl flex flex-col items-center gap-12">
        
      
        <Lantern />
        
        
      </main>
     
    </div>
  );
}