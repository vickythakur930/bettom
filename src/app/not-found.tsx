'use client';

import React from 'react';
import Link from 'next/link';
import { Trophy, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto py-20 text-center space-y-4">
      <div className="w-16 h-16 rounded-full bg-bettom-surface border border-bettom-border flex items-center justify-center mx-auto text-bettom-accent">
        <Trophy className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-black text-bettom-text font-mono">404</h1>
      <h2 className="font-extrabold text-lg text-bettom-text">Page Not Found</h2>
      <p className="text-xs text-bettom-muted">
        The sports market or event you are looking for is no longer active.
      </p>

      <Link
        href="/"
        className="inline-flex items-center space-x-2 bg-bettom-accent text-bettom-bg font-extrabold text-xs px-5 py-3 rounded-xl shadow-lg shadow-bettom-accent/20 uppercase tracking-wider"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>RETURN TO LIVE SPORTS</span>
      </Link>
    </div>
  );
}
