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
  X,
  Volume2,
  Maximize2,
  HelpCircle,
  Sparkles,
  Flame,
} from 'lucide-react';

interface LiveGameItem {
  id: string;
  title: string;
  provider: string;
  category: string;
  image: string;
  isNew?: boolean;
  minBet?: string;
  maxBet?: string;
  badge?: string;
}

export default function LiveCasinoPage() {
  const [activeCategory, setActiveCategory] = useState<string>('lobby');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGame, setSelectedGame] = useState<LiveGameItem | null>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoriesRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      categoriesRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'lobby', label: 'Lobby', isLobby: true },
    { id: 'featured', label: 'Featured', count: 13 },
    { id: 'roulette', label: 'Live Roulette', count: 17 },
    { id: 'blackjack', label: 'Live Blackjack', count: 13 },
    { id: 'gameshows', label: 'Game Shows', count: 28 },
    { id: 'baccarat', label: 'Baccarat', count: 26 },
    { id: 'poker', label: 'Poker', count: 4 },
    { id: 'other', label: 'Other', count: 8 },
    { id: 'evolution', label: 'Evolution', count: 112 },
  ];

  // Featured Games (Exact matching PDF Page 1)

  const featuredGames: LiveGameItem[] = [
    { id: 'lightning-roulette', title: 'LIGHTNING ROULETTE', provider: 'Evolution', category: 'featured', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80', minBet: '£0.20', maxBet: '£5,000', badge: '13 1/100k' },
    { id: 'monopoly-roll-em', title: "MONOPOLY ROLL 'EM", provider: 'Evolution', category: 'featured', isNew: true, image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&q=80', minBet: '£0.10', maxBet: '£1,000' },
    { id: 'blackjack-lobby', title: 'Blackjack Lobby', provider: 'Evolution', category: 'featured', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&q=80', minBet: '£5.00', maxBet: '£10,000' },
    { id: 'crazy-time', title: 'CRAZY TIME', provider: 'Evolution', category: 'featured', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80', minBet: '£0.10', maxBet: '£2,500' },
    { id: 'immersive-roulette', title: 'IMMERSIVE ROULETTE', provider: 'Evolution', category: 'featured', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80', minBet: '£1.00', maxBet: '£5,000' },
    { id: 'monopoly-big-baller', title: 'MONOPOLY BIG BALLER', provider: 'Evolution', category: 'featured', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80', minBet: '£0.10', maxBet: '£1,000' },
    { id: 'crazy-balls', title: 'CRAZY BALLS', provider: 'Evolution', category: 'featured', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80', minBet: '£0.10', maxBet: '£1,000' },
    { id: 'monopoly-live', title: 'MONOPOLY LIVE', provider: 'Evolution', category: 'featured', image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&q=80', minBet: '£0.10', maxBet: '£2,500' },
    { id: 'ice-fishing-live', title: 'ICE FISHING LIVE', provider: 'Evolution', category: 'featured', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80', minBet: '£0.20', maxBet: '£1,000' },
    { id: 'xxxtreme-lightning', title: 'XXXTREME LIGHTNING ROULETTE', provider: 'Evolution', category: 'featured', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80', minBet: '£0.20', maxBet: '£5,000' },
    { id: 'monopoly-roulette', title: 'MONOPOLY ROULETTE', provider: 'Evolution', category: 'featured', image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&q=80', minBet: '£0.50', maxBet: '£2,000' },
    { id: 'racetrack-live', title: 'RACETRACK LIVE', provider: 'Evolution', category: 'featured', image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=500&q=80', minBet: '£0.20', maxBet: '£1,000' },
  ];

  // Live Roulette Games (Matching PDF Page 1)
  const rouletteGames: LiveGameItem[] = [
    { id: 'roulette-lobby', title: 'Roulette Lobby', provider: 'Evolution', category: 'roulette', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80', minBet: '£0.10', maxBet: '£10,000' },
    { id: 'worldcup-roulette', title: 'WORLD CUP Roulette Live', provider: 'Evolution', category: 'roulette', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&q=80', minBet: '£0.50', maxBet: '£2,500' },
    { id: 'mono-roulette-2', title: 'MONOPOLY ROULETTE', provider: 'Evolution', category: 'roulette', image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&q=80', minBet: '£0.50', maxBet: '£2,000' },
    { id: 'lightning-roulette-2', title: 'LIGHTNING ROULETTE', provider: 'Evolution', category: 'roulette', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80', minBet: '£0.20', maxBet: '£5,000' },
    { id: 'immersive-roulette-2', title: 'IMMERSIVE ROULETTE', provider: 'Evolution', category: 'roulette', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80', minBet: '£1.00', maxBet: '£5,000' },
    { id: 'xxxtreme-roulette-2', title: 'XXXTREME LIGHTNING ROULETTE', provider: 'Evolution', category: 'roulette', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80', minBet: '£0.20', maxBet: '£5,000' },
    { id: 'instant-roulette', title: 'INSTANT ROULETTE', provider: 'Evolution', category: 'roulette', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80', minBet: '£0.10', maxBet: '£2,000' },
    { id: 'american-roulette', title: 'American Roulette', provider: 'Evolution', category: 'roulette', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80', minBet: '£0.20', maxBet: '£2,000' },
    { id: 'speed-roulette', title: 'Speed Roulette', provider: 'Evolution', category: 'roulette', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80', minBet: '£0.50', maxBet: '£5,000' },
    { id: 'fireball-roulette', title: 'FIREBALL ROULETTE', provider: 'Evolution', category: 'roulette', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80', minBet: '£0.20', maxBet: '£1,000' },
  ];

  // Live Blackjack Games (Matching PDF Page 2)
  const blackjackGames: LiveGameItem[] = [
    { id: 'bj-lobby-2', title: 'Blackjack Lobby', provider: 'Evolution', category: 'blackjack', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&q=80', minBet: '£5.00', maxBet: '£10,000' },
    { id: 'bj-a', title: 'Blackjack A', provider: 'Evolution', category: 'blackjack', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&q=80', minBet: '£10.00', maxBet: '£5,000' },
    { id: 'infinite-bj', title: 'BLACKJACK', provider: 'Evolution', category: 'blackjack', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&q=80', minBet: '£1.00', maxBet: '£1,000' },
    { id: 'free-bet-bj', title: 'FREE BET BLACKJACK', provider: 'Evolution', category: 'blackjack', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&q=80', minBet: '£1.00', maxBet: '£2,500' },
    { id: 'bet-stacker-bj', title: 'BET STACKER BLACKJACK', provider: 'Evolution', category: 'blackjack', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&q=80', minBet: '£2.00', maxBet: '£5,000' },
    { id: 'fun-21', title: 'FUN 21', provider: 'Evolution', category: 'blackjack', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&q=80', minBet: '£1.00', maxBet: '£1,000' },
    { id: 'always-5-bj', title: 'ALWAYS 5 BLACKJACK', provider: 'Evolution', category: 'blackjack', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&q=80', minBet: '£5.00', maxBet: '£2,500' },
    { id: 'bj-live', title: 'Blackjack Live', provider: 'Evolution', category: 'blackjack', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&q=80', minBet: '£5.00', maxBet: '£5,000' },
    { id: 'power-bj', title: 'POWER BLACKJACK', provider: 'Evolution', category: 'blackjack', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&q=80', minBet: '£1.00', maxBet: '£5,000' },
    { id: 'bj-party', title: 'BLACKJACK PARTY', provider: 'Evolution', category: 'blackjack', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&q=80', minBet: '£0.50', maxBet: '£500' },
    { id: 'easy-bj', title: 'EASY BLACKJACK', provider: 'Evolution', category: 'blackjack', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&q=80', minBet: '£1.00', maxBet: '£1,000' },
  ];

  // Game Shows (Matching PDF Page 2)
  const gameShows: LiveGameItem[] = [
    { id: 'crazy-time-2', title: 'CRAZY TIME', provider: 'Evolution', category: 'gameshows', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80', minBet: '£0.10', maxBet: '£2,500' },
    { id: 'monopoly-baller-2', title: 'MONOPOLY BIG BALLER', provider: 'Evolution', category: 'gameshows', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80', minBet: '£0.10', maxBet: '£1,000' },
    { id: 'monopoly-live-2', title: 'MONOPOLY LIVE', provider: 'Evolution', category: 'gameshows', image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&q=80', minBet: '£0.10', maxBet: '£2,500' },
    { id: 'crazy-balls-2', title: 'CRAZY BALLS', provider: 'Evolution', category: 'gameshows', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80', minBet: '£0.10', maxBet: '£1,000' },
    { id: 'ice-fishing-2', title: 'ICE FISHING LIVE', provider: 'Evolution', category: 'gameshows', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80', minBet: '£0.20', maxBet: '£1,000' },
    { id: 'lightning-storm', title: 'LIGHTNING STORM', provider: 'Evolution', category: 'gameshows', image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500&q=80', minBet: '£0.10', maxBet: '£5,000' },
    { id: 'xxxtreme-storm', title: 'XXXTREME LIGHTNING ROULETTE', provider: 'Evolution', category: 'gameshows', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80', minBet: '£0.20', maxBet: '£5,000' },
    { id: 'red-door-roulette', title: 'RED DOOR ROULETTE', provider: 'Evolution', category: 'gameshows', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80', minBet: '£0.20', maxBet: '£2,500' },
    { id: 'red-baron-live', title: 'RED BARON LIVE', provider: 'Evolution', category: 'gameshows', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80', minBet: '£0.50', maxBet: '£1,000' },
    { id: 'marble-race', title: 'MARBLE RACE LIVE', provider: 'Evolution', category: 'gameshows', image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=500&q=80', minBet: '£0.20', maxBet: '£500' },
    { id: 'stock-market', title: 'STOCK MARKET', provider: 'Evolution', category: 'gameshows', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80', minBet: '£0.50', maxBet: '£5,000' },
    { id: 'racetrack-2', title: 'RACETRACK LIVE', provider: 'Evolution', category: 'gameshows', image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=500&q=80', minBet: '£0.20', maxBet: '£1,000' },
  ];

  // Baccarat Games (Matching PDF Page 2)
  const baccaratGames: LiveGameItem[] = [
    { id: 'baccarat-lobby', title: 'Baccarat & Sic Bo Lobby', provider: 'Evolution', category: 'baccarat', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80', minBet: '£1.00', maxBet: '£10,000' },
    { id: 'speed-baccarat-a', title: 'Speed Baccarat A', provider: 'Evolution', category: 'baccarat', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80', minBet: '£1.00', maxBet: '£5,000' },
    { id: 'lightning-baccarat', title: 'LIGHTNING BACCARAT', provider: 'Evolution', category: 'baccarat', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80', minBet: '£1.00', maxBet: '£5,000' },
    { id: 'golden-wealth-baccarat', title: 'GOLDEN WEALTH BACCARAT', provider: 'Evolution', category: 'baccarat', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80', minBet: '£1.00', maxBet: '£2,500' },
    { id: 'no-commission-baccarat', title: 'NO COMMISSION BACCARAT', provider: 'Evolution', category: 'baccarat', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80', minBet: '£1.00', maxBet: '£5,000' },
  ];

  const filterGames = (games: LiveGameItem[]) => {
    if (!searchQuery) return games;
    return games.filter(
      (g) =>
        g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.provider.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Card Rendering matching exact EveryMatrix Shadow DOM Card styling & green hover overlay
  const renderLiveGameCard = (game: LiveGameItem) => (
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
    <div className="space-y-5 select-none pb-12 font-sans bg-[#eef2f5] p-2 sm:p-4 rounded-2xl">
      {/* 1. Promotional Banners Slider matching exact PDF Page 1 layout */}
      <TopPromotionalSlider />


      {/* 2. Sub-navigation Category Bar matching exact PDF Page 1 */}
      <div className="relative bg-[#031A9A] rounded-[10px] shadow-md overflow-hidden flex items-center h-[48px]">
        <button
          onClick={() => scrollCategories('left')}
          className="w-8 h-full bg-[#031A9A] hover:bg-[#FD2839] text-white flex items-center justify-center shrink-0 z-20 transition-colors cursor-pointer border-r border-white/10"
          title="Scroll Left"
        >
          <ChevronLeft className="w-4 h-4 stroke-[3]" />
        </button>

        <div
          ref={categoriesRef}
          className="flex items-center space-x-4 overflow-x-auto scrollbar-none px-3 h-full w-full"
        >
          {categories.map((c) => {
            const isActive = activeCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`flex items-center space-x-1.5 shrink-0 text-[13px] text-white transition-all cursor-pointer relative h-full px-2 border-b-[3px] ${
                  isActive ? 'border-white font-black opacity-100' : 'border-transparent opacity-85 hover:opacity-100 font-semibold'
                }`}
              >
                {/* SVG Icon */}
                {c.isLobby ? (
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 26 26.015">
                    <path d="M57.612,37.659a3.721,3.721,0,0,0-3.535,4.883l-1.708,4.269-1.15-4.07a4.418,4.418,0,1,0-5.7.061l-1.151,4.016-1.75-4.358a3.722,3.722,0,1,0-4.827,2.418L41.182,59.7l.288,1.259,1.292,0,11.193.027,1.3,0,.29-1.265,3.408-14.876a3.72,3.72,0,0,0-1.339-7.192Zm0,5.816H57.6l-3.64,15.89-11.193-.027L39.135,43.473l-.08,0a2.1,2.1,0,1,1,1.8-1.028l3.763,9.373,2.8-9.781a2.8,2.8,0,1,1,1.9-.029l2.78,9.838,3.74-9.344a2.1,2.1,0,1,1,1.769.972Z" transform="translate(-35.333 -34.978)" fill="#fff"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 26 26">
                    <path d="M56.69,35.168H39.63a4.475,4.475,0,0,0-4.47,4.47V56.7a4.475,4.475,0,0,0,4.47,4.47H56.69a4.475,4.475,0,0,0,4.47-4.47V39.638a4.475,4.475,0,0,0-4.47-4.47ZM41.91,56.605A2.187,2.187,0,1,1,44.1,54.418,2.188,2.188,0,0,1,41.91,56.605Zm-2.188-8.438a2.187,2.187,0,1,1,2.187,2.187A2.188,2.188,0,0,1,39.722,48.168Zm2.188-4.062A2.187,2.187,0,1,1,44.1,41.918,2.188,2.188,0,0,1,41.91,44.105Zm12.5,12.5A2.187,2.187,0,1,1,56.6,54.418,2.187,2.187,0,0,1,54.41,56.605Zm0-6.25A2.187,2.187,0,1,1,56.6,48.168,2.187,2.187,0,0,1,54.41,50.356Zm0-6.25A2.187,2.187,0,1,1,56.6,41.918,2.187,2.187,0,0,1,54.41,44.106Z" transform="translate(-35.16 -35.168)" fill="#fff"></path>
                  </svg>
                )}

                <span className="whitespace-nowrap font-medium">{c.label}</span>
                {c.count !== undefined && (
                  <span className="bg-white/20 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center ml-1">
                    {c.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => scrollCategories('right')}
          className="w-8 h-full bg-[#031A9A] hover:bg-[#FD2839] text-white flex items-center justify-center shrink-0 z-20 transition-colors cursor-pointer border-l border-white/10"
          title="Scroll Right"
        >
          <ChevronRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>

      {/* 3. Search Bar & Play A Random Game Box matching PDF Page 1 */}
      <div className="space-y-4">
        {/* Search Field */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for Games"
            className="w-full pl-9 pr-4 py-2 bg-[#e2e8f0] border border-slate-300/80 rounded-lg text-xs font-semibold text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#031A9A] shadow-inner"
          />
        </div>

        {/* Play A Random Game Box matching exact EveryMatrix styling & thumbnails */}
        <RandomGameSection
          onSelectRandomGame={() => {
            const allGames = [...featuredGames, ...rouletteGames, ...blackjackGames, ...gameShows, ...baccaratGames];
            const random = allGames[Math.floor(Math.random() * allGames.length)];
            setSelectedGame(random);
          }}
        />

      </div>

      {/* 4. Live Casino Game Grids (5 Columns) matching PDF Page 1 & Page 2 */}
      <div className="space-y-8 pt-2">
        {/* Section 1: Featured */}
        {(activeCategory === 'lobby' || activeCategory === 'featured') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-300/60 pb-2">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full border-2 border-[#031A9A] text-[#031A9A] flex items-center justify-center font-bold">
                  <Play className="w-3 h-3 fill-current ml-0.5 text-[#031A9A]" />
                </span>
                <h2 className="font-black text-lg text-[#031A9A] tracking-tight">Featured</h2>
              </div>
              <button
                onClick={() => setActiveCategory('featured')}
                className="text-xs font-bold text-slate-500 hover:text-[#031A9A] transition-colors cursor-pointer"
              >
                Show all (13)
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {filterGames(featuredGames).map(renderLiveGameCard)}
            </div>
          </div>
        )}

        {/* Section 2: Live Roulette */}
        {(activeCategory === 'lobby' || activeCategory === 'roulette') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-300/60 pb-2">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full border-2 border-[#031A9A] text-[#031A9A] flex items-center justify-center font-bold">
                  <Play className="w-3 h-3 fill-current ml-0.5 text-[#031A9A]" />
                </span>
                <h2 className="font-black text-lg text-[#031A9A] tracking-tight">Live Roulette</h2>
              </div>
              <button
                onClick={() => setActiveCategory('roulette')}
                className="text-xs font-bold text-slate-500 hover:text-[#031A9A] transition-colors cursor-pointer"
              >
                Show all (17)
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {filterGames(rouletteGames).map(renderLiveGameCard)}
            </div>
          </div>
        )}

        {/* Section 3: Live Blackjack */}
        {(activeCategory === 'lobby' || activeCategory === 'blackjack') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-300/60 pb-2">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full border-2 border-[#031A9A] text-[#031A9A] flex items-center justify-center font-bold">
                  <Play className="w-3 h-3 fill-current ml-0.5 text-[#031A9A]" />
                </span>
                <h2 className="font-black text-lg text-[#031A9A] tracking-tight">Live Blackjack</h2>
              </div>
              <button
                onClick={() => setActiveCategory('blackjack')}
                className="text-xs font-bold text-slate-500 hover:text-[#031A9A] transition-colors cursor-pointer"
              >
                Show all (13)
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {filterGames(blackjackGames).map(renderLiveGameCard)}
            </div>
          </div>
        )}

        {/* Section 4: Game Shows */}
        {(activeCategory === 'lobby' || activeCategory === 'gameshows') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-300/60 pb-2">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full border-2 border-[#031A9A] text-[#031A9A] flex items-center justify-center font-bold">
                  <Play className="w-3 h-3 fill-current ml-0.5 text-[#031A9A]" />
                </span>
                <h2 className="font-black text-lg text-[#031A9A] tracking-tight">Game Shows</h2>
              </div>
              <button
                onClick={() => setActiveCategory('gameshows')}
                className="text-xs font-bold text-slate-500 hover:text-[#031A9A] transition-colors cursor-pointer"
              >
                Show all (28)
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {filterGames(gameShows).map(renderLiveGameCard)}
            </div>
          </div>
        )}

        {/* Section 5: Baccarat */}
        {(activeCategory === 'lobby' || activeCategory === 'baccarat') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-300/60 pb-2">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full border-2 border-[#031A9A] text-[#031A9A] flex items-center justify-center font-bold">
                  <Play className="w-3 h-3 fill-current ml-0.5 text-[#031A9A]" />
                </span>
                <h2 className="font-black text-lg text-[#031A9A] tracking-tight">Baccarat</h2>
              </div>
              <button
                onClick={() => setActiveCategory('baccarat')}
                className="text-xs font-bold text-slate-500 hover:text-[#031A9A] transition-colors cursor-pointer"
              >
                Show all (26)
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {filterGames(baccaratGames).map(renderLiveGameCard)}
            </div>
          </div>
        )}
      </div>

      {/* 5. Interactive Game Launcher Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#020931] border border-white/20 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="bg-[#031A9A] p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <div>
                  <h3 className="font-black text-white text-base tracking-wide uppercase">
                    {selectedGame.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8B95CB]">
                    {selectedGame.provider} • LIVE DEALER TABLE
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedGame(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FD2839] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Screen Stream Simulator */}
            <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden group">
              <img
                src={selectedGame.image}
                alt={selectedGame.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020931] via-transparent to-black/50"></div>

              <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black/70 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span className="text-white text-xs font-extrabold tracking-wider">
                  LIVE DEALER FEED
                </span>
              </div>

              <div className="absolute top-4 right-4 flex items-center space-x-2 text-white">
                <button className="w-8 h-8 rounded-full bg-black/60 hover:bg-white/20 flex items-center justify-center">
                  <Volume2 className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-black/60 hover:bg-white/20 flex items-center justify-center">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FD2839] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer border-2 border-white">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <h4 className="font-black text-xl text-white tracking-wider uppercase drop-shadow-md">
                  CLICK TO JOIN DEALER TABLE
                </h4>
                <p className="text-xs font-semibold text-slate-300 max-w-md">
                  Experience real-time high-definition video streaming with professional live dealers and interactive betting controls.
                </p>
              </div>
            </div>

            {/* Controls Footer */}
            <div className="p-4 bg-[#031A9A] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-6 text-xs text-white">
                <div>
                  <span className="text-[#8B95CB] block font-medium">TABLE LIMITS</span>
                  <span className="font-mono font-bold">{selectedGame.minBet || '£0.20'} - {selectedGame.maxBet || '£5,000'}</span>
                </div>
                <div>
                  <span className="text-[#8B95CB] block font-medium">PROVIDER</span>
                  <span className="font-bold">{selectedGame.provider}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button className="px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer">
                  PLAY REAL MONEY
                </button>
                <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer">
                  DEMO MODE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
