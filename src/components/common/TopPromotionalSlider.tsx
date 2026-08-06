'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface BannerItem {
  id: string;
  image: string;
  link: string;
  title: string;
}

export const topSliderBanners: BannerItem[] = [
  {
    id: '193829',
    image: 'https://assets.nwacdn.com/4243/193829/193829_r1785497565_4_3_425.png',
    link: '/promotions',
    title: 'BET £20 GET 20 FREE SPINS ON SUPREME ZEUS',
  },
  {
    id: '193321',
    image: 'https://assets.nwacdn.com/4243/193321/193321_r1785138917_4_3_425.png',
    link: '/promotions',
    title: 'WAZDAN MYSTERY MULTIPLIER DROP £1,125,000',
  },
  {
    id: '193828',
    image: 'https://assets.nwacdn.com/4243/193828/193828_r1785497520_4_3_425.png',
    link: '/promotions',
    title: 'BET £10 GET 10 FREE SPINS ON THE GOONIES CASH INFERNO',
  },
  {
    id: '189172',
    image: 'https://assets.nwacdn.com/4243/189172/189172_r1783934086_4_3_425.png',
    link: '/casino',
    title: 'OUT OF THE WOODS',
  },
  {
    id: '193838',
    image: 'https://assets.nwacdn.com/4243/193838/193838_r1785506887_4_3_425.png',
    link: '/casino',
    title: 'SUPREME ZEUS SLOT RELEASE',
  },
  {
    id: '158440',
    image: 'https://assets.nwacdn.com/4243/158440/158440_r1780667322_4_3_425.png',
    link: '/live-casino',
    title: 'LIVE ROULETTE VIP TABLES',
  },
  {
    id: '193841',
    image: 'https://assets.nwacdn.com/4243/193841/193841_r1785507832_4_3_425.png',
    link: '/casino',
    title: 'THE GOONIES QUEST III',
  },
  {
    id: '185933',
    image: 'https://assets.nwacdn.com/4243/185933/185933_r1783934285_4_3_425.png',
    link: '/virtuals',
    title: 'VIRTUAL SPORTS BETTING',
  },
  {
    id: '159116',
    image: 'https://assets.nwacdn.com/4243/159116/159116_r1783502442_4_3_425.png',
    link: '/account/limits',
    title: 'ACCOUNT LIMITS & SAFER GAMBLING',
  },
  {
    id: '193840',
    image: 'https://assets.nwacdn.com/4243/193840/193840_r1785507668_4_3_425.png',
    link: '/casino',
    title: 'PIGGY RICHES 3 HOG HEAVEN',
  },
];

export const TopPromotionalSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -410 : 410;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group/banners my-2 select-none">
      {/* Left Navigation Chevron Button matching photo */}
      <button
        onClick={() => scroll('left')}
        className="w-8 h-8 rounded-full bg-[#031A9A]/90 hover:bg-[#FD2839] text-white flex items-center justify-center absolute left-1 top-1/2 -translate-y-1/2 z-20 shadow-xl border border-white/20 transition-all cursor-pointer"
        title="Previous Banner"
      >
        <ChevronLeft className="w-5 h-5 stroke-[3]" />
      </button>

      {/* Track Container (splide__track) */}
      <div
        ref={sliderRef}
        className="splide__track flex items-center space-x-2 overflow-x-auto scrollbar-none py-1 px-1"
      >
        {topSliderBanners.map((b) => (
          <div
            key={b.id}
            onClick={() => {
              window.location.href = b.link;
            }}
            className="splide__slide shrink-0 w-[300px] sm:w-[360px] lg:w-[400px] h-[225px] sm:h-[270px] lg:h-[300px] rounded-xl overflow-hidden shadow-md border border-white/30 relative cursor-pointer group hover:scale-[1.01] transition-transform bg-slate-900"
          >
            <img
              src={b.image}
              alt={b.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80';
              }}
            />
          </div>
        ))}
      </div>

      {/* Right Navigation Chevron Button matching photo */}
      <button
        onClick={() => scroll('right')}
        className="w-8 h-8 rounded-full bg-[#031A9A]/90 hover:bg-[#FD2839] text-white flex items-center justify-center absolute right-1 top-1/2 -translate-y-1/2 z-20 shadow-xl border border-white/20 transition-all cursor-pointer"
        title="Next Banner"
      >
        <ChevronRight className="w-5 h-5 stroke-[3]" />
      </button>
    </div>
  );
};
