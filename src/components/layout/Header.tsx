'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { useBetSlipStore } from '@/store/useBetSlipStore';
import { useSportsStore } from '@/store/useSportsStore';
import { formatCurrency } from '@/utils/helpers';
import { User, Wallet, Ticket, LogOut } from 'lucide-react';

interface HeaderProps {
  onToggleMobileNav?: () => void;
}

export const ALL_SIDEBAR_GAMES_NAV = [
  { id: 'football', name: 'Football', icon: '⚽' },
  { id: 'cricket', name: 'Cricket', icon: '🏏' },
  { id: 'the-hundred', name: 'The Hundred', icon: '🏏' },
  { id: 'horse-racing', name: 'Horse Racing', icon: '🏇' },
  { id: 'greyhounds', name: 'Greyhounds', icon: '🐕' },
  { id: 'tennis', name: 'Tennis', icon: '🎾' },
  { id: 'basketball', name: 'Basketball', icon: '🏀' },
  { id: 'darts', name: 'Darts', icon: '🎯' },
  { id: 'handball', name: 'Handball', icon: '🤾' },
  { id: 'table-tennis', name: 'Table Tennis', icon: '🏓' },
  { id: 'mma', name: 'MMA', icon: '🥊' },
  { id: 'boxing', name: 'Boxing', icon: '🥊' },
  { id: 'snooker', name: 'Snooker', icon: '🎱' },
  { id: 'cycling', name: 'Cycling', icon: '🚴' },
  { id: 'formula-1', name: 'Formula 1', icon: '🏎️' },
  { id: 'motor-racing', name: 'MotoGP', icon: '🏍️' },
  { id: 'golf', name: 'Golf', icon: '⛳' },
  { id: 'esports', name: 'Esports', icon: '🎮' },
  { id: 'american-football', name: 'Am. Football', icon: '🏈' },
  { id: 'aussie-rules', name: 'Aussie Rules', icon: '🏉' },
  { id: 'badminton', name: 'Badminton', icon: '🏸' },
  { id: 'baseball', name: 'Baseball', icon: '⚾' },
  { id: 'biathlon', name: 'Biathlon', icon: '⛷️' },
  { id: 'chess', name: 'Chess', icon: '♟️' },
  { id: 'field-hockey', name: 'Field Hockey', icon: '🏑' },
  { id: 'floorball', name: 'Floorball', icon: '🏑' },
  { id: 'futsal', name: 'Futsal', icon: '⚽' },
  { id: 'gaelic-football', name: 'Gaelic Football', icon: '⚽' },
  { id: 'hurling', name: 'Hurling', icon: '🏑' },
  { id: 'ice-hockey', name: 'Ice Hockey', icon: '🏒' },
  { id: 'padel', name: 'Padel', icon: '🎾' },
  { id: 'politics', name: 'Politics', icon: '🗳️' },
  { id: 'rugby-league', name: 'Rugby League', icon: '🏉' },
  { id: 'rugby-union', name: 'Rugby Union', icon: '🏉' },
  { id: 'sailing', name: 'Sailing', icon: '⛵' },
  { id: 'specials', name: 'Specials', icon: '⭐' },
  { id: 'speedway', name: 'Speedway', icon: '🏍️' },
  { id: 'volleyball', name: 'Volleyball', icon: '🏐' },
  { id: 'water-polo', name: 'Water Polo', icon: '🤽' },
];

