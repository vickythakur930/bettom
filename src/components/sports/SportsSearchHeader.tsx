'use client';

import React from 'react';
import { useSportsStore } from '@/store/useSportsStore';
import { Search, X, SlidersHorizontal, RefreshCw, Star } from 'lucide-react';
import { OddsFormat } from '@/types/betslip';

export const SportsSearchHeader: React.FC = () => {
  const { searchQuery, setSearchQuery, oddsFormat, setOddsFormat, favorites, resetFilters } = useSportsStore();
  const favCount = Object.values(favorites).filter(Boolean).length;

  return (
    <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-2.5 sm:p-3 mb-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
      {/* Search Input Bar */}
      <div className="relative flex-1 min-w-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search teams, players, leagues, sports..."
          className="w-full pl-9 pr-8 py-2 bg-slate-50 text-slate-900 placeholder:text-slate-400 text-xs font-semibold rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#031A9A] focus:bg-white transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Controls & Odds Format Toggle */}
      <div className="flex items-center space-x-2 shrink-0 self-end sm:self-auto">
        {/* Favorites Badge Button */}
        {favCount > 0 && (
          <div className="flex items-center space-x-1 px-2.5 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-xs font-bold border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>{favCount} Saved</span>
          </div>
        )}

        {/* Odds Format Selector */}
        <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
          {(['decimal', 'fractional', 'american'] as OddsFormat[]).map((fmt) => (
            <button
              key={fmt}
              onClick={() => setOddsFormat(fmt)}
              className={`px-2 py-1 text-[11px] font-bold rounded-md capitalize transition-all ${
                oddsFormat === fmt
                  ? 'bg-[#031A9A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {fmt === 'decimal' ? 'Dec' : fmt === 'fractional' ? 'Frac' : 'Amer'}
            </button>
          ))}
        </div>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="p-2 text-slate-500 hover:text-[#031A9A] hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
          title="Reset Filters"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
