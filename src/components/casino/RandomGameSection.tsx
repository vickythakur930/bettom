'use client';

import React, { memo } from 'react';

interface RandomGameSectionProps {
  onSelectRandomGame?: () => void;
}

export const randomGamesList = [
  { vendor: 'Hacksaw', image: 'https://static.everymatrix.com/cms2/base/_casino/0/0D10AB6E6EE01DD6F9A26778F6978F04.jpg', title: 'Le Football Fan' },
  { vendor: 'RGS_Matrix', image: 'https://static.everymatrix.com/cms2/unique/_casino/4/473EE78E5286B62C915296089D39AE9C.jpg', title: 'Book of Souls II: El Dorado' },
  { vendor: 'Wazdan', image: 'https://static.everymatrix.com/cms2/unique/_casino/3/363584A77ED56A1BF9464406EB05409D.jpg', title: 'Hot Slot™: 777 Diamond Crown' },
  { vendor: 'OneXTwoGaming', image: 'https://static.everymatrix.com/cms2/unique/_casino/F/FF5CE1F869A9DE850457B3EA7C6D3C44.jpg', title: 'Burn in Love' },
  { vendor: 'Hacksaw', image: 'https://static.everymatrix.com/cms2/unique/_casino/5/55F26F26012FE78A2151AE24AFDBFF5A.jpg', title: 'Deal With Death™' },
  { vendor: 'RGS_Matrix', image: 'https://static.everymatrix.com/cms2/unique/_casino/0/07510EE6314DB3573DED6A0505554F5B.jpg', title: 'Pirates Remastered' },
  { vendor: 'NolimitCity', image: 'https://static.everymatrix.com/cms2/unique/_casino/7/7F59F2B30EFC81ACE9A8E8086C5F4B3F.jpg', title: 'Flight Mode' },
  { vendor: 'RGS_Matrix', image: 'https://static.everymatrix.com/cms2/unique/_casino/F/F663B0BD738B938074B5A0CE90A46B51.jpg', title: 'Wild Empire - Rome' },
  { vendor: 'QuickSpin', image: 'https://static.everymatrix.com/cms2/unique/_casino/9/92A3496A58FA3F32FD894ADDE33A75C1.jpg', title: 'El Capy' },
  { vendor: 'OneXTwoGaming', image: 'https://static.everymatrix.com/cms2/unique/_casino/7/72D0800A087B89A313178B705FC6A13A.jpg', title: 'Sweet Candy Blitz' },
  { vendor: 'RGS_Matrix', image: 'https://static.everymatrix.com/cms2/unique/_casino/6/6FB863430DECFAE8FFFABA09B2CADCA2.jpg', title: 'Gummy Galaxy' },
  { vendor: 'Blueprint', image: 'https://static.everymatrix.com/cms2/base/_casino/4/4514DFC11B0492213B1754A1B58514DE.jpg', title: 'The Goonies Cash Inferno' },
  { vendor: 'OneXTwoGaming', image: 'https://static.everymatrix.com/cms2/unique/_casino/C/CA0EA0407A5A3E19F35060E4EBCD9B23.jpg', title: 'Wolf Strike Hold and Win Extra' },
  { vendor: 'RGS_Matrix', image: 'https://static.everymatrix.com/cms2/unique/_casino/A/A18697C293B8B3B13E0D1492697C1A35.jpg', title: 'The Spanish Life' },
  { vendor: 'Gamevy', image: 'https://static.everymatrix.com/cms2/base/_casino/B/B021CB1D2C1FEFD4E30AC26CB472F59B.jpg', title: 'Big Fishin’ Bounty' },
  { vendor: 'EvolutionGaming', image: 'https://static.everymatrix.com/cms2/unique/_casino/4/496D2125E653F0769A780C6B8CB5915C.jpg', title: 'Fruit Shop' },
  { vendor: 'EvolutionGaming', image: 'https://static.everymatrix.com/cms2/unique/_casino/2/23B39A06146366512C72631B98846C64.jpg', title: 'Piggy Riches™ 3: Hog Heaven' },
  { vendor: 'Blueprint', image: 'https://static.everymatrix.com/cms2/unique/_casino/6/6FFD60F7760359DF39C3EDA614536CA9.jpg', title: 'Fishin Frenzy Power 4 slots' },
  { vendor: 'Hacksaw', image: 'https://static.everymatrix.com/cms2/unique/_casino/E/EA00E0708D6A24CA93EEE494366B6237.jpg', title: 'Break Bones' },
  { vendor: 'RGS_Matrix', image: 'https://static.everymatrix.com/cms2/base/_casino/B/BB229DCE48A0131AF14EB462B86C064E.jpg', title: "Hula Moolah" },
  { vendor: 'OneXTwoGaming', image: 'https://static.everymatrix.com/cms2/unique/_casino/6/6E5DCD7BD014EEF86B1E15A27445DEB3.jpg', title: 'Lucky Cauldron' },
  { vendor: 'EvolutionGaming', image: 'https://static.everymatrix.com/cms2/unique/_casino/2/24DFA474D99905C24BE34B4A15A1658C.jpg', title: 'Beheaded' },
  { vendor: 'OneXTwoGaming', image: 'https://static.everymatrix.com/cms2/unique/_casino/8/8AA6941364E5679D346C10B12D2F3770.jpg', title: 'Mad Cabs' },
  { vendor: 'QuickSpin', image: 'https://static.everymatrix.com/cms2/unique/_casino/6/6E5129D8092C50C9F13990D41BE55A00.jpg', title: 'Eastern Emeralds Megaways™' },
];

const RandomGameSectionComponent: React.FC<RandomGameSectionProps> = ({ onSelectRandomGame }) => {
  return (
    <div className="RandomGameContainer relative bg-[#e2e8f0]/90 rounded-2xl overflow-hidden py-5 my-4 border border-slate-300/60 shadow-sm select-none">
      {/* Background Games Row Container with mask fading on edges */}
      <div className="GamesContainer flex items-center gap-4 overflow-hidden h-[150px] relative px-4 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        {randomGamesList.map((g, idx) => (
          <div
            key={idx}
            className="RandomGameCard shrink-0 w-[175px] h-[130px] rounded-xl overflow-hidden relative shadow-md filter blur-[1.2px] opacity-80 transition-all hover:filter-none hover:opacity-100 hover:scale-105 border border-white/20 bg-slate-900"
          >
            <div className="RandomGameVendor hidden">{g.vendor}</div>
            <img
              className="RandomGameImage w-full h-full object-cover"
              src={g.image}
              alt={g.title}
              title={g.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80';
              }}
            />
          </div>
        ))}
      </div>

      {/* Center Question Mark Badge & PLAY A RANDOM GAME Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <div
          onClick={onSelectRandomGame}
          className="group flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform"
        >
          {/* White Hexagonal Badge with Blue Border and 3D Red Question Mark */}
          <div className="relative w-14 h-14 bg-white rounded-2xl border-[3.5px] border-[#031A9A] flex items-center justify-center shadow-2xl mb-[-12px] z-10 group-hover:rotate-6 transition-transform">
            <span className="text-[#FF2925] font-black text-3xl font-mono drop-shadow-md select-none">?</span>
          </div>

          {/* Dark Royal Blue Button matching photo */}
          <button
            type="button"
            className="px-6 py-2.5 bg-[#031A9A] hover:bg-[#021473] text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-xl border border-white/20 cursor-pointer"
          >
            PLAY A RANDOM GAME
          </button>
        </div>
      </div>
    </div>
  );
};

export const RandomGameSection = memo(RandomGameSectionComponent);