export const Header: React.FC<HeaderProps> = ({ onToggleMobileNav }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated, logout, openLoginModal, openRegisterModal } = useAuthStore();
  const { selections, toggleSlipOpen } = useBetSlipStore();
  const resetFilters = useSportsStore((state) => state.resetFilters);

  const navLinks = [
    { href: '/', label: 'SPORTS' },
    { href: '/sport/live-sports', label: 'IN-PLAY' },
    { href: '/sport/esports', label: 'E-SPORTS' },
    { href: '/casino', label: 'CASINO' },
    { href: '/live-casino', label: 'LIVE CASINO' },
    { href: '/virtuals', label: 'VIRTUALS' },
    { href: '/tournaments', label: 'TOURNAMENTS' },
    { href: '/promotions', label: 'PROMOTIONS' },
  ];

  const logoUrl = "https://storage.googleapis.com/stateless-bettom/2025/05/8a288d3f-bet-tom-standard-logo-01.svg";

  const handlePrefetch = (href: string) => {
    try {
      router.prefetch(href);
    } catch {}
  };

  const handleNavClick = (href: string) => {
    resetFilters();
    if (href === '/sport/esports') {
      useSportsStore.getState().setSelectedCategory('esports');
      useSportsStore.getState().setActiveSport('esports');
    }
  };

  return (
    <header className="HeaderContainer sticky top-0 z-40 bg-[#031A9A] text-white shadow-md select-none w-full">
      <div className="MainNav max-w-[1700px] mx-auto px-4 h-[84px] flex items-center justify-between gap-[5px]">
        {/* Logo */}
        <Link
          href="/"
          prefetch={true}
          onClick={() => handleNavClick('/')}
          onMouseEnter={() => handlePrefetch('/')}
          onTouchStart={() => handlePrefetch('/')}
          className="Logo flex justify-center items-center max-w-[180px] w-[10%] min-w-[75px] transition-all active:scale-95 shrink-0"
        >
          <div className="HeaderBranding w-[150px] cursor-pointer">
            <img
              src={logoUrl}
              alt="Logo"
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="border border-white/80 rounded-md p-1 bg-[#031A9A] flex items-center space-x-0.5 shadow-sm">
                      <span class="bg-[#FF2925] text-white px-2 py-0.5 rounded-sm font-black italic tracking-wider text-base">bet</span>
                      <span class="text-white px-2 py-0.5 font-black uppercase text-base tracking-wider">TOM</span>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </Link>

        {/* Primary Navigation Menu */}
        <nav className="PrimaryMenu hidden lg:flex items-center w-full">
          {navLinks.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                onClick={() => handleNavClick(item.href)}
                onMouseEnter={() => handlePrefetch(item.href)}
                onTouchStart={() => handlePrefetch(item.href)}
                className={`ItemMenu h-[84px] mx-[20px] cursor-pointer text-white relative flex flex-col justify-center transition-colors active:scale-95 ${
                  isActive ? 'Active text-[#22B04F] font-bold' : 'hover:text-[#22B04F]'
                }`}
              >
                <p className="h-[33px] mt-[35px] leading-none text-[14px] font-extrabold tracking-wider">{item.label}</p>
                <div
                  className={`MenuHover absolute bottom-0 left-0 right-0 h-[5px] transition-all ${
                    isActive ? 'bg-white scale-x-100 opacity-100' : 'bg-white/50 scale-x-0 group-hover:scale-x-100'
                  }`}
                ></div>
              </Link>
            );
          })}
        </nav>

        {/* Right Action / Auth Buttons */}
        <div className="AuthButtons flex items-center gap-[10px] shrink-0">
          <button
            onClick={toggleSlipOpen}
            className="flex items-center space-x-1 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-bold xl:hidden"
          >
            <Ticket className="w-4 h-4" />
            <span>SLIP</span>
            {selections.length > 0 && (
              <span className="bg-[#FF2925] text-white font-mono text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {selections.length}
              </span>
            )}
          </button>

          {isAuthenticated && user ? (
            <div className="flex items-center space-x-2 text-xs">
              <Link
                href="/wallet"
                className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md font-mono font-bold border border-white/20"
              >
                <Wallet className="w-3.5 h-3.5 text-emerald-400" />
                <span>{formatCurrency(user.balance, user.currency)}</span>
              </Link>
              <Link
                href="/profile"
                className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md font-bold border border-white/20"
              >
                <User className="w-3.5 h-3.5" />
                <span>{user.username}</span>
              </Link>
              <button
                onClick={logout}
                className="p-1.5 bg-white/10 hover:bg-rose-600 rounded-md transition-colors border border-white/20"
                title="Log Out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <div
                onClick={openLoginModal}
                className="Item ItemLogin border border-white font-bold text-[14px] h-[36px] px-[25px] flex items-center gap-[5px] cursor-pointer rounded-[10px] bg-[#031A9A] hover:bg-[#031A9A]/80 transition-all"
              >
                <p className="m-0 leading-none text-[14px] font-bold text-white">Login</p>
                <svg className="w-[15px] h-[15px] fill-white pb-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path>
                </svg>
              </div>

              <div
                onClick={openRegisterModal}
                className="Item ItemRegister bg-white text-[#031A9A] font-bold text-[14px] h-[36px] px-[25px] flex items-center gap-[5px] cursor-pointer rounded-[10px] transition-all hover:scale-[1.02] shadow-sm"
              >
                <p className="m-0 leading-none text-[14px] font-bold text-[#031A9A]">Join</p>
                <svg className="w-[15px] h-[15px] fill-[#031A9A] pb-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
