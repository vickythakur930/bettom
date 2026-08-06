'use client';

import React, { useEffect } from 'react';
import { LiveSportsBanner } from '@/components/sports/LiveSportsBanner';
import { MarketTabs } from '@/components/sports/MarketTabs';
import { useSportsStore } from '@/store/useSportsStore';
import { Activity } from 'lucide-react';

export default function TennisPage() {
  const { setActiveSport } = useSportsStore();

  useEffect(() => {
    setActiveSport('tennis');
  }, [setActiveSport]);

  return (
    <div className="space-y-4">
      <LiveSportsBanner />
      <MarketTabs />

      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-8 text-center text-bettom-text space-y-3">
        <Activity className="w-12 h-12 text-bettom-accent mx-auto" />
        <h2 className="font-extrabold text-lg">Tennis Live Scores & Odds</h2>
        <p className="text-xs text-bettom-muted max-w-md mx-auto">
          Grand Slams, ATP, WTA Tour live point-by-point tracking and set winner markets.
        </p>
      </div>
    </div>
  );
}
