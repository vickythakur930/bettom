import React from 'react';
import './globals.css';
import { ClientLayoutShell } from '@/components/layout/ClientLayoutShell';

export const metadata = {
  title: 'Bettom Sportsbook | Live Sports & Basketball Betting',
  description:
    'Recreated Bettom Sportsbook with real-time basketball live odds, match tracker, instant cash-out, and bet builder.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-screen overflow-hidden flex flex-col bg-bettom-bg text-bettom-text">
        <ClientLayoutShell>{children}</ClientLayoutShell>
      </body>
    </html>
  );
}
