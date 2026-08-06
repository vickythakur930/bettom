'use client';

import React from 'react';
import { Trophy, ChevronRight } from 'lucide-react';
import { useSportsStore } from '@/store/useSportsStore';

interface CompetitionViewHeaderProps {
  categoryName: string;
  countryName: string;
  countryFlag?: string;
  matchCount: number;
  activePill: 'all' | 'outrights' | string;
  onSelectPill: (pill: string) => void;
}

const COUNTRY_SUB_COMPETITIONS: Record<
  string,
  { id: string; name: string; flag: string }[]
> = {
  'United Kingdom': [
    { id: 'the-hundred', name: 'The Hundred', flag: '🇬🇧' },
    { id: 'the-hundred-women', name: 'The Hundred Women', flag: '🇬🇧' },
  ],
  England: [
    { id: 'premier-league', name: 'Premier League', flag: '🇬🇧' },
    { id: 'championship', name: 'Championship', flag: '🇬🇧' },
    { id: 'efl-cup', name: 'EFL Cup', flag: '🇬🇧' },
    { id: 'community-shield', name: 'Community Shield', flag: '🇬🇧' },
  ],
  Spain: [{ id: 'laliga', name: 'LaLiga', flag: '🇪🇸' }],
  Italy: [{ id: 'serie-a', name: 'Serie A', flag: '🇮🇹' }],
  Germany: [{ id: 'bundesliga', name: 'Bundesliga', flag: '🇩🇪' }],
  France: [{ id: 'ligue-1', name: 'Ligue 1', flag: '🇫🇷' }],
  Scotland: [{ id: 'premiership', name: 'Premiership', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' }],
  Europe: [{ id: 'uefa-super-cup', name: 'UEFA Super Cup', flag: '🇪🇺' }],
  USA: [
    { id: 'nba', name: 'NBA', flag: '🇺🇸' },
    { id: 'mlb', name: 'MLB', flag: '🇺🇸' },
  ],
};

export const CompetitionViewHeader: React.FC<CompetitionViewHeaderProps> = ({
  categoryName,
  countryName,
  countryFlag = '🇬🇧',
  matchCount,
  activePill,
  onSelectPill,
}) => {
  const { setSelectedCategory, selectedCategory } = useSportsStore();
  const subComps = COUNTRY_SUB_COMPETITIONS[countryName] || [
    { id: selectedCategory, name: categoryName, flag: countryFlag },
  ];

  return (
    <div className="select-none mb-3 font-sans text-slate-800">
      {/* 1. Top Breadcrumb matching inspect DOM: Home > Flag Country */}
      <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-semibold mb-3">
        <a href="/" onClick={(e) => e.preventDefault()} className="text-slate-600 hover:text-[#031A9A] no-underline">
          Home
        </a>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="inline-flex items-center space-x-1 font-bold text-slate-800">
          <span className="text-sm">{countryFlag}</span>
          <span>{countryName}</span>
        </span>
      </div>

      {/* 2. Filter Pills Row matching screenshot */}
      <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none py-1">
        {/* All Pill */}
        <button
          onClick={() => onSelectPill('all')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            activePill === 'all'
              ? 'bg-[#020E50] text-white shadow-xs'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          All
        </button>

        {/* Outrights Pill */}
        <button
          onClick={() => onSelectPill('outrights')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center space-x-1.5 ${
            activePill === 'outrights'
              ? 'bg-[#FF2925] text-white shadow-xs'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          <Trophy className="w-3.5 h-3.5" />
          <span>Outrights</span>
        </button>

        {/* Sub-competition Pills */}
        {subComps.map((comp) => {
          const isActive = selectedCategory === comp.id || activePill === comp.id;
          return (
            <button
              key={comp.id}
              onClick={() => {
                setSelectedCategory(comp.id);
                onSelectPill(comp.id);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center space-x-1.5 ${
                isActive
                  ? 'bg-[#FF2925] text-white shadow-xs ring-1 ring-red-400'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <span className="text-sm">{comp.flag}</span>
              <span>{comp.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
