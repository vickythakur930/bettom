'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const PromoCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: '164204',
      imgSrc: 'https://assets.nwacdn.com/4243/164204/164204_r1764317239_16_9_425.png',
      alt: 'INTRODUCING TOURNAMENTS',
      text: 'Free to enter! Prizes Available! Full Ts & Cs Apply.',
    },
    {
      id: '158999',
      imgSrc: 'https://assets.nwacdn.com/4243/158999/158999_r1783502598_16_9_425.png',
      alt: 'PLAY RESPONSIBLY',
      text: '18+ GambleAware',
    },
    {
      id: '184233',
      imgSrc: 'https://assets.nwacdn.com/4243/184233/184233_r1783502355_16_9_425.png',
      alt: 'NO MESSING. TRUSTLY IT.',
      text: 'TAKE ADVANTAGE OF SECURE & DIRECT BANK PAYMENTS',
    },
    {
      id: '187574',
      imgSrc: 'https://assets.nwacdn.com/4243/187574/187574_r1781252554_16_9_425.png',
      alt: 'YOUR GAME. YOUR BUILDER.',
      text: 'Min Total Odds 2/1 (3.0+) Full T&Cs Apply',
    },
    {
      id: '134246',
      imgSrc: 'https://assets.nwacdn.com/4243/134246/134246_r1768522255_16_9_425.png',
      alt: 'UP TO £25 FREE BET',
      text: 'New Accounts Only. Full T&Cs Apply.',
    },
    {
      id: '138711',
      imgSrc: 'https://assets.nwacdn.com/4243/138711/138711_r1760702031_16_9_425.png',
      alt: 'UP TO £50 BONUS FUNDS',
      text: 'Full T&Cs Apply. New accounts only.',
    },
    {
      id: '170056',
      imgSrc: 'https://assets.nwacdn.com/4243/170056/170056_r1768579010_16_9_425.png',
      alt: 'BETTOM PROMO',
      text: 'Available on selected markets only. Full T&Cs apply.',
    },
    {
      id: '136109',
      imgSrc: 'https://assets.nwacdn.com/4243/136109/136109_r1760701882_16_9_425.png',
      alt: 'BEST ODDS GUARANTEED',
      text: 'All UK & IRE Dog Racing from 10am. £100 max benefit. Full T&Cs Apply.',
    },
    {
      id: '127857',
      imgSrc: 'https://assets.nwacdn.com/4243/127857/127857_r1760702147_16_9_425.png',
      alt: 'DOUBLE RESULT PAYOUT',
      text: 'Valid On All UK & Irish Racing. Full T&Cs Apply.',
    },
    {
      id: '127856',
      imgSrc: 'https://assets.nwacdn.com/4243/127856/127856_r1760701957_16_9_425.png',
      alt: 'SPECIAL PROMO',
      text: 'Singles & Multiples. Max Benefit £100. T&Cs Apply.',
    },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -267 : 267;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (direction === 'right' && container.scrollLeft >= maxScroll - 10) {
        // Loop back to start smoothly
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (direction === 'left' && container.scrollLeft <= 10) {
        // Loop to end smoothly
        container.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Auto sliding effect every 3.5 seconds
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      handleScroll('right');
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="relative mb-4 select-none group/slider overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Arrows matching Photo */}
      <button
        onClick={() => handleScroll('left')}
        className="w-7 h-7 rounded-full bg-[#dc2626]/80 hover:bg-[#dc2626] text-white flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 shadow-lg z-20 transition-transform hover:scale-110"
        title="Previous banner"
      >
        <ChevronLeft className="w-4 h-4 stroke-[3]" />
      </button>

      <button
        onClick={() => handleScroll('right')}
        className="w-7 h-7 rounded-full bg-[#dc2626]/80 hover:bg-[#dc2626] text-white flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 shadow-lg z-20 transition-transform hover:scale-110"
        title="Next banner"
      >
        <ChevronRight className="w-4 h-4 stroke-[3]" />
      </button>

      {/* Splide Track Container matching DOM snippet */}
      <div className="splide__track splide__track--loop splide__track--ltr splide__track--draggable">
        <div
          ref={scrollContainerRef}
          className="splide__list flex space-x-2 overflow-x-auto scrollbar-none scroll-smooth cursor-grab active:cursor-grabbing py-1"
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`splide__slide shrink-0 w-[259px] h-[140px] rounded-xl overflow-hidden relative shadow-md border border-slate-200 group transition-all hover:scale-[1.01] banner-container-${slide.id}`}
            >
              {/* Banner Image */}
              <div className="li_image w-full h-full relative">
                <img
                  src={slide.imgSrc}
                  alt={slide.alt}
                  className="full w-full h-full object-cover rounded-xl"
                  loading="lazy"
                  onError={(e) => {
                    // Styled gradient fallback if remote assets are blocked
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Overlay Content matching DOM structure */}
              <div className="overlaybanner borderradius0 absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end">
                <div className="bannerContent">
                  <div className="container sliderBanner">
                    <div className="bg-content">
                      <div className="body pendingBody">
                        <div className="contentMain">
                          <span className="eventcontent text-[9px] font-bold text-white leading-tight drop-shadow">
                            {slide.text}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
