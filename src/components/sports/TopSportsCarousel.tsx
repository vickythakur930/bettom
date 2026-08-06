'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useSportsStore } from '@/store/useSportsStore';
import { TOP_SPORTS_LIST } from '@/utils/sportsMockEngine';
import {
  ChevronLeft,
  ChevronRight,
  Grid,
  Zap,
  CircleDot,
  Trophy,
  Flame,
  Activity,
  Dribbble,
  Target,
  Shield,
  ShieldAlert,
  Award,
  Snowflake,
  Disc,
  Layers,
  Box,
  Crosshair,
  Swords,
  Dumbbell,
  Circle,
  Compass,
  Flag,
  Gauge,
  Sun,
  Gamepad2,
} from 'lucide-react';
import { SportType } from '@/types/sports';

const SPORT_ICON_MAP: Record<string, React.ReactNode> = {
  Grid: <Grid className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />,
  CircleDot: <CircleDot className="w-5 h-5" />,
  Trophy: <Trophy className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />,
  Activity: <Activity className="w-5 h-5" />,
  Dribbble: <Dribbble className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
  Snowflake: <Snowflake className="w-5 h-5 text-cyan-300" />,
  Disc: <Disc className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Box: <Box className="w-5 h-5" />,
  Crosshair: <Crosshair className="w-5 h-5" />,
  Swords: <Swords className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  Circle: <Circle className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Flag: <Flag className="w-5 h-5 text-red-400" />,
  Gauge: <Gauge className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5 text-amber-300" />,
  Gamepad2: <Gamepad2 className="w-5 h-5 text-purple-300" />,
};

export const TopSportsCarousel: React.FC = () => {
  const activeSport = useSportsStore((state) => state.activeSport);
  const selectedCategory = useSportsStore((state) => state.selectedCategory);
  const setActiveSport = useSportsStore((state) => state.setActiveSport);
  const setSelectedCategory = useSportsStore((state) => state.setSelectedCategory);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState(0);

  // Mouse drag scrolling state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    return () => el.removeEventListener('scroll', checkScroll);
  }, [checkScroll]);

  // Scroll active item into view automatically when selected from anywhere
  useEffect(() => {
    if (!scrollRef.current) return;
    const activeEl = scrollRef.current.querySelector('[aria-selected="true"]');
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeSport, selectedCategory]);

  // Handle horizontal mouse wheel scroll
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    if (e.deltaY !== 0) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  // Scroll controls
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === 'left' ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Drag to scroll functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent, index: number, sportId: SportType) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = Math.min(TOP_SPORTS_LIST.length - 1, index + 1);
      setFocusedIndex(nextIndex);
      const nextSport = TOP_SPORTS_LIST[nextIndex];
      setActiveSport(nextSport.id);
      setSelectedCategory(nextSport.id);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = Math.max(0, index - 1);
      setFocusedIndex(prevIndex);
      const prevSport = TOP_SPORTS_LIST[prevIndex];
      setActiveSport(prevSport.id);
      setSelectedCategory(prevSport.id);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveSport(sportId);
      setSelectedCategory(sportId);
    }
  };

  return (
    <div className="relative mb-3 select-none group/carousel">
      {/* Scroll Left Button */}
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#031A9A] hover:bg-[#FF2925] text-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* Scroll Right Button */}
      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#031A9A] hover:bg-[#FF2925] text-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        className="flex items-center space-x-2 overflow-x-auto scrollbar-none py-1.5 px-1 scroll-smooth cursor-grab active:cursor-grabbing"
      >
        {TOP_SPORTS_LIST.map((sport, index) => {
          const isActive = activeSport === sport.id || selectedCategory === sport.id;

          return (
            <button
              key={sport.id}
              onClick={() => {
                setActiveSport(sport.id);
                setSelectedCategory(sport.id);
                setFocusedIndex(index);
              }}
              onKeyDown={(e) => handleKeyDown(e, index, sport.id)}
              tabIndex={0}
              role="tab"
              aria-selected={isActive}
              className={`shrink-0 flex flex-col items-center justify-between w-[80px] h-[78px] sm:w-[84px] sm:h-[82px] p-2 rounded-xl transition-all duration-200 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#FF2925] active:scale-95 ${
                isActive
                  ? 'bg-gradient-to-b from-[#031A9A] to-[#020E50] text-white border-b-4 border-[#FF2925] shadow-lg shadow-blue-900/40 scale-105'
                  : 'bg-[#001489]/90 hover:bg-[#031A9A] text-white/90 hover:text-white hover:scale-102 hover:shadow-md'
              }`}
            >
              {/* Event count badge */}
              {sport.count > 0 && (
                <span
                  className={`absolute top-1 right-1 px-1.5 py-0.5 text-[9px] font-black rounded-full border shadow-sm transition-transform duration-200 ${
                    sport.isLiveCount && sport.isLiveCount > 0
                      ? 'bg-[#FF2925] text-white border-white/50 animate-pulse'
                      : 'bg-[#020E50] text-white/90 border-white/20'
                  }`}
                >
                  {sport.isLiveCount && sport.isLiveCount > 0 ? `${sport.isLiveCount} LIVE` : sport.count}
                </span>
              )}

              {/* Icon Container */}
              <div className="mt-1 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                {SPORT_ICON_MAP[sport.iconName] || <Circle className="w-5 h-5" />}
              </div>

              {/* Sport Name */}
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-tight truncate w-full text-center leading-none mb-0.5">
                {sport.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
