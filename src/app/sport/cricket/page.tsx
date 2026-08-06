'use client';

import React, { useEffect } from 'react';
import { LiveSportsBanner } from '@/components/sports/LiveSportsBanner';
import { MarketTabs } from '@/components/sports/MarketTabs';
import { useSportsStore } from '@/store/useSportsStore';
import { Target } from 'lucide-react';

export default function CricketPage() {
  const { setActiveSport } = useSportsStore();

  useEffect(() => {
    setActiveSport('cricket');
  }, [setActiveSport]);

  return (
    <div className="space-y-4">
      <LiveSportsBanner />
      <MarketTabs />

      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-8 text-center text-bettom-text space-y-3">
        <Target className="w-12 h-12 text-bettom-accent mx-auto" />
        <h2 className="font-extrabold text-lg">Cricket Betting & Live Ball-by-Ball</h2>
        <p className="text-xs text-bettom-muted max-w-md mx-auto">
          IPL, T20 International, Test Matches, Top Batsman, and Over Runs betting markets.
        </p>
      </div>
    </div>
  );
}
