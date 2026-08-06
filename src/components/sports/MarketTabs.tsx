'use client';

import React from 'react';
import { useSportsStore } from '@/store/useSportsStore';
import { cn } from '@/utils/helpers';
import { Sparkles, Trophy, Layers, Activity, Users } from 'lucide-react';

const tabs = [
  { id: 'all', label: 'All Markets', icon: Sparkles },
  { id: 'main', label: 'Match Winner', icon: Trophy },
  { id: 'handicap', label: 'Spread / Handicap', icon: Layers },
  { id: 'totals', label: 'Total Points', icon: Activity },
  { id: 'quarters', label: 'Quarters / Halves', icon: Layers },
  { id: 'props', label: 'Player Props', icon: Users },
] as const;

export const MarketTabs: React.FC = () => {
  const { activeCategoryTab, setActiveCategoryTab } = useSportsStore();

  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeCategoryTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveCategoryTab(tab.id as any)}
            className={cn(
              'flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border',
              isActive
                ? 'bg-bettom-accent text-bettom-bg border-bettom-accent font-bold shadow-md shadow-bettom-accent/20'
                : 'bg-bettom-card hover:bg-bettom-surface text-bettom-muted hover:text-bettom-text border-bettom-border'
            )}
          >
            <Icon className={cn('w-3.5 h-3.5', isActive ? 'text-bettom-bg' : 'text-bettom-accent')} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
