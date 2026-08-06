'use client';

import React, { useEffect, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { usePathname } from 'next/navigation';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { RightSidebar } from '@/components/layout/RightSidebar';
import { Footer } from '@/components/layout/Footer';
import { MobileNav } from '@/components/layout/MobileNav';
import { useLiveOddsStore } from '@/store/useLiveOddsStore';
import dynamic from 'next/dynamic';

// Code-split modals and progress indicators for faster initial page load
const LoginModal = dynamic(() => import('@/components/auth/LoginModal').then((m) => m.LoginModal), {
  ssr: false,
});
const RegisterModal = dynamic(() => import('@/components/auth/RegisterModal').then((m) => m.RegisterModal), {
  ssr: false,
});
const NavigationProgress = dynamic(
  () => import('@/components/common/NavigationProgress').then((m) => m.NavigationProgress),
  { ssr: false }
);

interface ClientLayoutShellProps {
  children: React.ReactNode;
}

export const ClientLayoutShell: React.FC<ClientLayoutShellProps> = ({ children }) => {
  const updateOdds = useLiveOddsStore((state) => state.updateOdds);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();

  const hideLeftSidebar =
    pathname === '/casino' ||
    pathname?.startsWith('/casino') ||
    pathname === '/live-casino' ||
    pathname === '/virtuals' ||
    pathname === '/tournaments' ||
    pathname === '/promotions' ||
    pathname === '/sport/live-sports' ||
    pathname?.startsWith('/sport/live-sports');

  const hideRightSidebar =
    pathname === '/casino' ||
    pathname?.startsWith('/casino') ||
    pathname === '/live-casino' ||
    pathname === '/virtuals' ||
    pathname === '/tournaments' ||
    pathname === '/promotions';

  // Interval to update live odds every 4 seconds for dynamic sportsbook feel
  useEffect(() => {
    const interval = setInterval(() => {
      updateOdds();
    }, 4000);
    return () => clearInterval(interval);
  }, [updateOdds]);

  return (
    <>
      {/* Route & Component Navigation Progress Indicator */}
      <NavigationProgress />

      {/* Global Header */}
      <Header onToggleMobileNav={() => setIsMobileNavOpen((prev) => !prev)} />

      {/* Workspace 3-Column Independent Scroll Container */}
      <div className="max-w-[1700px] w-full mx-auto flex flex-1 h-[calc(100vh-84px)] overflow-hidden px-1">
        {/* Left Sidebar */}
        {!hideLeftSidebar && <LeftSidebar />}

        {/* Center Main Content Area */}
        <main className="flex-1 min-w-0 h-full overflow-y-auto scrollbar-thin p-2 sm:p-3 flex flex-col justify-between">
          <div>{children}</div>
          {/* Static Footer */}
          <Footer />
        </main>

        {/* Right Sidebar */}
        {!hideRightSidebar && <RightSidebar />}
      </div>

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Dynamically-Loaded Auth Modals */}
      <LoginModal />
      <RegisterModal />
    </>
  );
};
