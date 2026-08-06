'use client';

import React from 'react';
import { useSportsStore } from '@/store/useSportsStore';
import { REGION_FILTERS } from '@/utils/sportsMockEngine';

export const RegionFilterBar: React.FC = () => {
  const { activeRegion, setActiveRegion, setSelectedCategory } = useSportsStore();

  return (
    <div className="relative mb-3 select-none font-['Nunito_Sans',sans-serif]">
      {/* OM-Slider__Container matching exact DOM snippet */}
      <div
        className="OM-Slider__Container OM-Slider__Loaded flex items-center space-x-1.5 overflow-x-auto scrollbar-none py-1 transition-transform duration-300"
        style={
          {
            transform: 'translateX(0px)',
            '--c-extra-08': '#1a1297',
            '--c-hover-base-01': '#e5e5e5',
          } as React.CSSProperties
        }
      >
        {REGION_FILTERS.map((region) => {
          const isActive =
            activeRegion === region.code ||
            activeRegion === region.id ||
            (activeRegion === '' && region.code === 'Popular');

          return (
            <div
              key={region.id}
              className={`OM-Slider__Item shrink-0 ${region.locationClass}`}
            >
              <button
                type="button"
                onClick={() => {
                  setActiveRegion(region.code);
                  setSelectedCategory('');
                }}
                className={`Anchor OM-Slider__Action flex items-center space-x-1.5 py-1.5 px-3 rounded-lg text-xs font-extrabold transition-all duration-150 cursor-pointer active:scale-95 border ${
                  isActive
                    ? 'isSelected bg-[#1a1297] text-white border-[#1a1297] shadow-sm'
                    : 'bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#1a1297] border-[#d5d5d5]'
                }`}
              >
                {region.flagUrl && (
                  <div className="OM-Slider__ItemIcon shrink-0 flex items-center">
                    <span
                      className="OM-Icon OM-Icon--AsBackground OM-Icon--flag OM-Icon--Medium1 w-4 h-4 rounded-full bg-cover bg-center shrink-0 border border-white/60 shadow-2xs"
                      style={{ backgroundImage: `url("${region.flagUrl}")` }}
                    ></span>
                  </div>
                )}
                <div className="OM-Slider__ItemText tracking-tight font-black text-[12px]">
                  {region.code}
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
