'use client';

import React from 'react';
import { useSportsStore } from '@/store/useSportsStore';
import { ChevronRight, Trophy, Flame, Target, Gamepad2, Shield, Circle, Dumbbell } from 'lucide-react';

export const SportsCircleRow: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useSportsStore();

  const sportsList = [
    { id: 'horse-racing', name: 'Horse R...', fullTitle: 'Horse Racing', counter: null },
    { id: 'football', name: 'Football', fullTitle: 'Football', counter: 1 },
    { id: 'greyhounds', name: 'Greyhou...', fullTitle: 'Greyhounds', counter: null },
    { id: 'basketball', name: 'Basketball', fullTitle: 'Basketball', counter: 3 },
    { id: 'tennis', name: 'Tennis', fullTitle: 'Tennis', counter: 24 },
    { id: 'darts', name: 'Darts', fullTitle: 'Darts', counter: 0 },
    { id: 'cricket', name: 'Cricket', fullTitle: 'Cricket', counter: 4 },
    { id: 'golf', name: 'Golf', fullTitle: 'Golf', counter: 1 },
    { id: 'am-football', name: 'Am. Foot...', fullTitle: 'Am. Football', counter: 0 },
    { id: 'aussie-rules', name: 'Aussie R...', fullTitle: 'Aussie Rules', counter: 0 },
    { id: 'badminton', name: 'Badminton', fullTitle: 'Badminton', counter: 4 },
    { id: 'baseball', name: 'Baseball', fullTitle: 'Baseball', counter: 0 },
    { id: 'boxing', name: 'Boxing', fullTitle: 'Boxing', counter: 0 },
    { id: 'esports', name: 'eSports', fullTitle: 'eSports', counter: 24 },
    { id: 'futsal', name: 'Futsal', fullTitle: 'Futsal', counter: 0 },
    { id: 'gaelic-football', name: 'Gaelic Football', fullTitle: 'Gaelic Football', counter: 0 },
    { id: 'handball', name: 'Handball', fullTitle: 'Handball', counter: 1 },
    { id: 'hurling', name: 'Hurling', fullTitle: 'Hurling', counter: 0 },
    { id: 'ice-hockey', name: 'Ice Hockey', fullTitle: 'Ice Hockey', counter: 0 },
    { id: 'mma', name: 'MMA', fullTitle: 'MMA', counter: 0 },
  ];

  return (
    <div className="relative mb-4 select-none group/slider">
      {/* Outer Slider Container matching inspect code */}
      <div className="OM-Slider__Container flex items-center space-x-2 overflow-x-auto scrollbar-none py-1 px-0.5">
        {sportsList.map((sport) => {
          const isActive = selectedCategory === sport.id || (selectedCategory === '' && sport.id === 'football');

          return (
            <div
              key={sport.id}
              onClick={() => setSelectedCategory(sport.id)}
              className={`OM-Slider__Item shrink-0 cursor-pointer transition-all duration-150 relative ${
                isActive ? 'isSelected' : ''
              }`}
            >
              {/* Card Container matching exact photo styling */}
              <span
                className={`OM-NavItem flex flex-col items-center justify-between w-[72px] h-[72px] sm:w-20 sm:h-20 p-2 rounded-xl transition-all relative overflow-hidden ${
                  isActive
                    ? 'bg-[#001489] text-white border-b-4 border-[#FF2925] shadow-md'
                    : 'bg-[#001489] text-white/90 hover:bg-[#020E50] hover:text-white'
                }`}
              >
                {/* Icon Container */}
                <span className="OM-NavItem__IconContainer mt-1 flex items-center justify-center">
                  <span className="OM-Icon w-6 h-6 flex items-center justify-center">
                    {sport.id === 'horse-racing' && <Trophy className="w-5 h-5 text-white" />}
                    {sport.id === 'football' && <Circle className="w-5 h-5 text-white fill-white/20" />}
                    {sport.id === 'greyhounds' && <Flame className="w-5 h-5 text-white" />}
                    {sport.id === 'basketball' && <Circle className="w-5 h-5 text-white" />}
                    {sport.id === 'tennis' && <Circle className="w-5 h-5 text-white" />}
                    {sport.id === 'darts' && <Target className="w-5 h-5 text-white" />}
                    {sport.id === 'cricket' && <Circle className="w-5 h-5 text-white" />}
                    {sport.id === 'golf' && <Target className="w-5 h-5 text-white" />}
                    {sport.id === 'am-football' && <Shield className="w-5 h-5 text-white" />}
                    {sport.id === 'aussie-rules' && <Shield className="w-5 h-5 text-white" />}
                    {sport.id === 'badminton' && <Trophy className="w-5 h-5 text-white" />}
                    {sport.id === 'baseball' && <Circle className="w-5 h-5 text-white" />}
                    {sport.id === 'boxing' && <Dumbbell className="w-5 h-5 text-white" />}
                    {sport.id === 'esports' && <Gamepad2 className="w-5 h-5 text-white" />}
                    {sport.id !== 'horse-racing' &&
                      sport.id !== 'football' &&
                      sport.id !== 'greyhounds' &&
                      sport.id !== 'basketball' &&
                      sport.id !== 'tennis' &&
                      sport.id !== 'darts' &&
                      sport.id !== 'cricket' &&
                      sport.id !== 'golf' &&
                      sport.id !== 'am-football' &&
                      sport.id !== 'aussie-rules' &&
                      sport.id !== 'badminton' &&
                      sport.id !== 'baseball' &&
                      sport.id !== 'boxing' &&
                      sport.id !== 'esports' && <Circle className="w-5 h-5 text-white" />}
                  </span>
                </span>

                {/* Name Label */}
                <span className="OM-NavItem__Name text-[10px] sm:text-[11px] font-extrabold tracking-tight truncate w-full text-center leading-none mb-0.5">
                  {sport.name}
                </span>

                {/* Live Event Counter Badge if present */}
                {sport.counter !== null && sport.counter > 0 && (
                  <span className="OM-NavItem__Counter absolute top-1 right-1 bg-[#FF2925] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white/40 shadow-sm">
                    {sport.counter}
                  </span>
                )}
              </span>
            </div>
          );
        })}
      </div>

      {/* Floating Red Arrow Button on the right matching photo */}
      <button
        className="w-7 h-7 rounded-full bg-[#FF2925] hover:bg-rose-600 text-white flex items-center justify-center absolute right-1 top-1/2 -translate-y-1/2 shadow-lg z-10 transition-transform hover:scale-110"
        title="Next sports"
      >
        <ChevronRight className="w-4 h-4 stroke-[3]" />
      </button>
    </div>
  );
};
