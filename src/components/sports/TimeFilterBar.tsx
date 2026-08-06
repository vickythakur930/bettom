'use client';

import React from 'react';
import { useSportsStore, TimeFilterValue } from '@/store/useSportsStore';
import { TIME_FILTERS } from '@/utils/sportsMockEngine';
import { Clock, Radio } from 'lucide-react';

export const TimeFilterBar: React.FC = () => {
  const { activeTimeFilter, setActiveTimeFilter } = useSportsStore();

  return (
    <div className="relative mb-3 select-none border-b border-slate-200 pb-2">
      <div className="flex items-center space-x-1.5 overflow-x-auto scrollbar-none">
        {TIME_FILTERS.map((tf) => {
          const isActive = activeTimeFilter === tf.id;

          return (
            <button
              key={tf.id}
              onClick={() => setActiveTimeFilter(tf.id as TimeFilterValue)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center space-x-1.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FF2925] ${
                isActive
                  ? tf.id === 'live'
                    ? 'bg-[#FF2925] text-white shadow-md shadow-red-500/30 border border-red-400'
                    : 'bg-[#020E50] text-white shadow-md border border-slate-700'
                  : tf.id === 'live'
                  ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 font-extrabold'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200'
              }`}
            >
              {tf.id === 'live' ? (
                <Radio className="w-3.5 h-3.5 animate-pulse text-current" />
              ) : (
                <Clock className="w-3.5 h-3.5 opacity-70" />
              )}
              <span>{tf.label}</span>
              {tf.badge && (
                <span className="bg-white/20 text-current text-[10px] font-black px-1.5 rounded-full">
                  {tf.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
