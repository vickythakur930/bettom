'use client';

import React, { useEffect } from 'react';
import { LiveSportsBanner } from '@/components/sports/LiveSportsBanner';
import { MarketTabs } from '@/components/sports/MarketTabs';
import { useSportsStore } from '@/store/useSportsStore';
import { Trophy } from 'lucide-react';

export default function FootballPage() {
  const { setActiveSport } = useSportsStore();

  useEffect(() => {
    setActiveSport('football');
  }, [setActiveSport]);

  return (
    <div className="space-y-4">
      <LiveSportsBanner />
      <MarketTabs />

      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-8 text-center text-bettom-text space-y-3">
        <Trophy className="w-12 h-12 text-bettom-accent mx-auto" />
        <h2 className="font-extrabold text-lg">Football Matches & Premier League</h2>
        <p className="text-xs text-bettom-muted max-w-md mx-auto">
          View all live football fixtures, 1X2 moneyline odds, Asian handicaps, and goal totals.
        </p>
      </div>
    </div>
  );
}
