'use client';

import React, { useState, useRef } from 'react';
import { RandomGameSection } from '@/components/casino/RandomGameSection';
import { CasinoGameCard } from '@/components/casino/CasinoGameCard';
import { TopPromotionalSlider } from '@/components/common/TopPromotionalSlider';
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Play,
  Dices,
  Flame,
  Sparkles,
  Layers,
  Crown,
  Trophy,
  Zap,
  Grid,
  Gamepad2,
  X,
  Info,
} from 'lucide-react';

interface GameItem {
  id: string;
  title: string;
  provider: string;
  image: string;
  isNew?: boolean;
  category: string;
  gradient?: string;
}

export default function CasinoPage() {
  const [activeCategory, setActiveCategory] = useState<string>('lobby');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoriesRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      categoriesRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'lobby', label: 'Lobby', isLobby: true },
    { id: 'popular', label: 'Popular Slots', count: 143 },
    { id: 'new', label: 'New Slots', count: 130 },
    { id: 'online', label: 'Online Slots', count: 1135 },
    { id: 'monopoly', label: 'Monopoly', count: 7 },
    { id: 'table', label: 'Table Games', count: 32 },
    { id: 'crash', label: 'Crash Games', count: 9 },
    { id: 'megaways', label: 'Megaways Slots', count: 132 },
    { id: 'bingo', label: 'Bingo', count: 4 },
    { id: 'mini-games', label: 'Mini Games', count: 24 },
    { id: 'plinko', label: 'Plinko', count: 5 },
    { id: 'scratchcards', label: 'Scratchcards', count: 92 },
    { id: 'blueprint', label: 'Blueprint', count: 114 },
    { id: 'hacksaw', label: 'Hacksaw', count: 146 },
    { id: 'redtigergaming', label: 'RedTigerGaming', count: 297 },
    { id: 'nolimitcity', label: 'No Limit City', count: 203 },
    { id: 'netent', label: 'Net Ent', count: 49 },
    { id: 'fantasma', label: 'Fantasma', count: 27 },
    { id: 'wazdan', label: 'Wazdan', count: 169 },
    { id: 'bragg', label: 'Bragg', count: 248 },
    { id: 'gamevy', label: 'Gamevy', count: 43 },
    { id: 'onextwogaming', label: 'OneXTwoGaming', count: 285 },
    { id: 'gamingrealms', label: 'GamingRealms', count: 59 },
    { id: 'bigtimegaming', label: 'Big Time Gaming', count: 28 },
    { id: 'relaxgaming', label: 'RelaxGaming', count: 179 },
    { id: 'quickspin', label: 'Quickspin', count: 38 },
    { id: 'spinoro', label: 'Spinoro', count: 123 },
    { id: 'armadillostudios', label: 'ArmadilloStudios', count: 32 },
    { id: 'boldplay', label: 'Boldplay', count: 33 },
    { id: 'slingogames', label: 'Slingo Games', count: 37 },
    { id: 'gamingcorps', label: 'GamingCorps', count: 32 },
  ];

  // Game list data matching exact EveryMatrix CDN thumbnails & photo reference

  const popularSlots: GameItem[] = [
    { id: 'eye-horus', title: 'EYE OF HORUS', provider: 'Blueprint', category: 'popular', image: 'https://static.everymatrix.com/cms2/base/_casino/B/B32CB1E4F8AFB624B84B91EBBA7D11B6.jpg' },
    { id: 'mighty-amazonia', title: 'MIGHTY HOT AMAZONIA', provider: 'Hacksaw', category: 'popular', image: 'https://static.everymatrix.com/cms2/base/_casino/A/AB26CF0C51046998AECC10CFF075217A.jpg' },
    { id: 'goonies-3', title: 'THE GOONIES QUEST III', provider: 'Blueprint', category: 'popular', image: 'https://static.everymatrix.com/cms2/unique/_casino/B/B4097486FE04EC1F3507DDF0C72BFBD9.jpg' },
    { id: 'goonies-inferno', title: 'THE GOONIES CASH INFERNO', provider: 'Blueprint', category: 'popular', isNew: true, image: 'https://static.everymatrix.com/cms2/base/_casino/4/4514DFC11B0492213B1754A1B58514DE.jpg' },
    { id: 'le-prechaun', title: 'LE PRECHAUN', provider: 'Hacksaw', category: 'popular', isNew: true, image: 'https://static.everymatrix.com/cms2/base/_casino/0/0D10AB6E6EE01DD6F9A26778F6978F04.jpg' },
    { id: 'blackjack-fp', title: 'BLACKJACK FIRST PERSON', provider: 'Evolution', category: 'popular', image: 'https://static.everymatrix.com/cms2/unique/_casino/4/44253243863D3F6E340BDDCA42182DE1.jpg' },
    { id: 'duck-hunters', title: 'DUCK HUNTERS', provider: 'Evolution', category: 'popular', image: 'https://static.everymatrix.com/cms2/unique/_casino/4/496D2125E653F0769A780C6B8CB5915C.jpg' },
    { id: 'starburst', title: 'STARBURST', provider: 'Evolution', category: 'popular', image: 'https://static.everymatrix.com/cms2/unique/_casino/2/23B39A06146366512C72631B98846C64.jpg' },
    { id: 'kong-balls', title: 'KONG EVEN BIGGER BALLS', provider: 'Blueprint', category: 'popular', image: 'https://static.everymatrix.com/cms2/unique/_casino/6/6FFD60F7760359DF39C3EDA614536CA9.jpg' },
    { id: 'fishin-frenzy', title: "FISHIN' FRENZY GOLD SPINS", provider: 'Blueprint', category: 'popular', image: 'https://static.everymatrix.com/cms2/base/_casino/4/4514DFC11B0492213B1754A1B58514DE.jpg' },
    { id: 'le-digger', title: 'LE DIGGER', provider: 'Hacksaw', category: 'popular', image: 'https://static.everymatrix.com/cms2/base/_casino/0/0D10AB6E6EE01DD6F9A26778F6978F04.jpg' },
    { id: 'king-kong-4', title: 'KING KONG CASH 4 BANANAS', provider: 'Blueprint', category: 'popular', image: 'https://static.everymatrix.com/cms2/unique/_casino/6/6FFD60F7760359DF39C3EDA614536CA9.jpg' },
  ];

  const newSlots: GameItem[] = [
    { id: 'wolf-fury', title: 'WOLF FURY FIRE BLITZ', provider: 'Blueprint', category: 'new', isNew: true, image: 'https://static.everymatrix.com/cms2/unique/_casino/C/CA0EA0407A5A3E19F35060E4EBCD9B23.jpg' },
    { id: 'goonies-inf-2', title: 'THE GOONIES CASH INFERNO', provider: 'Blueprint', category: 'new', isNew: true, image: 'https://static.everymatrix.com/cms2/base/_casino/4/4514DFC11B0492213B1754A1B58514DE.jpg' },
    { id: 'le-prech-2', title: 'LE PRECHAUN', provider: 'Hacksaw', category: 'new', isNew: true, image: 'https://static.everymatrix.com/cms2/base/_casino/0/0D10AB6E6EE01DD6F9A26778F6978F04.jpg' },
    { id: 'supreme-zeus', title: 'SUPREME ZEUS', provider: 'Hacksaw', category: 'new', isNew: true, image: 'https://static.everymatrix.com/cms2/unique/_casino/5/55F26F26012FE78A2151AE24AFDBFF5A.jpg' },
    { id: 'marlin-masters', title: 'MARLIN MASTERS OG', provider: 'Hacksaw', category: 'new', isNew: true, image: 'https://static.everymatrix.com/cms2/base/_casino/B/B021CB1D2C1FEFD4E30AC26CB472F59B.jpg' },
    { id: 'fruit-shop', title: 'FRUIT SHOP', provider: 'NetEnt', category: 'new', isNew: true, image: 'https://static.everymatrix.com/cms2/unique/_casino/4/496D2125E653F0769A780C6B8CB5915C.jpg' },
  ];

  const onlineSlots: GameItem[] = [
    { id: 'fishin-2', title: "FISHIN' FRENZY BIG CATCH", provider: 'Blueprint', category: 'online', image: 'https://static.everymatrix.com/cms2/unique/_casino/6/6FFD60F7760359DF39C3EDA614536CA9.jpg' },
    { id: 'pigs-olympus', title: '3 PIGS OF OLYMPUS 2', provider: 'Evolution', category: 'online', isNew: true, image: 'https://static.everymatrix.com/cms2/unique/_casino/2/23B39A06146366512C72631B98846C64.jpg' },
    { id: 'lucha-lucha', title: 'LUCHA LUCHA RESPIN RUMBLE', provider: 'Pragmatic', category: 'online', image: 'https://static.everymatrix.com/cms2/unique/_casino/F/FF5CE1F869A9DE850457B3EA7C6D3C44.jpg' },
    { id: 'eye-horus-2', title: 'EYE OF HORUS', provider: 'Blueprint', category: 'online', image: 'https://static.everymatrix.com/cms2/base/_casino/B/B32CB1E4F8AFB624B84B91EBBA7D11B6.jpg' },
    { id: 'treble-riches', title: 'TREBLE RICHES', provider: 'NetEnt', category: 'online', image: 'https://static.everymatrix.com/cms2/unique/_casino/3/363584A77ED56A1BF9464406EB05409D.jpg' },
    { id: 'clover-clover', title: 'CLOVER CLOVER', provider: 'Hacksaw', category: 'online', image: 'https://static.everymatrix.com/cms2/unique/_casino/E/EA00E0708D6A24CA93EEE494366B6237.jpg' },
  ];

  const monopolyGames: GameItem[] = [
    { id: 'mono-tapcards', title: 'MONOPOLY TAPCARDS', provider: 'Evolution', category: 'monopoly', image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&q=80' },
    { id: 'mono-rent-rush', title: 'MONOPOLY RENT RUSH', provider: 'Evolution', category: 'monopoly', image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&q=80' },
    { id: 'mono-money', title: 'MONOPOLY MONEY MAGNATE', provider: 'Evolution', category: 'monopoly', image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&q=80' },
    { id: 'mono-megapots', title: 'MONOPOLY MEGAPOTS', provider: 'Evolution', category: 'monopoly', image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&q=80' },
  ];

  const tableGames: GameItem[] = [
    { id: 'bj-lobby', title: 'BLACKJACK LOBBY', provider: 'Evolution', category: 'table', image: 'https://static.everymatrix.com/cms2/unique/_casino/4/44253243863D3F6E340BDDCA42182DE1.jpg' },
    { id: 'roulette-lobby', title: 'ROULETTE LOBBY', provider: 'Evolution', category: 'table', image: 'https://static.everymatrix.com/cms2/base/_casino/4/44253243863D3F6E340BDDCA42182DE1.jpg' },
    { id: '10p-roulette', title: '10P ROULETTE', provider: 'G', category: 'table', image: 'https://static.everymatrix.com/cms2/base/_casino/1/17E4E2E509CE12EE6C1A7FDDB206D27A.jpg' },
    { id: 'bj-fp-2', title: 'BLACKJACK FIRST PERSON', provider: 'Evolution', category: 'table', image: 'https://static.everymatrix.com/cms2/unique/_casino/4/44253243863D3F6E340BDDCA42182DE1.jpg' },
    { id: 'american-roulette', title: 'AMERICAN ROULETTE', provider: 'Boldplay', category: 'table', image: 'https://static.everymatrix.com/cms2/base/_casino/1/17E4E2E509CE12EE6C1A7FDDB206D27A.jpg' },
    { id: 'gold-roulette', title: 'GOLD ROULETTE', provider: 'Boldplay', category: 'table', image: 'https://static.everymatrix.com/cms2/base/_casino/1/17E4E2E509CE12EE6C1A7FDDB206D27A.jpg' },
  ];

  const crashGames: GameItem[] = [
    { id: 'ronaldinho', title: "RONALDINHO'S BONANZA", provider: 'Booming', category: 'crash', image: 'https://static.everymatrix.com/cms2/unique/_casino/7/7F59F2B30EFC81ACE9A8E8086C5F4B3F.jpg' },
    { id: 'speed-crash-1', title: 'SPEED CRASH', provider: 'Hacksaw', category: 'crash', image: 'https://static.everymatrix.com/cms2/unique/_casino/9/92A3496A58FA3F32FD894ADDE33A75C1.jpg' },
    { id: 'orbit-crash', title: 'ORBIT CRASH', provider: 'Leap', category: 'crash', image: 'https://static.everymatrix.com/cms2/unique/_casino/0/01D969F41CB02722502ACC2408971B58.jpg' },
  ];

  const miniGames: GameItem[] = [
    { id: 'mines-supreme', title: 'MINES SUPREME', provider: 'Hacksaw', category: 'mini', image: 'https://static.everymatrix.com/cms2/unique/_casino/7/74EF9FF4DD0EA0A237B50024340B3AC6.jpg' },
    { id: 'mines', title: 'MINES', provider: 'Hacksaw', category: 'mini', image: 'https://static.everymatrix.com/cms2/unique/_casino/6/6A8FA403CCAFD5F0965A239D3E20814F.jpg' },
    { id: 'hi-lo', title: 'HI-LO', provider: 'Hacksaw', category: 'mini', image: 'https://static.everymatrix.com/cms2/unique/_casino/E/EE65C675E7AB2A052F46BD79D3203E23.jpg' },
  ];

  const renderGameCard = (game: GameItem) => (
    <CasinoGameCard
      key={game.id}
      id={game.id}
      title={game.title}
      provider={game.provider}
      image={game.image}
      isNew={game.isNew}
      onClick={() => setSelectedGame(game)}
    />
  );


  return (
    <div className="space-y-6 select-none pb-12 font-['Nunito_Sans',sans-serif]">
      {/* 1. Promotional Banners Carousel matching exact DOM snippet (splide__track) & photo */}
      <TopPromotionalSlider />


      {/* 2. Category Filter Bar matching exact DOM CarouselNav snippet & photos */}
      <div className="relative bg-[#031A9A] rounded-[10px] shadow-md overflow-hidden flex items-center h-[52px]">
        {/* Scroll Left Button matching red chevron in photo */}
        <button
          onClick={() => scrollCategories('left')}
          className="w-9 h-full bg-[#FD2839] hover:bg-[#cc2121] text-white flex items-center justify-center shrink-0 z-20 transition-colors cursor-pointer shadow-md"
          title="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5 stroke-[3]" />
        </button>

        {/* CarouselItems List with exact spacing and font sizes */}
        <div
          ref={categoriesRef}
          className="CarouselItems flex items-center space-x-6 overflow-x-auto scrollbar-none px-4 h-full w-full"
        >
          {categories.map((c) => {
            const isActive = activeCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`CarouselItem SecondaryMenu flex items-center space-x-1.5 shrink-0 text-[13px] font-medium text-white transition-all cursor-pointer relative h-full px-1 border-b-[3px] ${
                  isActive ? 'active border-white font-bold opacity-100' : 'border-transparent opacity-80 hover:opacity-100'
                }`}
              >
                {/* SVG Icon matching exact DOM snippet */}
                {c.isLobby ? (
                  <svg className="CategoryLobbyIcon w-5 h-5 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26.015">
                    <g transform="translate(-35.333 -34.978)">
                      <path d="M57.612,37.659a3.721,3.721,0,0,0-3.535,4.883l-1.708,4.269-1.15-4.07a4.418,4.418,0,1,0-5.7.061l-1.151,4.016-1.75-4.358a3.722,3.722,0,1,0-4.827,2.418L41.182,59.7l.288,1.259,1.292,0,11.193.027,1.3,0,.29-1.265,3.408-14.876a3.72,3.72,0,0,0-1.339-7.192Zm0,5.816H57.6l-3.64,15.89-11.193-.027L39.135,43.473l-.08,0a2.1,2.1,0,1,1,1.8-1.028l3.763,9.373,2.8-9.781a2.8,2.8,0,1,1,1.9-.029l2.78,9.838,3.74-9.344a2.1,2.1,0,1,1,1.769.972Z" fill="#fff"></path>
                      <path d="M435.863,656.62a9.519,9.519,0,0,1-2.285,3.477,8.1,8.1,0,0,1-1.614,1.19,8.1,8.1,0,0,1,1.614,1.19,9.516,9.516,0,0,1,2.285,3.477,9.517,9.517,0,0,1,2.285-3.477,8.106,8.106,0,0,1,1.615-1.19,8.1,8.1,0,0,1-1.615-1.189A9.517,9.517,0,0,1,435.863,656.62Zm1.158,4.668a10.292,10.292,0,0,0-1.158,1.3,10.335,10.335,0,0,0-1.158-1.3h0a10.287,10.287,0,0,0,1.158-1.3,10.321,10.321,0,0,0,1.158,1.3h0Z" transform="translate(-387.531 -607.426)" fill="#fff"></path>
                    </g>
                  </svg>
                ) : (
                  <svg className="CasinoCategoryIcon w-5 h-5 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                    <path d="M56.69,35.168H39.63a4.475,4.475,0,0,0-4.47,4.47V56.7a4.475,4.475,0,0,0,4.47,4.47H56.69a4.475,4.475,0,0,0,4.47-4.47V39.638a4.475,4.475,0,0,0-4.47-4.47ZM41.91,56.605A2.187,2.187,0,1,1,44.1,54.418,2.188,2.188,0,0,1,41.91,56.605Zm-2.188-8.438a2.187,2.187,0,1,1,2.187,2.187A2.188,2.188,0,0,1,39.722,48.168Zm2.188-4.062A2.187,2.187,0,1,1,44.1,41.918,2.188,2.188,0,0,1,41.91,44.105Zm12.5,12.5A2.187,2.187,0,1,1,56.6,54.418,2.187,2.187,0,0,1,54.41,56.605Zm0-6.25A2.187,2.187,0,1,1,56.6,48.168,2.187,2.187,0,0,1,54.41,50.356Zm0-6.25A2.187,2.187,0,1,1,56.6,41.918,2.187,2.187,0,0,1,54.41,44.106Z" transform="translate(-35.16 -35.168)" fill="#fff"></path>
                  </svg>
                )}

                <span className="CategoryButton inline-flex items-center whitespace-nowrap font-medium">
                  <span>{c.label}</span>
                  {c.count !== undefined && (
                    <span className="CategoryButtonCount inline-flex items-center justify-center min-w-[18px] px-1.5 py-[1px] bg-[#8B95CB]/50 text-white font-sans text-[10px] font-bold rounded-full ml-1.5">
                      {c.count}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Scroll Right Button matching red chevron in photo */}
        <button
          onClick={() => scrollCategories('right')}
          className="w-9 h-full bg-[#FD2839] hover:bg-[#cc2121] text-white flex items-center justify-center shrink-0 z-20 transition-colors cursor-pointer shadow-md"
          title="Scroll Right"
        >
          <ChevronRight className="w-5 h-5 stroke-[3]" />
        </button>
      </div>

      {/* 3. Search Bar & Random Game Banner matching Page 1 PDF */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-4">
        <div className="relative max-w-xl mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for Games"
            className="w-full bg-slate-100 border border-slate-300 rounded-lg pl-9 pr-4 py-2 text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#031A9A] transition-colors shadow-2xs"
          />
        </div>

        {/* Play a Random Game Banner with exact EveryMatrix styling & thumbnails */}
        <RandomGameSection
          onSelectRandomGame={() => {
            const allGames = [...popularSlots, ...newSlots, ...onlineSlots, ...monopolyGames, ...tableGames, ...crashGames];
            const random = allGames[Math.floor(Math.random() * allGames.length)];
            setSelectedGame(random);
          }}
        />

      </div>

      {/* 4. Game Sections Grids matching Page 1, Page 2 & Page 3 PDF */}
      <div className="space-y-8">
        {/* Section 1: Popular Slots */}
        {(activeCategory === 'lobby' || activeCategory === 'popular') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#031A9A] text-white flex items-center justify-center font-bold">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <h2 className="font-black text-base text-slate-900 tracking-tight">Popular Slots</h2>
              </div>
              <button
                onClick={() => setActiveCategory('popular')}
                className="text-xs font-bold text-slate-500 hover:text-[#031A9A] transition-colors"
              >
                Show all (143)
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {popularSlots.map(renderGameCard)}
            </div>
          </div>
        )}

        {/* Section 2: New Slots */}
        {(activeCategory === 'lobby' || activeCategory === 'new') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#031A9A] text-white flex items-center justify-center font-bold">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <h2 className="font-black text-base text-slate-900 tracking-tight">New Slots</h2>
              </div>
              <button
                onClick={() => setActiveCategory('new')}
                className="text-xs font-bold text-slate-500 hover:text-[#031A9A] transition-colors"
              >
                Show all (130)
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {newSlots.map(renderGameCard)}
            </div>
          </div>
        )}

        {/* Section 3: Online Slots */}
        {(activeCategory === 'lobby' || activeCategory === 'online') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#031A9A] text-white flex items-center justify-center font-bold">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <h2 className="font-black text-base text-slate-900 tracking-tight">Online Slots</h2>
              </div>
              <button
                onClick={() => setActiveCategory('online')}
                className="text-xs font-bold text-slate-500 hover:text-[#031A9A] transition-colors"
              >
                Show all (1135)
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {onlineSlots.map(renderGameCard)}
            </div>
          </div>
        )}

        {/* Section 4: Monopoly */}
        {(activeCategory === 'lobby' || activeCategory === 'monopoly') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#031A9A] text-white flex items-center justify-center font-bold">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <h2 className="font-black text-base text-slate-900 tracking-tight">Monopoly</h2>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {monopolyGames.map(renderGameCard)}
            </div>
          </div>
        )}

        {/* Section 5: Table Games */}
        {(activeCategory === 'lobby' || activeCategory === 'table') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#031A9A] text-white flex items-center justify-center font-bold">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <h2 className="font-black text-base text-slate-900 tracking-tight">Table Games</h2>
              </div>
              <button
                onClick={() => setActiveCategory('table')}
                className="text-xs font-bold text-slate-500 hover:text-[#031A9A] transition-colors"
              >
                Show all (32)
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {tableGames.map(renderGameCard)}
            </div>
          </div>
        )}

        {/* Section 6: Crash Games */}
        {(activeCategory === 'lobby' || activeCategory === 'crash') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#031A9A] text-white flex items-center justify-center font-bold">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <h2 className="font-black text-base text-slate-900 tracking-tight">Crash Games</h2>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {crashGames.map(renderGameCard)}
            </div>
          </div>
        )}

        {/* Section 7: Mini Games */}
        {(activeCategory === 'lobby' || activeCategory === 'bingo' || activeCategory === 'megaways') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#031A9A] text-white flex items-center justify-center font-bold">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <h2 className="font-black text-base text-slate-900 tracking-tight">Mini Games & Instant Wins</h2>
              </div>
              <button className="text-xs font-bold text-slate-500 hover:text-[#031A9A] transition-colors">
                Show all (24)
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {miniGames.map(renderGameCard)}
            </div>
          </div>
        )}
      </div>

      {/* Game Launcher Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 text-white shadow-2xl relative space-y-4">
            <button
              onClick={() => setSelectedGame(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              <span className="bg-[#FF2925] text-white p-2 rounded-lg font-black text-xs">CASINO</span>
              <div>
                <h3 className="font-black text-xl text-white">{selectedGame.title}</h3>
                <p className="text-xs text-slate-400">Provider: {selectedGame.provider}</p>
              </div>
            </div>

            <div className="aspect-video bg-gradient-to-br from-slate-950 to-[#031A9A] rounded-xl flex flex-col items-center justify-center p-6 border border-white/10 relative overflow-hidden">
              <img
                src={selectedGame.image}
                alt={selectedGame.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#FF2925] text-white flex items-center justify-center mx-auto shadow-xl animate-pulse cursor-pointer">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <p className="font-extrabold text-sm text-yellow-300">Ready to Play?</p>
                <div className="flex justify-center space-x-3">
                  <button className="px-6 py-2.5 bg-[#FF2925] hover:bg-rose-600 text-white font-black text-xs rounded-lg shadow-md transition-transform hover:scale-105">
                    PLAY REAL MONEY
                  </button>
                  <button className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-lg border border-slate-600 transition-colors">
                    DEMO PLAY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
