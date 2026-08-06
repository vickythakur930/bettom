'use client';

import React from 'react';

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#020931]/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-4">
      {/* EveryMatrix Ripple Loader Spinner */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-[#FD2839] animate-ping opacity-75"></div>
        <div className="absolute w-12 h-12 rounded-full border-4 border-[#031A9A] animate-spin border-t-transparent"></div>
        <div className="w-4 h-4 rounded-full bg-[#FD2839]"></div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-white font-black text-sm tracking-widest uppercase animate-pulse">
          Loading Bettom...
        </span>
      </div>
    </div>
  );
}
