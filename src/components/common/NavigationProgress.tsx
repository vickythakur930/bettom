'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const NavigationProgress: React.FC = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Finish loading animation when route changes complete
    setIsLoading(false);
  }, [pathname]);

  useEffect(() => {
    // Intercept clicks on standard <a> and <Link> elements to trigger instant loading progress
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.href) {
        const targetUrl = new URL(target.href, window.location.origin);
        if (
          targetUrl.origin === window.location.origin &&
          targetUrl.pathname !== window.location.pathname
        ) {
          setIsLoading(true);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[10000] pointer-events-none">
      {/* Top Red-to-Blue Loading Progress Bar */}
      <div className="h-1 bg-gradient-to-r from-[#FD2839] via-[#6272C3] to-[#031A9A] w-full animate-pulse shadow-md"></div>

      {/* Floating Top Right EveryMatrix Spinner */}
      <div className="fixed top-3 right-4 z-[10000] bg-[#031A9A] border border-white/20 px-3 py-1.5 rounded-full shadow-2xl flex items-center space-x-2">
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        <span className="text-white text-[11px] font-black tracking-wider uppercase">Loading...</span>
      </div>
    </div>
  );
};
