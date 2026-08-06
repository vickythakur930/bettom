'use client';

import React, { memo } from 'react';

export interface CasinoGameProps {
  id: string;
  title: string;
  provider: string;
  image: string;
  isNew?: boolean;
  providerLogo?: string;
  onClick?: () => void;
}

// Vendor logo mapping for EveryMatrix game providers
const vendorLogoMap: { [key: string]: string } = {
  Blueprint: 'https://static.everymatrix.com/cms2/base/_casino/E/EC1830A019B784A2F71858DF6D69624D.png',
  Hacksaw: 'https://static.everymatrix.com/cms2/base/_casino/4/430D48AC72FAD2E8293B3F985497D0D9.png',
  Evolution: 'https://static.everymatrix.com/cms2/base/_casino/5/524855D2B1C281FDF3B9E1BA6B58F58D.png',
  EvolutionGaming: 'https://static.everymatrix.com/cms2/base/_casino/5/524855D2B1C281FDF3B9E1BA6B58F58D.png',
  Pragmatic: 'https://static.everymatrix.com/cms2/base/_casino/9/9E58A31D0846519E6DF70D3E54FA5E58.png',
  NetEnt: 'https://static.everymatrix.com/cms2/base/_casino/1/1A1DF55C1897C9B147BEFBE8E9979313.png',
};

const CasinoGameCardComponent: React.FC<CasinoGameProps> = ({
  id,
  title,
  provider,
  image,
  isNew,
  providerLogo,
  onClick,
}) => {
  const vendorLogo = providerLogo || vendorLogoMap[provider];

  return (
    <div
      onClick={onClick}
      className="CasinoGameCardTile group relative w-full aspect-[1.5/1] rounded-[10px] overflow-hidden cursor-pointer select-none shadow-sm hover:shadow-2xl transition-shadow bg-slate-950 border border-slate-300/20"
    >
      {/* Game Thumbnail Background */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="GameBg w-full h-full object-cover transition-all duration-700 group-hover:blur-[5px] group-hover:grayscale group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80';
        }}
      />

      {/* Top Badges (NEW tag on left, Vendor Logo on right) */}
      <div className="GameExtraInfoContainer absolute top-0 left-0 right-0 p-2 z-10 flex items-center justify-between pointer-events-none">
        {/* Left: NEW Badge */}
        <div>
          {isNew && (
            <span className="GameExtraInfoLabel text-[10px] font-black uppercase text-white px-2 py-0.5 rounded-[10px] border border-white bg-black/40 backdrop-blur-xs tracking-wider">
              NEW
            </span>
          )}
        </div>

        {/* Right: Vendor Logo */}
        <div className="GameTopContainer flex items-center justify-end">
          {vendorLogo ? (
            <img
              src={vendorLogo}
              alt={provider}
              loading="lazy"
              className="w-10 h-7 object-contain drop-shadow-md"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : provider ? (
            <span className="text-[9px] font-bold text-white/90 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded border border-white/20">
              {provider}
            </span>
          ) : null}
        </div>
      </div>

      {/* Hover Overlay with Green Gradient & Start Now Button */}
      <div className="GameInfoWrapper absolute inset-0 bg-gradient-to-t from-black via-black/40 to-[#22B04E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 p-3 flex flex-col items-center justify-center">
        <div className="GameInfo flex flex-col items-center justify-center space-y-3 text-center">
          <h4 className="GameInfoName text-white font-extrabold text-xs sm:text-sm tracking-wide line-clamp-2 drop-shadow-md">
            {title}
          </h4>

          {/* Start Now Button matching exact EveryMatrix SVG & styling */}
          <button className="GameInfoBtn px-4 py-2 bg-gradient-to-b from-[#1d9643] via-[#22B04E] to-[#3ad069] text-white font-black text-xs rounded-[10px] border-2 border-[#073B17] hover:border-white shadow-lg transition-colors flex items-center gap-2 cursor-pointer transform group-hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28">
              <g id="Group_5260" data-name="Group 5260">
                <g id="Ellipse_664_copy" data-name="Ellipse 664 copy" fill="rgba(249,165,2,0)">
                  <path d="M 14 27 C 10.5 27 7.26 25.6 4.8 23.2 C 2.35 20.7 1 17.5 1 14 C 1 10.5 2.35 7.26 4.8 4.8 C 7.26 2.35 10.5 1 14 1 C 17.5 1 20.7 2.35 23.2 4.8 C 25.6 7.26 27 10.5 27 14 C 27 17.5 25.6 20.7 23.2 23.2 C 20.7 25.6 17.5 27 14 27 Z" stroke="none"></path>
                  <path d="M 14 2 C 10.8 2 7.78 3.25 5.51 5.51 C 3.25 7.78 2 10.8 2 14 C 2 17.2 3.25 20.2 5.51 22.48 C 7.78 24.75 10.8 26 14 26 C 17.2 26 20.2 24.75 22.48 22.48 C 24.75 20.2 26 17.2 26 14 C 26 10.8 24.75 7.78 22.48 5.51 C 20.2 3.25 17.2 2 14 2 M 14 0 C 21.73 0 28 6.27 28 14 C 28 21.73 21.73 28 14 28 C 6.27 28 0 21.73 0 14 C 0 6.27 6.27 0 14 0 Z" stroke="none" fill="#fff"></path>
                </g>
                <path id="Rounded_Rectangle_683" data-name="Rounded Rectangle 683" d="M1139,917.587V906.4a1.4,1.4,0,0,1,1.976,0l4.61,4.608a1.4,1.4,0,0,1,0,1.975l-4.61,4.607A1.4,1.4,0,0,1,1139,917.587Z" transform="translate(-1128 -900)" fill="#fff"></path>
              </g>
            </svg>
            <span>Start now!</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const CasinoGameCard = memo(CasinoGameCardComponent);
