'use client';

import React from 'react';
import { useSportsStore } from '@/store/useSportsStore';

interface LeagueMeta {
  countryName: string;
  countryFlag: string;
  flagUrl: string;
  pills: { id: string; name: string; flag: string }[];
}

const leagueMetadata: Record<string, LeagueMeta> = {
  'the-hundred': {
    countryName: 'United Kingdom',
    countryFlag: '🇬🇧',
    flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
    pills: [
      { id: 'the-hundred', name: 'The Hundred', flag: '🇬🇧' },
      { id: 'the-hundred-women', name: 'The Hundred Women', flag: '🇬🇧' },
    ],
  },
  'the-hundred-women': {
    countryName: 'United Kingdom',
    countryFlag: '🇬🇧',
    flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
    pills: [
      { id: 'the-hundred', name: 'The Hundred', flag: '🇬🇧' },
      { id: 'the-hundred-women', name: 'The Hundred Women', flag: '🇬🇧' },
    ],
  },
  'uefa-super-cup': {
    countryName: 'Europe',
    countryFlag: '🇪🇺',
    flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/67.webp',
    pills: [
      { id: 'uefa-super-cup', name: 'UEFA Super Cup', flag: '🇪🇺' },
      { id: 'champions-league', name: 'UEFA Champions League', flag: '🇪🇺' },
    ],
  },
  'community-shield': {
    countryName: 'England',
    countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
    pills: [
      { id: 'community-shield', name: 'Community Shield', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      { id: 'premier-league', name: 'Premier League', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      { id: 'efl-cup', name: 'EFL Cup', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    ],
  },
  'premier-league': {
    countryName: 'England',
    countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
    pills: [
      { id: 'premier-league', name: 'Premier League', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      { id: 'championship', name: 'Championship', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      { id: 'efl-cup', name: 'EFL Cup', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    ],
  },
  'efl-cup': {
    countryName: 'England',
    countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
    pills: [
      { id: 'efl-cup', name: 'EFL Cup', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      { id: 'premier-league', name: 'Premier League', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    ],
  },
  championship: {
    countryName: 'England',
    countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
    pills: [
      { id: 'championship', name: 'Championship', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      { id: 'premier-league', name: 'Premier League', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    ],
  },
  premiership: {
    countryName: 'Scotland',
    countryFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/78.webp',
    pills: [{ id: 'premiership', name: 'Scottish Premiership', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' }],
  },
  laliga: {
    countryName: 'Spain',
    countryFlag: '🇪🇸',
    flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/65.webp',
    pills: [{ id: 'laliga', name: 'LaLiga', flag: '🇪🇸' }],
  },
  'serie-a': {
    countryName: 'Italy',
    countryFlag: '🇮🇹',
    flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/111.webp',
    pills: [{ id: 'serie-a', name: 'Serie A', flag: '🇮🇹' }],
  },
  bundesliga: {
    countryName: 'Germany',
    countryFlag: '🇩🇪',
    flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/54.webp',
    pills: [{ id: 'bundesliga', name: 'Bundesliga', flag: '🇩🇪' }],
  },
  'ligue-1': {
    countryName: 'France',
    countryFlag: '🇫🇷',
    flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/73.webp',
    pills: [{ id: 'ligue-1', name: 'Ligue 1', flag: '🇫🇷' }],
  },
  mlb: {
    countryName: 'USA',
    countryFlag: '🇺🇸',
    flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/229.webp',
    pills: [{ id: 'mlb', name: 'MLB', flag: '🇺🇸' }],
  },
};

export const LeagueHeaderView: React.FC = () => {
  const selectedCategory = useSportsStore((state) => state.selectedCategory);
  const setSelectedCategory = useSportsStore((state) => state.setSelectedCategory);

  const meta = leagueMetadata[selectedCategory];
  if (!meta) return null;

  return (
    <div className="bg-white/80 rounded-lg p-3 border border-slate-200 shadow-2xs mb-3 font-['Nunito_Sans',sans-serif]">
      {/* Photo 2 Breadcrumb Header */}
      <div className="flex items-center space-x-2 text-xs text-slate-500 mb-3 font-bold select-none">
        <span className="hover:text-slate-800 cursor-pointer">Home</span>
        <span className="text-slate-400">›</span>
        <div className="flex items-center space-x-1.5 text-slate-900 font-extrabold">
          <span
            className="w-4 h-4 rounded-full bg-cover bg-center shrink-0 border border-slate-200 shadow-2xs"
            style={{ backgroundImage: `url("${meta.flagUrl}")` }}
          ></span>
          <span>{meta.countryName}</span>
        </div>
      </div>

      {/* Photo 2 Filter Chips Pills Bar */}
      <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none pb-0.5 select-none">
        <button
          type="button"
          className="px-3.5 py-1.5 rounded-full text-xs font-black bg-[#E8E8E8] text-slate-800 hover:bg-slate-300 transition-colors cursor-pointer"
        >
          All
        </button>
        <button
          type="button"
          className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#E8E8E8] text-slate-800 hover:bg-slate-300 transition-colors flex items-center space-x-1 cursor-pointer"
        >
          <span>🏆</span>
          <span>Outrights</span>
        </button>
        {meta.pills.map((pill) => {
          const isActive = selectedCategory === pill.id;
          return (
            <button
              key={pill.id}
              type="button"
              onClick={() => setSelectedCategory(pill.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-black flex items-center space-x-1.5 border transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#FF2925] text-white border-[#FF2925] shadow-xs'
                  : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100'
              }`}
            >
              <span>{pill.flag}</span>
              <span>{pill.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
