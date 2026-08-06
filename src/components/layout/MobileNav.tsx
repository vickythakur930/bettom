'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useBetSlipStore } from '@/store/useBetSlipStore';
import { Trophy, Radio, Dribbble, Search, Ticket } from 'lucide-react';
import { cn } from '@/utils/helpers';

export const MobileNav: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { selections, toggleSlipOpen } = useBetSlipStore();

  const handlePrefetch = (href: string) => {
    try {
      router.prefetch(href);
    } catch {}
  };

  const navItems = [
    { href: '/', label: 'Sports', icon: Trophy },
    { href: '/sport/live-sports', label: 'Live Now', icon: Radio, badge: 'LIVE' },
    { href: '/sport/basketball', label: 'Basketball', icon: Dribbble },
    { href: '/search', label: 'Search', icon: Search },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-bettom-header/95 backdrop-blur border-t border-bettom-border px-2 py-1.5 md:hidden flex items-center justify-around">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            prefetch={true}
            onMouseEnter={() => handlePrefetch(item.href)}
            onTouchStart={() => handlePrefetch(item.href)}
            className={cn(
              'flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors relative active:scale-95',
              isActive ? 'text-bettom-accent font-bold' : 'text-bettom-muted hover:text-bettom-text'
            )}
          >
            <Icon className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] tracking-tight">{item.label}</span>
            {item.badge && (
              <span className="absolute top-0 right-2 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            )}
          </Link>
        );
      })}

      {/* Bet Slip Trigger */}
      <button
        onClick={toggleSlipOpen}
        className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-bettom-accent font-bold relative"
      >
        <div className="relative">
          <Ticket className="w-5 h-5" />
          {selections.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-bettom-accent text-bettom-bg text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center font-mono">
              {selections.length}
            </span>
          )}
        </div>
        <span className="text-[10px] tracking-tight">Slip</span>
      </button>
    </nav>
  );
};
