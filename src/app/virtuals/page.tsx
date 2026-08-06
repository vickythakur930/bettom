'use client';

import React, { useState, useRef, useCallback } from 'react';
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
  Trophy,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';

interface VirtualGameItem {
  id: string;
  title: string;
  provider: string;
  category: string;
  image: string;
  badge?: string;
  isNew?: boolean;
  minBet?: string;
  maxBet?: string;
}

export default function VirtualsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('lobby');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGame, setSelectedGame] = useState<VirtualGameItem | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categoriesRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoriesRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      categoriesRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'lobby', label: 'Lobby', isLobby: true },
    { id: 'horseracing', label: 'Horse Racing', count: 2 },
    { id: 'greyhounds', label: 'Greyhounds', count: 1 },
    { id: 'football', label: 'Football', count: 8 },
    { id: 'motorracing', label: 'Motor Racing', count: 1 },
    { id: 'golf', label: 'Golf', count: 1 },
    { id: 'all', label: 'All', count: 24 },
  ];

  // Horse Racing Games

  const horseRacingGames: VirtualGameItem[] = [
    {
      id: 'horses-streak',
      title: 'HORSES STREAK',
      provider: 'LEAP',
      category: 'horseracing',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80',
      minBet: '£0.50',
      maxBet: '£1,000',
    },
    {
      id: 'horses-streak-jumps',
      title: 'HORSES STREAK THE JUMPS',
      provider: 'LEAP',
      category: 'horseracing',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80',
      minBet: '£0.50',
      maxBet: '£1,000',
    },
  ];

  // Greyhounds Games
  const greyhoundsGames: VirtualGameItem[] = [
    {
      id: 'greyhound-streak',
      title: 'GREYHOUND STREAK',
      provider: 'LEAP',
      category: 'greyhounds',
      image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&q=80',
      minBet: '£0.50',
      maxBet: '£1,000',
    },
  ];

  // Football Games
  const footballGames: VirtualGameItem[] = [
    {
      id: 'virtual-league',
      title: 'VIRTUAL LEAGUE',
      provider: 'LEAP',
      category: 'football',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&q=80',
      minBet: '£0.50',
      maxBet: '£2,500',
    },
    {
      id: 'football-streak',
      title: 'FOOTBALL STREAK',
      provider: 'LEAP',
      category: 'football',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&q=80',
      minBet: '£0.50',
      maxBet: '£2,500',
    },
    {
      id: 'football-penalty-duel',
      title: 'FOOTBALL PENALTY DUEL',
      provider: 'LEAP',
      category: 'football',
      image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=500&q=80',
      minBet: '£0.50',
      maxBet: '£1,000',
    },
    {
      id: 'football-streak-champions',
      title: 'FOOTBALL STREAK CHAMPIONS',
      provider: 'LEAP',
      category: 'football',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=80',
      minBet: '£0.50',
      maxBet: '£2,500',
    },
    {
      id: 'football-cup-world',
      title: 'FOOTBALL CUP WORLD',
      provider: 'LEAP',
      category: 'football',
      image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=500&q=80',
      minBet: '£0.50',
      maxBet: '£2,500',
    },
    {
      id: 'euroleague-scheduled',
      title: 'EuroLeague Scheduled Legends',
      provider: 'LEAP',
      category: 'football',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&q=80',
      minBet: '£0.50',
      maxBet: '£1,000',
    },
    {
      id: 'football-league',
      title: 'FOOTBALL LEAGUE',
      provider: 'LEAP',
      category: 'football',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&q=80',
      minBet: '£0.50',
      maxBet: '£2,500',
    },
    {
      id: 'euroleague-instant',
      title: 'EuroLeague Instant Legends',
      provider: 'LEAP',
      category: 'football',
      image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=500&q=80',
      minBet: '£0.50',
      maxBet: '£1,000',
    },
  ];

  // Motor Racing Games
  const motorRacingGames: VirtualGameItem[] = [
    {
      id: 'nascar-streak',
      title: 'NASCAR STREAK',
      provider: 'LEAP',
      category: 'motorracing',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&q=80',
      minBet: '£0.50',
      maxBet: '£1,000',
    },
  ];

  // Golf Games
  const golfGames: VirtualGameItem[] = [
    {
      id: 'virtual-golf',
      title: 'VIRTUAL GOLF',
      provider: 'LEAP',
      category: 'golf',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=500&q=80',
      minBet: '£0.50',
      maxBet: '£1,000',
    },
  ];

  const filterGames = useCallback(
    (games: VirtualGameItem[]) => {
      if (!searchQuery) return games;
      const q = searchQuery.toLowerCase();
      return games.filter(
        (g) => g.title.toLowerCase().includes(q) || g.provider.toLowerCase().includes(q)
      );
    },
    [searchQuery]
  );

  const handleSelectGame = useCallback((game: VirtualGameItem) => {
    setSelectedGame(game);
  }, []);

  const renderVirtualGameCard = useCallback(
    (game: VirtualGameItem) => (
      <CasinoGameCard
        key={game.id}
        id={game.id}
        title={game.title}
        provider={game.provider || 'LEAP'}
        image={game.image}
        isNew={game.isNew}
        onClick={() => handleSelectGame(game)}
      />
    ),
    [handleSelectGame]
  );

  return (
    <div className="space-y-6 select-none pb-12 font-sans bg-[#eef2f5] p-2 sm:p-4 rounded-2xl">
      {/* 1. Top Promotional Banners Slider matching exact PDF Page 1 */}
      <TopPromotionalSlider />


      {/* 2. Category Navigation Bar matching PDF Page 1 */}
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
                className={`flex items-center space-x-1.5 shrink-0 text-[13px] text-white transition-all cursor-pointer relative h-full px-2 border-b-[3px] ${isActive ? 'border-white font-black opacity-100' : 'border-transparent opacity-85 hover:opacity-100 font-semibold'
                  }`}
              >
                {c.isLobby ? (
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 26 26.015">
                    <path d="M57.612,37.659a3.721,3.721,0,0,0-3.535,4.883l-1.708,4.269-1.15-4.07a4.418,4.418,0,1,0-5.7.061l-1.151,4.016-1.75-4.358a3.722,3.722,0,1,0-4.827,2.418L41.182,59.7l.288,1.259,1.292,0,11.193.027,1.3,0,.29-1.265,3.408-14.876a3.72,3.72,0,0,0-1.339-7.192Zm0,5.816H57.6l-3.64,15.89-11.193-.027L39.135,43.473l-.08,0a2.1,2.1,0,1,1,1.8-1.028l3.763,9.373,2.8-9.781a2.8,2.8,0,1,1,1.9-.029l2.78,9.838,3.74-9.344a2.1,2.1,0,1,1,1.769.972Z" transform="translate(-35.333 -34.978)" fill="#fff"></path>
                  </svg>
                ) : (
                  <Trophy className="w-4 h-4 shrink-0 text-white" />
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

      {/* 3. Search Bar & Play A Random Game Box */}
      <div className="space-y-4">
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

        {/* Play Random Game Box with exact EveryMatrix styling & thumbnails */}
        <RandomGameSection
          onSelectRandomGame={() => {
            const all = [...horseRacingGames, ...greyhoundsGames, ...footballGames, ...motorRacingGames, ...golfGames];
            const random = all[Math.floor(Math.random() * all.length)];
            setSelectedGame(random);
          }}
        />

      </div>

      {/* 4. Virtual Games Section Grids */}
      <div className="space-y-8 pt-2">
        {/* Section 1: Horse Racing */}
        {(activeCategory === 'lobby' || activeCategory === 'horseracing' || activeCategory === 'all') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-300/60 pb-2">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full border-2 border-[#031A9A] text-[#031A9A] flex items-center justify-center font-bold">
                  <Play className="w-3 h-3 fill-current ml-0.5 text-[#031A9A]" />
                </span>
                <h2 className="font-black text-lg text-[#031A9A] tracking-tight">Horse Racing</h2>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {filterGames(horseRacingGames).map(renderVirtualGameCard)}
            </div>
          </div>
        )}

        {/* Section 2: Greyhounds */}
        {(activeCategory === 'lobby' || activeCategory === 'greyhounds' || activeCategory === 'all') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-300/60 pb-2">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full border-2 border-[#031A9A] text-[#031A9A] flex items-center justify-center font-bold">
                  <Play className="w-3 h-3 fill-current ml-0.5 text-[#031A9A]" />
                </span>
                <h2 className="font-black text-lg text-[#031A9A] tracking-tight">Greyhounds</h2>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {filterGames(greyhoundsGames).map(renderVirtualGameCard)}
            </div>
          </div>
        )}

        {/* Section 3: Football */}
        {(activeCategory === 'lobby' || activeCategory === 'football' || activeCategory === 'all') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-300/60 pb-2">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full border-2 border-[#031A9A] text-[#031A9A] flex items-center justify-center font-bold">
                  <Play className="w-3 h-3 fill-current ml-0.5 text-[#031A9A]" />
                </span>
                <h2 className="font-black text-lg text-[#031A9A] tracking-tight">Football</h2>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {filterGames(footballGames).map(renderVirtualGameCard)}
            </div>
          </div>
        )}

        {/* Section 4: Motor Racing */}
        {(activeCategory === 'lobby' || activeCategory === 'motorracing' || activeCategory === 'all') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-300/60 pb-2">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full border-2 border-[#031A9A] text-[#031A9A] flex items-center justify-center font-bold">
                  <Play className="w-3 h-3 fill-current ml-0.5 text-[#031A9A]" />
                </span>
                <h2 className="font-black text-lg text-[#031A9A] tracking-tight">Motor Racing</h2>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {filterGames(motorRacingGames).map(renderVirtualGameCard)}
            </div>
          </div>
        )}

        {/* Section 5: Golf */}
        {(activeCategory === 'lobby' || activeCategory === 'golf' || activeCategory === 'all') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-300/60 pb-2">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full border-2 border-[#031A9A] text-[#031A9A] flex items-center justify-center font-bold">
                  <Play className="w-3 h-3 fill-current ml-0.5 text-[#031A9A]" />
                </span>
                <h2 className="font-black text-lg text-[#031A9A] tracking-tight">Golf</h2>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {filterGames(golfGames).map(renderVirtualGameCard)}
            </div>
          </div>
        )}
      </div>

      {/* 5. Comprehensive Virtual Sports SEO Text Section matching PDF Page 2 & 3 */}
      <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6 text-slate-800">
        <div>
          <h1 className="text-2xl font-black text-[#031A9A] tracking-tight mb-2">
            Bet On Virtual Sports
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            If you want to bet on virtual sports at BetTOM, it's a format that fits around you rather than the other way round. Events run constantly, results come through quickly, and you can get involved without waiting for real fixtures to start.
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          <section className="space-y-1.5">
            <h2 className="text-base font-extrabold text-[#031A9A]">
              Virtual Sports Betting Explained
            </h2>
            <p>
              When you bet on virtual sports, you're placing wagers on computer-simulated events that are designed to mirror real sports like football, horse racing, and greyhounds. At a glance, everything looks familiar. You'll see teams, racecards, odds, and markets that follow the same structure as traditional betting, but the results are generated by certified random number generators rather than real-world performances. That's where virtual sports betting stands apart. There are no late injuries, no weather changes, and no unexpected team news to factor in. Every outcome is determined within a controlled system, and each event is independent of the last. Once you understand that, it becomes much easier to follow, because you're working with the same framework every time you place a bet. Another reason many people like betting on virtual sports at BetTOM is the pace. Events run throughout the day, often every few minutes, so you're not waiting around for see results. It's a steady, repeatable format that works whether you've got a short window of time or you want to stay a bit longer and explore different markets.
            </p>
          </section>

          <section className="space-y-1.5">
            <h2 className="text-base font-extrabold text-[#031A9A]">
              How to Bet on Virtual Sports At BetTOM
            </h2>
            <p>
              Getting started with virtual sports betting at BetTOM is straightforward, and the layout is designed so you don't have to spend much time figuring things out. Once you've registered an account and added funds, you can head straight into the virtual sports section and see what's coming up next. Each event is clearly displayed with a countdown, so you know exactly when it will begin. You'll be able to browse different sports, from virtual football betting to racing, and view the available markets for each one. The process itself follows a familiar pattern, where you choose your selection, enter your stake, and confirm your bet before the event starts. After placing your bet, the simulation runs over a short period, usually just a couple of minutes. The result is then shown, and any returns are settled shortly afterwards. From there, the next event is already queued up, which keeps everything moving without interruption.
            </p>
          </section>

          <section className="space-y-1.5">
            <h2 className="text-base font-extrabold text-[#031A9A]">
              Markets, Odds and Payouts in Virtual Sports
            </h2>
            <p>
              When you bet on virtual sports, the markets are structured in a way that mirrors traditional betting. In virtual football betting, for example, you'll see options like match winner, correct score, both teams to score, and total goals, all presented in a format that feels familiar to you. In racing, virtual horse racing odds are listed next to each runner, and you can place bets on the winner or explore options such as each-way, forecast, and tricast selections. The presentation is similar to real racecards, which helps make the transition between real and virtual betting feel seamless. Odds work in exactly the same way as they do in other forms of betting. They represent the probability assigned within the system, and your potential return is based on your stake and the price available at the time. Some platforms also show theoretical return figures, which keeps everything moving without interruption.
            </p>
          </section>

          <section className="space-y-1.5">
            <h2 className="text-base font-extrabold text-[#031A9A]">
              Explore Virtual Football Betting And Leagues
            </h2>
            <p>
              Virtual football betting is one of the most widely used formats when you're betting on virtual sports, mainly because it closely follows the structure of real competitions. You'll see leagues, cup style formats, and standalone matches presented with fixtures, tables, and short match simulations. The matches themselves are condensed into just a few minutes, but they still follow a recognisable pattern. You'll see goals, chances, and outcomes displayed clearly, sometimes alongside commentary-style overlays that help you follow what's happening. It's designed to feel familiar without taking up too much time. Markets also reflect what you'd expect from traditional football betting. You can place bets on match result, correct score, both teams to score, and goal totals, depending on what's available. While teams may resemble real clubs in style, it's important to remember that results are generated randomly within the system rather than based on real performance.
            </p>
          </section>

          <section className="space-y-1.5">
            <h2 className="text-base font-extrabold text-[#031A9A]">
              Virtual Horse Racing Odds and Fast Races
            </h2>
            <p>
              For those who prefer racing, virtual horse racing odds offer a format that closely resembles real world racing, just at a faster pace. You'll see racecards with runners, odds, and visual indicators that look similar to form guides, all laid out in a familiar way. Races take place frequently, and the simulations are short, which means you can see the results quickly. You can place win bets or explore options like each-way, forecast, and tricast, depending on your preference and what's available on the platform. Although the presentation is realistic, the outcomes are not influenced by past results or displayed form. Each race is generated independently, so when you bet on virtual sports, you're always dealing with a probability based system rather than real world trends.
            </p>
          </section>

          <section className="space-y-1.5">
            <h2 className="text-base font-extrabold text-[#031A9A]">
              Instant Virtual Sports and Always-On Action
            </h2>
            <p>
              One of the main reasons people are drawn to instant virtual sports is how quickly everything moves. Instead of having to wait for scheduled events, results are generated shortly after you place your bet, which makes it easier for you to fit around your time. You can log in, place a bet, watch the outcome, and decide what to do next without needing to plan ahead. The continuous cycle of events means there's always something coming up, whether you're interested in virtual football betting, racing, or other formats. At BetTOM, this always-on approach gives you lots of flexibility. You're not tied to specific kick-off times or race meetings, so you can choose when to get involved and how long you want to stay. That said, because events come around quickly, it's worth keeping an eye on how often you're placing bets and making sure you're staying within your own limits.
            </p>
          </section>

          <section className="space-y-1.5">
            <h2 className="text-base font-extrabold text-[#031A9A]">
              Tips for Smarter Virtual Sports Betting
            </h2>
            <p>
              If you're spending time with virtual sports betting, it helps to approach it with a clear and steady mindset. The format is simple to follow, but it's still based on chance, and every event is independent of the last. It's easy to assume that patterns or streaks might carry over, especially when events are happening quickly, but that isn't how the system works. Each result is generated separately, so previous outcomes don't influence what happens next. Treat each bet as its own decision and this will help you to keep things in perspective. It's also a good idea to set a budget before you start and stick to it. Because instant virtual sports move quickly, it can be easy to place several bets in a short space of time without really noticing. Keeping your stakes at a level that suits you and taking breaks when needed can help keep things balanced. When you bet on virtual sports at BetTOM, the aim is to keep things controlled and manageable. Understanding how the system works, rather than trying to predict outcomes, tends to lead to a more consistent experience over time.
            </p>
          </section>
        </div>

        {/* FAQs Accordion */}
        <div className="pt-4 border-t border-slate-200 space-y-4">
          <h2 className="text-lg font-black text-[#031A9A]">
            Bet On Virtual Sports FAQs
          </h2>

          <div className="space-y-3">
            {/* FAQ 1 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full p-4 text-left font-extrabold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-2 hover:bg-slate-100 transition-colors"
              >
                <span>How do virtual sports betting results work and are they really random?</span>
                <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${openFaq === 1 ? 'rotate-180 text-[#031A9A]' : 'text-slate-400'}`} />
              </button>
              {openFaq === 1 && (
                <div className="p-4 text-xs text-slate-600 border-t border-slate-200 bg-white leading-relaxed font-medium">
                  Virtual sports betting results are generated using certified random number generator systems. These systems produce outcomes based on probability, with each event operating independently from the last. While the visuals resemble real matches or races, the results are determined by software rather than any physical performance, which ensures a consistent and regulated process.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full p-4 text-left font-extrabold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-2 hover:bg-slate-100 transition-colors"
              >
                <span>What virtual football and virtual horse racing markets can I bet on at UK sites?</span>
                <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${openFaq === 2 ? 'rotate-180 text-[#031A9A]' : 'text-slate-400'}`} />
              </button>
              {openFaq === 2 && (
                <div className="p-4 text-xs text-slate-600 border-t border-slate-200 bg-white leading-relaxed font-medium">
                  When you bet on virtual sports, you'll find markets that mirror real betting. Virtual football betting includes options such as match result, correct score, both teams to score, and goal totals. Virtual horse racing odds typically cover win, each-way, forecast, and tricast bets. The exact range may vary, but the overall structure looks familiar.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <button
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full p-4 text-left font-extrabold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-2 hover:bg-slate-100 transition-colors"
              >
                <span>Can I bet on virtual sports on mobile and get the same odds and features as desktop?</span>
                <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${openFaq === 3 ? 'rotate-180 text-[#031A9A]' : 'text-slate-400'}`} />
              </button>
              {openFaq === 3 && (
                <div className="p-4 text-xs text-slate-600 border-t border-slate-200 bg-white leading-relaxed font-medium">
                  Yes, virtual sports betting is available on mobile with the same core features you'd find on desktop. At BetTOM, you can access events, view odds, place bets, and watch simulations directly from your phone or tablet. The layout's adapted for smaller screens, but the functionality remains consistent, so you can manage everything wherever you are.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 6. Interactive Game Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#020931] border border-white/20 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="bg-[#031A9A] p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <div>
                  <h3 className="font-black text-white text-base tracking-wide uppercase">
                    {selectedGame.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8B95CB]">
                    {selectedGame.provider} • INSTANT VIRTUAL SIMULATION
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

            <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden group">
              <img
                src={selectedGame.image}
                alt={selectedGame.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020931] via-transparent to-black/50"></div>

              <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black/70 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span className="text-white text-xs font-extrabold tracking-wider">
                  RNG SIMULATION LIVE
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
                  CLICK TO START VIRTUAL EVENT
                </h4>
                <p className="text-xs font-semibold text-slate-300 max-w-md">
                  Instant virtual sports simulation running on certified random number generators. Place your wagers and enjoy non-stop action!
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#031A9A] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-6 text-xs text-white">
                <div>
                  <span className="text-[#8B95CB] block font-medium">MIN/MAX BET</span>
                  <span className="font-mono font-bold">{selectedGame.minBet || '£0.50'} - {selectedGame.maxBet || '£1,000'}</span>
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
