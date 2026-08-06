'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSportsStore } from '@/store/useSportsStore';
import { HelpSupportModal, HelpTopic } from '@/components/support/HelpSupportModal';
import { SportType } from '@/types/sports';

export const LeftSidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchQuery = useSportsStore((state) => state.searchQuery);
  const setSearchQuery = useSportsStore((state) => state.setSearchQuery);
  const selectedCategory = useSportsStore((state) => state.selectedCategory);
  const setSelectedCategory = useSportsStore((state) => state.setSelectedCategory);
  const setActiveSport = useSportsStore((state) => state.setActiveSport);
  const [activeHelpTopic, setActiveHelpTopic] = useState<HelpTopic>(null);

  const handlePrefetch = (href: string) => {
    try {
      router.prefetch(href);
    } catch {}
  };

  const handleSelectSportCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setActiveSport(categoryId as SportType);
    if (pathname !== '/sport' && !pathname.startsWith('/sport/')) {
      router.push('/sport');
    }
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (val.trim().length > 0) {
      router.push('/sport');
    }
  };

  // 1. Site Links matching exact DOM snippet provided
  const siteLinks = [
    {
      label: 'In-Play',
      href: '/sport/live-sports',
      svg: (
        <svg className="S w-4 h-4 fill-current" viewBox="0 0 120 120">
          <path d="m48.384 32.544 36.672 27.456-36.672 27.456zm59.616 27.456c0 26.496-21.504 48-48 48s-48-21.504-48-48 21.504-48 48-48 48 21.504 48 48zm-9.6 0c0-21.12-17.28-38.4-38.4-38.4s-38.4 17.28-38.4 38.4 17.28 38.4 38.4 38.4 38.4-17.28 38.4-38.4z"></path>
        </svg>
      ),
    },
    {
      label: 'Results page',
      href: '/sport/event-results',
      svg: (
        <svg className="S w-4 h-4 fill-current" viewBox="0 0 120 120">
          <g transform="matrix(.96 0 0 .96 -.48 -.47988)">
            <path d="m72.7 50.5c-0.6 0-1.2-0.2-1.8-0.5l-7.9-5.4-7.9 5.4c-1.1 0.7-2.5 0.7-3.5 0a2.9 2.9 0 0 1-1.2-3.3l2.5-9.8-7.5-6.4c-1-0.8-1.3-2.2-0.9-3.4a3 3 0 0 1 2.8-2.1l9.4-0.5 3.4-9.4c0.4-1.2 1.6-2.1 2.9-2.1a3 3 0 0 1 2.9 2.1l3.4 9.4 9.4 0.5c1.3 0.1 2.4 0.9 2.8 2.1s0 2.5-0.9 3.4l-7.5 6.4 2.5 9.8c0.3 1.3-0.2 2.6-1.2 3.3-0.5 0.3-1.1 0.5-1.7 0.5zm37.2 41.7h-19.8v17.7c0 1.1-0.2 2.2-0.5 3.1h20.3c1.7 0 3.1-1.4 3.1-3.1v-14.6c0-1.7-1.4-3.1-3.1-3.1zm-74-8.4h-19.8c-1.7 0-3.1 1.4-3.1 3.1v22.9c0 1.7 1.4 3.1 3.1 3.1h20.3c-0.3-1-0.5-2-0.5-3.1zm44.8-25h-35.4c-1.7 0-3.1 1.4-3.1 3.1v47.9c0 1.7 1.4 3.1 3.1 3.1h35.4c1.7 0 3.1-1.4 3.1-3.1v-47.8c0-1.8-1.4-3.2-3.1-3.2zm-14.6 34.4c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1v-12.2c-0.6-0.6-1-1.4-1-2.3 0-1.7 1.4-3.1 3.1-3.1h1c1.7 0 3.1 1.4 3.1 3.1z"></path>
          </g>
        </svg>
      ),
    },
    {
      label: 'Live calendar',
      href: '/sport/live-calendar',
      svg: (
        <svg className="S w-4 h-4 fill-current" viewBox="0 0 120 120">
          <g transform="matrix(.96 0 0 .96 -.48 -.48)">
            <path d="m38 55.5h10v10h-10zm20 0h10v10h-10zm20 0h10v10h-10zm-40 20h10v10h-10zm20 0h10v10h-10zm20 0h10v10h-10zm20-50v-10h-10v10h-10v-10h-10v10h-10v-10h-10v10h-10v-10h-10v10h-15v85h100v-85zm5 75h-80v-65h5v5h10v-5h10v5h10v-5h10v5h10v-5h10v5h10v-5h5z"></path>
          </g>
        </svg>
      ),
    },
  ];

  // 2. Popular Leagues matching exact HTML DOM snippet & WebP flag icons with discipline SVGs
  const popularLeagues = [
    {
      id: 'the-hundred',
      name: 'The Hundred',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/76.webp',
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="13.1 13.1 99.9 99.9">
          <path d="M83.7 67.2a1.7 1.7 0 010-2.3l2.1-2.5a1.7 1.7 0 012.5 2.2l-2.2 2.5a1.7 1.7 0 01-2.4.1zM98.6 98a41.7 41.7 0 0015.6-6.2l-58.5-58.5a41.7 41.7 0 00-6.2 15.6L98.6 98z"></path>
        </svg>
      ),
    },
    {
      id: 'the-hundred-women',
      name: 'The Hundred Women',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/76.webp',
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="13.1 13.1 99.9 99.9">
          <path d="M83.7 67.2a1.7 1.7 0 010-2.3l2.1-2.5a1.7 1.7 0 012.5 2.2l-2.2 2.5a1.7 1.7 0 01-2.4.1zM98.6 98a41.7 41.7 0 0015.6-6.2l-58.5-58.5a41.7 41.7 0 00-6.2 15.6L98.6 98z"></path>
        </svg>
      ),
    },
    {
      id: 'uefa-super-cup',
      name: 'UEFA Super Cup',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/67.webp',
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zM21.29 58.78l6.36 2.58L35.41 76l-2.73 11h-4.06a42.19 42.19 0 01-7.33-28.22zm7.11-.93l-6.59-2.67A42 42 0 0135 31.83l6.53.84-1.6 11.81zm29.63-3l15.32-5.47a72.75 72.75 0 0112.47 9.88L83 76.1c-2.88 2.18-10.89 5.33-14.84 6.76L55.32 72.49zm-14.5-10.58l1.59-12.19c4.62-3.5 13.24-5.25 15.55-5.67l11.93 6.66-.73 13-15.26 5.5zm31.32-14l-12.17-6.79-.18-2.41h.56a42 42 0 0126.5 9.5l-1 1.46a42.77 42.77 0 00-13.71-1.76zM38.73 77.35l14.19-2.26L65.8 85.55 63.21 97.1l-13 2A70.61 70.61 0 0136 88.35zm12.61 25.11l13.2-2A41.11 41.11 0 0076.28 102h2.07a42 42 0 01-27.16 1.25zM83 99.83C89.77 94.1 92.7 89 93.56 87.22L99 84.41a41.73 41.73 0 01-16 15.42zm9.65-16.12l-6.18-7.19 2.89-17c3-2.74 6.71-6.07 8.42-7.59l6.46 3.6a41.75 41.75 0 01-2.52 23.51zM91.34 34.2l.88-1.26a41.86 41.86 0 0110.89 17.93l-4-2.26c-1.28-3.9-5.97-11.55-7.77-14.41z"></path>
        </svg>
      ),
    },
    {
      id: 'community-shield',
      name: 'Community Shield',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zM21.29 58.78l6.36 2.58L35.41 76l-2.73 11h-4.06a42.19 42.19 0 01-7.33-28.22zm7.11-.93l-6.59-2.67A42 42 0 0135 31.83l6.53.84-1.6 11.81zm29.63-3l15.32-5.47a72.75 72.75 0 0112.47 9.88L83 76.1c-2.88 2.18-10.89 5.33-14.84 6.76L55.32 72.49zm-14.5-10.58l1.59-12.19c4.62-3.5 13.24-5.25 15.55-5.67l11.93 6.66-.73 13-15.26 5.5zm31.32-14l-12.17-6.79-.18-2.41h.56a42 42 0 0126.5 9.5l-1 1.46a42.77 42.77 0 00-13.71-1.76zM38.73 77.35l14.19-2.26L65.8 85.55 63.21 97.1l-13 2A70.61 70.61 0 0136 88.35zm12.61 25.11l13.2-2A41.11 41.11 0 0076.28 102h2.07a42 42 0 01-27.16 1.25zM83 99.83C89.77 94.1 92.7 89 93.56 87.22L99 84.41a41.73 41.73 0 01-16 15.42zm9.65-16.12l-6.18-7.19 2.89-17c3-2.74 6.71-6.07 8.42-7.59l6.46 3.6a41.75 41.75 0 01-2.52 23.51zM91.34 34.2l.88-1.26a41.86 41.86 0 0110.89 17.93l-4-2.26c-1.28-3.9-5.97-11.55-7.77-14.41z"></path>
        </svg>
      ),
    },
    {
      id: 'premier-league',
      name: 'Premier League',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zM21.29 58.78l6.36 2.58L35.41 76l-2.73 11h-4.06a42.19 42.19 0 01-7.33-28.22zm7.11-.93l-6.59-2.67A42 42 0 0135 31.83l6.53.84-1.6 11.81zm29.63-3l15.32-5.47a72.75 72.75 0 0112.47 9.88L83 76.1c-2.88 2.18-10.89 5.33-14.84 6.76L55.32 72.49zm-14.5-10.58l1.59-12.19c4.62-3.5 13.24-5.25 15.55-5.67l11.93 6.66-.73 13-15.26 5.5zm31.32-14l-12.17-6.79-.18-2.41h.56a42 42 0 0126.5 9.5l-1 1.46a42.77 42.77 0 00-13.71-1.76zM38.73 77.35l14.19-2.26L65.8 85.55 63.21 97.1l-13 2A70.61 70.61 0 0136 88.35zm12.61 25.11l13.2-2A41.11 41.11 0 0076.28 102h2.07a42 42 0 01-27.16 1.25zM83 99.83C89.77 94.1 92.7 89 93.56 87.22L99 84.41a41.73 41.73 0 01-16 15.42zm9.65-16.12l-6.18-7.19 2.89-17c3-2.74 6.71-6.07 8.42-7.59l6.46 3.6a41.75 41.75 0 01-2.52 23.51zM91.34 34.2l.88-1.26a41.86 41.86 0 0110.89 17.93l-4-2.26c-1.28-3.9-5.97-11.55-7.77-14.41z"></path>
        </svg>
      ),
    },
    {
      id: 'efl-cup',
      name: 'EFL Cup',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zM21.29 58.78l6.36 2.58L35.41 76l-2.73 11h-4.06a42.19 42.19 0 01-7.33-28.22zm7.11-.93l-6.59-2.67A42 42 0 0135 31.83l6.53.84-1.6 11.81zm29.63-3l15.32-5.47a72.75 72.75 0 0112.47 9.88L83 76.1c-2.88 2.18-10.89 5.33-14.84 6.76L55.32 72.49zm-14.5-10.58l1.59-12.19c4.62-3.5 13.24-5.25 15.55-5.67l11.93 6.66-.73 13-15.26 5.5zm31.32-14l-12.17-6.79-.18-2.41h.56a42 42 0 0126.5 9.5l-1 1.46a42.77 42.77 0 00-13.71-1.76zM38.73 77.35l14.19-2.26L65.8 85.55 63.21 97.1l-13 2A70.61 70.61 0 0136 88.35zm12.61 25.11l13.2-2A41.11 41.11 0 0076.28 102h2.07a42 42 0 01-27.16 1.25zM83 99.83C89.77 94.1 92.7 89 93.56 87.22L99 84.41a41.73 41.73 0 01-16 15.42zm9.65-16.12l-6.18-7.19 2.89-17c3-2.74 6.71-6.07 8.42-7.59l6.46 3.6a41.75 41.75 0 01-2.52 23.51zM91.34 34.2l.88-1.26a41.86 41.86 0 0110.89 17.93l-4-2.26c-1.28-3.9-5.97-11.55-7.77-14.41z"></path>
        </svg>
      ),
    },
    {
      id: 'championship',
      name: 'Championship',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zM21.29 58.78l6.36 2.58L35.41 76l-2.73 11h-4.06a42.19 42.19 0 01-7.33-28.22zm7.11-.93l-6.59-2.67A42 42 0 0135 31.83l6.53.84-1.6 11.81zm29.63-3l15.32-5.47a72.75 72.75 0 0112.47 9.88L83 76.1c-2.88 2.18-10.89 5.33-14.84 6.76L55.32 72.49zm-14.5-10.58l1.59-12.19c4.62-3.5 13.24-5.25 15.55-5.67l11.93 6.66-.73 13-15.26 5.5zm31.32-14l-12.17-6.79-.18-2.41h.56a42 42 0 0126.5 9.5l-1 1.46a42.77 42.77 0 00-13.71-1.76zM38.73 77.35l14.19-2.26L65.8 85.55 63.21 97.1l-13 2A70.61 70.61 0 0136 88.35zm12.61 25.11l13.2-2A41.11 41.11 0 0076.28 102h2.07a42 42 0 01-27.16 1.25zM83 99.83C89.77 94.1 92.7 89 93.56 87.22L99 84.41a41.73 41.73 0 01-16 15.42zm9.65-16.12l-6.18-7.19 2.89-17c3-2.74 6.71-6.07 8.42-7.59l6.46 3.6a41.75 41.75 0 01-2.52 23.51zM91.34 34.2l.88-1.26a41.86 41.86 0 0110.89 17.93l-4-2.26c-1.28-3.9-5.97-11.55-7.77-14.41z"></path>
        </svg>
      ),
    },
    {
      id: 'premiership',
      name: 'Premiership',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/78.webp',
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zM21.29 58.78l6.36 2.58L35.41 76l-2.73 11h-4.06a42.19 42.19 0 01-7.33-28.22zm7.11-.93l-6.59-2.67A42 42 0 0135 31.83l6.53.84-1.6 11.81zm29.63-3l15.32-5.47a72.75 72.75 0 0112.47 9.88L83 76.1c-2.88 2.18-10.89 5.33-14.84 6.76L55.32 72.49zm-14.5-10.58l1.59-12.19c4.62-3.5 13.24-5.25 15.55-5.67l11.93 6.66-.73 13-15.26 5.5zm31.32-14l-12.17-6.79-.18-2.41h.56a42 42 0 0126.5 9.5l-1 1.46a42.77 42.77 0 00-13.71-1.76zM38.73 77.35l14.19-2.26L65.8 85.55 63.21 97.1l-13 2A70.61 70.61 0 0136 88.35zm12.61 25.11l13.2-2A41.11 41.11 0 0076.28 102h2.07a42 42 0 01-27.16 1.25zM83 99.83C89.77 94.1 92.7 89 93.56 87.22L99 84.41a41.73 41.73 0 01-16 15.42zm9.65-16.12l-6.18-7.19 2.89-17c3-2.74 6.71-6.07 8.42-7.59l6.46 3.6a41.75 41.75 0 01-2.52 23.51zM91.34 34.2l.88-1.26a41.86 41.86 0 0110.89 17.93l-4-2.26c-1.28-3.9-5.97-11.55-7.77-14.41z"></path>
        </svg>
      ),
    },
    {
      id: 'laliga',
      name: 'LaLiga',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/65.webp',
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zM21.29 58.78l6.36 2.58L35.41 76l-2.73 11h-4.06a42.19 42.19 0 01-7.33-28.22zm7.11-.93l-6.59-2.67A42 42 0 0135 31.83l6.53.84-1.6 11.81zm29.63-3l15.32-5.47a72.75 72.75 0 0112.47 9.88L83 76.1c-2.88 2.18-10.89 5.33-14.84 6.76L55.32 72.49zm-14.5-10.58l1.59-12.19c4.62-3.5 13.24-5.25 15.55-5.67l11.93 6.66-.73 13-15.26 5.5zm31.32-14l-12.17-6.79-.18-2.41h.56a42 42 0 0126.5 9.5l-1 1.46a42.77 42.77 0 00-13.71-1.76zM38.73 77.35l14.19-2.26L65.8 85.55 63.21 97.1l-13 2A70.61 70.61 0 0136 88.35zm12.61 25.11l13.2-2A41.11 41.11 0 0076.28 102h2.07a42 42 0 01-27.16 1.25zM83 99.83C89.77 94.1 92.7 89 93.56 87.22L99 84.41a41.73 41.73 0 01-16 15.42zm9.65-16.12l-6.18-7.19 2.89-17c3-2.74 6.71-6.07 8.42-7.59l6.46 3.6a41.75 41.75 0 01-2.52 23.51zM91.34 34.2l.88-1.26a41.86 41.86 0 0110.89 17.93l-4-2.26c-1.28-3.9-5.97-11.55-7.77-14.41z"></path>
        </svg>
      ),
    },
    {
      id: 'serie-a',
      name: 'Serie A',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/111.webp',
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zM21.29 58.78l6.36 2.58L35.41 76l-2.73 11h-4.06a42.19 42.19 0 01-7.33-28.22zm7.11-.93l-6.59-2.67A42 42 0 0135 31.83l6.53.84-1.6 11.81zm29.63-3l15.32-5.47a72.75 72.75 0 0112.47 9.88L83 76.1c-2.88 2.18-10.89 5.33-14.84 6.76L55.32 72.49zm-14.5-10.58l1.59-12.19c4.62-3.5 13.24-5.25 15.55-5.67l11.93 6.66-.73 13-15.26 5.5zm31.32-14l-12.17-6.79-.18-2.41h.56a42 42 0 0126.5 9.5l-1 1.46a42.77 42.77 0 00-13.71-1.76zM38.73 77.35l14.19-2.26L65.8 85.55 63.21 97.1l-13 2A70.61 70.61 0 0136 88.35zm12.61 25.11l13.2-2A41.11 41.11 0 0076.28 102h2.07a42 42 0 01-27.16 1.25zM83 99.83C89.77 94.1 92.7 89 93.56 87.22L99 84.41a41.73 41.73 0 01-16 15.42zm9.65-16.12l-6.18-7.19 2.89-17c3-2.74 6.71-6.07 8.42-7.59l6.46 3.6a41.75 41.75 0 01-2.52 23.51zM91.34 34.2l.88-1.26a41.86 41.86 0 0110.89 17.93l-4-2.26c-1.28-3.9-5.97-11.55-7.77-14.41z"></path>
        </svg>
      ),
    },
    {
      id: 'bundesliga',
      name: 'Bundesliga',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/54.webp',
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zM21.29 58.78l6.36 2.58L35.41 76l-2.73 11h-4.06a42.19 42.19 0 01-7.33-28.22zm7.11-.93l-6.59-2.67A42 42 0 0135 31.83l6.53.84-1.6 11.81zm29.63-3l15.32-5.47a72.75 72.75 0 0112.47 9.88L83 76.1c-2.88 2.18-10.89 5.33-14.84 6.76L55.32 72.49zm-14.5-10.58l1.59-12.19c4.62-3.5 13.24-5.25 15.55-5.67l11.93 6.66-.73 13-15.26 5.5zm31.32-14l-12.17-6.79-.18-2.41h.56a42 42 0 0126.5 9.5l-1 1.46a42.77 42.77 0 00-13.71-1.76zM38.73 77.35l14.19-2.26L65.8 85.55 63.21 97.1l-13 2A70.61 70.61 0 0136 88.35zm12.61 25.11l13.2-2A41.11 41.11 0 0076.28 102h2.07a42 42 0 01-27.16 1.25zM83 99.83C89.77 94.1 92.7 89 93.56 87.22L99 84.41a41.73 41.73 0 01-16 15.42zm9.65-16.12l-6.18-7.19 2.89-17c3-2.74 6.71-6.07 8.42-7.59l6.46 3.6a41.75 41.75 0 01-2.52 23.51zM91.34 34.2l.88-1.26a41.86 41.86 0 0110.89 17.93l-4-2.26c-1.28-3.9-5.97-11.55-7.77-14.41z"></path>
        </svg>
      ),
    },
    {
      id: 'ligue-1',
      name: 'Ligue 1',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/73.webp',
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zM21.29 58.78l6.36 2.58L35.41 76l-2.73 11h-4.06a42.19 42.19 0 01-7.33-28.22zm7.11-.93l-6.59-2.67A42 42 0 0135 31.83l6.53.84-1.6 11.81zm29.63-3l15.32-5.47a72.75 72.75 0 0112.47 9.88L83 76.1c-2.88 2.18-10.89 5.33-14.84 6.76L55.32 72.49zm-14.5-10.58l1.59-12.19c4.62-3.5 13.24-5.25 15.55-5.67l11.93 6.66-.73 13-15.26 5.5zm31.32-14l-12.17-6.79-.18-2.41h.56a42 42 0 0126.5 9.5l-1 1.46a42.77 42.77 0 00-13.71-1.76zM38.73 77.35l14.19-2.26L65.8 85.55 63.21 97.1l-13 2A70.61 70.61 0 0136 88.35zm12.61 25.11l13.2-2A41.11 41.11 0 0076.28 102h2.07a42 42 0 01-27.16 1.25zM83 99.83C89.77 94.1 92.7 89 93.56 87.22L99 84.41a41.73 41.73 0 01-16 15.42zm9.65-16.12l-6.18-7.19 2.89-17c3-2.74 6.71-6.07 8.42-7.59l6.46 3.6a41.75 41.75 0 01-2.52 23.51zM91.34 34.2l.88-1.26a41.86 41.86 0 0110.89 17.93l-4-2.26c-1.28-3.9-5.97-11.55-7.77-14.41z"></path>
        </svg>
      ),
    },
    {
      id: 'mlb',
      name: 'MLB',
      isLive: true,
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/229.webp',
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zm.17 36a41.92 41.92 0 01-11.16 21.64c-.32-.4-.65-.79-1-1.2l-.54-.72 2.63-2.55a1.58 1.58 0 000-2.23 1.56 1.56 0 00-1.13-.48 1.58 1.58 0 00-1.1.45l-2.22 2.15-.65-1.13a46.24 46.24 0 01-2.51-5l-.4-.94L90.09 79a1.58 1.58 0 00-.63-3 1.5 1.5 0 00-.62.13l-3.64 1.52-.33-1.09a47.56 47.56 0 01-1.23-5.12L83.39 70l3.52-.34A1.58 1.58 0 0088.32 68a1.56 1.56 0 00-1.56-1.42h-.16l-3.6.31v-1.06a47.33 47.33 0 010-5.33v-1.06l3.59.35h.17a1.58 1.58 0 00.16-3.15l-3.58-.35.18-1.08a47 47 0 011.27-5.49l.32-1.1 3.73 1.61a1.77 1.77 0 00.63.13 1.58 1.58 0 001.45-1 1.57 1.57 0 00-.82-2.07l-3.91-1.69.39-.93a47.29 47.29 0 012.51-5l.66-1.13 2.33 2.27a1.61 1.61 0 001.1.44 1.56 1.56 0 001.13-.48 1.58 1.58 0 000-2.23l-2.75-2.67.53-.72c.35-.47.72-.93 1.09-1.39a42 42 0 0111.12 36.8zM63 105a42.31 42.31 0 01-7.6-.7A41.53 41.53 0 0135 94.24c.21-.26.44-.52.64-.79l.7-.9L39 95.12a1.54 1.54 0 001.1.45 1.56 1.56 0 001.13-.48 1.58 1.58 0 000-2.23l-3-3 .43-.7a49.66 49.66 0 003.32-6.39l.4-.94 3 1.29a1.5 1.5 0 00.62.13 1.58 1.58 0 001.47-2.16 1.63 1.63 0 00-.84-.87l-3.15-1.35.27-.88a49.26 49.26 0 001.49-6 4.71 4.71 0 00.09-.52l.19-1.14 3.85.38h.16a1.57 1.57 0 00.15-3.14l-3.79-.38.06-1a47.9 47.9 0 000-6.11l-.06-1 3.76-.37a1.56 1.56 0 001.07-.57A1.62 1.62 0 0051 57a1.57 1.57 0 00-1.57-1.42h-.16l-3.8.42-.16-1a48.69 48.69 0 00-1.59-6.79l-.26-.87 3-1.32a1.61 1.61 0 0084-.86A1.59 1.59 0 0045.88 43a1.68 1.68 0 00-.62.13l-2.88 1.27-.38-.94A49.89 49.89 0 0038.65 37l-.42-.69 2.93-2.84a1.58 1.58 0 00-1.1-2.72 1.54 1.54 0 00-1.1.45l-2.52 2.45-.7-.92c-.25-.33-.53-.66-.79-1A41.78 41.78 0 0163 21a42.33 42.33 0 017.61.7 41.72 41.72 0 0120.3 9.87c-.32.38-.65.77-1 1.16l-.69.92-2.52-2.45a1.58 1.58 0 00-1.1-.45 1.56 1.56 0 00-1.13.48 1.58 1.58 0 000 2.24l2.93 2.84-.4.69a50.54 50.54 0 00-3.32 6.46l-.4.94-2.88-1.24a1.69 1.69 0 00-.63-.13 1.58 1.58 0 00-1.45 1 1.56 1.56 0 000 1.2 1.53 1.53 0 00.84.87l3 1.32-.27.87A49.46 49.46 0 0080.34 55l-.15 1-3.79-.37h-.16A1.58 1.58 0 0075 58.19a1.54 1.54 0 001.06.57l3.76.37-.06 1a51.88 51.88 0 000 6.11l.06 1-3.78.38a1.56 1.56 0 00-1.07.57 1.54 1.54 0 00-.35 1.15 1.57 1.57 0 001.57 1.42h.15l3.85-.38s.25 1.51.28 1.67A51 51 0 0082 78l.28.88-3.15 1.35a1.56 1.56 0 00-.84.87 1.57 1.57 0 001.46 2.16 1.51 1.51 0 00.63-.13l3-1.29.41.94a48.39 48.39 0 003.32 6.39l.43.7-3 3a1.58 1.58 0 000 2.23 1.6 1.6 0 001.14.48 1.58 1.58 0 001.1-.45l2.65-2.57.7.9c.26.33.53.66.8 1A41.84 41.84 0 0163.05 105zM21.7 55.44A41.79 41.79 0 0132.67 34c.31.4.63.79.94 1.2l.53.72-2.76 2.67a1.58 1.58 0 002.2 2.27l2.34-2.27.65 1.13a46.38 46.38 0 012.51 5l.39.93-3.9 1.69a1.58 1.58 0 00.62 3 1.68 1.68 0 00.62-.13l3.74-1.61.32 1.1a45.59 45.59 0 011.27 5.49l.18 1.08-3.57.35a1.58 1.58 0 00.15 3.15h.16l3.6-.35.06 1.06a47.35 47.35 0 010 5.33l-.07 1.06-3.57-.36h-.18A1.57 1.57 0 0037.33 68a1.62 1.62 0 00.35 1.16 1.64 1.64 0 001.07.57l3.53.34-.28 1.36a49.68 49.68 0 01-1.24 5.13l-.33 1.09-3.64-1.56a1.5 1.5 0 00-.62-.13 1.57 1.57 0 00-1.45 1 1.59 1.59 0 00.85 2.04l3.79 1.63-.4.94a47.09 47.09 0 01-2.5 5l-.66 1.13-2.22-2.15a1.54 1.54 0 00-1.1-.45 1.56 1.56 0 00-1.13.48 1.58 1.58 0 000 2.23L34 90.32l-.54.72c-.25.33-.52.66-.79 1a43.32 43.32 0 01-4.22-5.18 41.69 41.69 0 01-6.75-31.42z"></path>
        </svg>
      ),
    },
  ];

  // 3. Top Sports list with counters and icons matching exact SVG viewBoxes from inspect snippet
  const topSports = [
    {
      id: 'price-boost',
      name: 'Price boost',
      counter: 6,
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current text-yellow-400" viewBox="8 8 110 110">
          <path d="M59.13 99.73v-8.6a33 33 0 01-7.87-2 24 24 0 01-7.44-4.52l6.36-10a29.53 29.53 0 006.33 3.7 14.73 14.73 0 005.54 1.12c2.18 0 3.73-.39 4.65-1.16a4.52 4.52 0 001.37-3.66 3.88 3.88 0 00-1.63-3 24.67 24.67 0 00-4.13-2.63q-2.49-1.29-5.33-2.7a30.66 30.66 0 01-5.33-3.4 17.58 17.58 0 01-4.13-4.65 12.07 12.07 0 01-1.64-6.45 16.65 16.65 0 013.49-10.84 16.69 16.69 0 019.76-5.67v-9h9.63V35A20.26 20.26 0 0176 37.63a26.88 26.88 0 015.72 4.64l-7.28 8.43A20.32 20.32 0 0070 47.6a10.26 10.26 0 00-4.52-1 7.29 7.29 0 00-4.12 1c-.91.55-1.36 1.72-1.36 3.4a3.47 3.47 0 001.63 2.84 25.66 25.66 0 004.13 2.41l5.34 2.58a29.12 29.12 0 015.33 3.36A17.18 17.18 0 0180.55 67a12.72 12.72 0 011.63 6.62 17.93 17.93 0 01-3.31 10.84Q75.55 89 68.76 90.61v9.12zm44-35.82a40.22 40.22 0 01-4.74 18l13.06 7A55 55 0 00118 64.24zm8-27.31l-13 7.11a40.13 40.13 0 014.93 18l14.8-.48a54.84 54.84 0 00-6.65-24.63zM91.56 16l-7.69 12.66a40.15 40.15 0 0113.24 13.13L109.68 34a54.91 54.91 0 00-18.12-18zM64.24 8l-.33 14.8a40.22 40.22 0 0118 4.74l7-13.06A55 55 0 0064.24 8zM43.71 27.77a40.13 40.13 0 0118-4.93L61.21 8a54.84 54.84 0 00-24.61 6.79zM16 34.44l12.65 7.69a40.15 40.15 0 0113.14-13.24L34 16.32a54.91 54.91 0 00-18 18.12zm6.82 27.65a40.22 40.22 0 014.74-18l-13.06-7A55 55 0 008 61.76zm-8 27.31l13-7.11a40.13 40.13 0 01-4.93-18L8 64.79a54.84 54.84 0 006.79 24.61z"></path></svg>
      ),
    },
    {
      id: 'football',
      name: 'Football',
      counter: 1349,
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zM21.29 58.78l6.36 2.58L35.41 76l-2.73 11h-4.06a42.19 42.19 0 01-7.33-28.22zm7.11-.93l-6.59-2.67A42 42 0 0135 31.83l6.53.84-1.6 11.81zm29.63-3l15.32-5.47a72.75 72.75 0 0112.47 9.88L83 76.1c-2.88 2.18-10.89 5.33-14.84 6.76L55.32 72.49zm-14.5-10.58l1.59-12.19c4.62-3.5 13.24-5.25 15.55-5.67l11.93 6.66-.73 13-15.26 5.5zm31.32-14l-12.17-6.79-.18-2.41h.56a42 42 0 0126.5 9.5l-1 1.46a42.77 42.77 0 00-13.71-1.76zM38.73 77.35l14.19-2.26L65.8 85.55 63.21 97.1l-13 2A70.61 70.61 0 0136 88.35zm12.61 25.11l13.2-2A41.11 41.11 0 0076.28 102h2.07a42 42 0 01-27.16 1.25zM83 99.83C89.77 94.1 92.7 89 93.56 87.22L99 84.41a41.73 41.73 0 01-16 15.42zm9.65-16.12l-6.18-7.19 2.89-17c3-2.74 6.71-6.07 8.42-7.59l6.46 3.6a41.75 41.75 0 01-2.52 23.51zM91.34 34.2l.88-1.26a41.86 41.86 0 0110.89 17.93l-4-2.26c-1.28-3.9-5.97-11.55-7.77-14.41z"></path>
        </svg>
      ),
    },
    {
      id: 'horse-racing',
      name: 'Horse Racing',
      counter: 440,
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="15.6 13 100.05 100.05">
          <path d="M107.1 75.2C95.2 81.7 94 70 94 70c-9.9-1.1-17.2-12.2-17.2-12.2-13.3 6.9-5.9 26.3-.2 33.8 12 4.1 9.8 13.4 9.2 18.6-9.2 5.5-38.2 4.3-53.6-15-10.1-11-7.2-27.3-4.4-37.5 4-10.9 9.3-16.8 17.1-23.2 11.6-9.4 33-10.6 33-10.6.1-.8.8-1.7 1.6-2.7-2.6.1-5.7.3-9.3.8-2.4.5-5.1.7-7.9 1.5-2.8.6-5.6 1.6-8.5 2.7-2.9 1.1-5.8 2.6-8.6 4.2-2.7 1.9-5.5 3.6-7.8 6-2.6 2.1-4.5 4.8-6.4 7.5-2 2.6-3 5.7-4.5 8.4-1.1 2.9-1.7 5.8-2.6 8.6-.8 2.7-.7 5.5-1.1 7.9-.3 2.5-.6 4.7-.4 6.8.1 2 .1 3.8.2 5.2.1 2.9.1 4.6.1 4.6h-.4s-.3-1.6-.8-4.6c-.2-1.5-.5-3.3-.8-5.3-.4-2.1-.5-4.4-.3-7 .1-1.9.2-3.9.3-5.9l-4.8-.1 4.9-6.1-5.2-.7L23 50l-5.4-1.7 7.7-4.2-5.8-1.7 10-3.2-6.9-2L34 34l-6.2-2.8 11.4-1.5-5.6-3.2L47.5 25c.1 0 .1-.1.2-.1L41.3 22l14.6-1.2-6.7-3.5 27.6 2.2c1.5.1 2.8.2 4 .3 3.5-3.4 9.1-6.8 9.1-6.8-1.1 1.1-1.6 7.4-1.6 7.4 1.1-2.1 4.8-4.1 4.8-4.1-2.1 4.8 0 15.2 0 15.2 6 6 12.6 26.6 12.6 26.6l2.5 3.7c3.3 4.5 2.1 11.7-1.1 13.4z"></path>
        </svg>
      ),
    },
    {
      id: 'greyhounds',
      name: 'Greyhounds',
      counter: 253,
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current text-orange-500" viewBox="3 14.91 120.1 120.1">
          <path d="M91 101.7s1.1-7.8 1.2-11.7c.1-3.9.6-12.4 2.1-18.4l3.3-6.2c-.9 4-4 17.9-4.1 21.8-.1 3.9-1.2 12.3-1.2 12.3-.4 2.5 1.7 4.3 1.7 4.3 2.2-.1 3.4 2.3 3.4 2.3.7 1.2-.5 1.4-2.1 1.4-.5-.5-2.4-2-3.3-1.9 0 0-1.4-1.4-1-3.9zM30.3 84.5s3.2-1.6 5-5.3c0 0 4.9-8.7 6.1-10.6.5-.7.7-1 2.9-1.9l1.2.1s-.9 9.2-8.7 15.9c-7.8 6.7-11.2 11.8-11.2 20.2 0 0 5.3.6 4.9 4.1 0 0-7.4 1.6-7.5-1 0 0-2.4 5.7-1-13.8 2.3-2.9 4-5.3 8.3-7.7z"></path>
          <path d="M12.9 89c8.3-7 10.6-16.5 9.7-23.5-.9-7 2.5-12.8 2.5-12.8 0-.1.1-.2.1-.2.3-.9-.5-1.2-1.1-1.3-5.4-.9-11.9-1.1-15.6 8.7-2.1 5.5 3 14.2 3.5 18 .6 5.1-5.8 8.4-9 9.6 0 0 8.9-4.6 7.8-9.6-.8-3.7-7-13-4.2-22.3 3.1-10.1 16-10.7 21.5-10.3.2 0 .5.1.9.1h.7c.8-.1 1.7-.3 2.8-.9 7.1-3.4 35.1-2 35.1-2 6.7-1.7 11.9-4.9 11.9-4.9 3.5-2.1 4.3-4.1 4.3-4.1 4.8-8.6 7-11.5 9.1-13.7.1-5.8 8.2-5.3 11-4.2 1.6.6 5.2 2.8 5.2 2.8 2.9 2.3 2.1 3.7 2.1 3.7s7.7 2 10.4 4c.2.2.4.4.6.5l.1.1.1.1.1.1.1.1.1.1s0 .1.1.1c0 0 0 .1.1.1v.1c0 .1.1.1.1.2s0 .2.1.3v.7c0 .1 0 .1-.1.2v.2c0 .1-.1.2-.1.2v.1c0 .1-.1.2-.1.3v.1c-.1.1-.1.2-.2.3-.7 1.1-1.6 1.3-1.6 1.3-1.2 1.7-8 2.4-14.6 2.2-5-.2-8.1 17.1-8.1 17.1s.9.8.8 6.2c-.1 5.4-5.8 14-5.8 14-3.1 7.6-3 16.4-3.1 20.3-.1 3.9-1.2 12.3-1.2 12.3-.4 2.5 1.7 4.3 1.7 4.3 2.2-.1 3.4 2.3 3.4 2.3 1 1.7-4.7 1.6-4.7 1.6s-4.4.1-4.4-2.6-.5-6.8-.5-6.8c-2.1-.3-.9-4.5-.9-4.5.1-3.5-1.4-21.5-1.4-21.5-.5-1 0-2.7 0-2.7-8.8-.1-23-5.5-23-5.5-17.5-5.6-19.1-2.2-19.1-2.2-.7 1.3-6.3 11.4-6.3 11.4-2.1 3.8-2.5 3.8-2.5 3.8-14.2 8-16.5 21.7-16.5 21.7-1.2 3.9.9 3.7.9 3.7 2.6.4 2.5 3.2 2.5 3.2h-4.7s-5.9-.1-3.7-5.3c2.1-5.1 3.1-15.3 3.1-15.3z"></path>
        </svg>
      ),
    },
    {
      id: 'tennis',
      name: 'Tennis',
      counter: 310,
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zm.17 36A42 42 0 0163.05 105a42.31 42.31 0 01-7.6-.7 41.52 41.52 0 01-9.78-3 16.31 16.31 0 01-4.23-9.6c-.58-7 4.17-11.84 6.25-13.62 5.66-4.72 14.89-4.72 23.82-4.72 9.69 0 18.84 0 25.47-5.47a34.78 34.78 0 006.44-7.24l1.36-2a42.06 42.06 0 01-.48 11.91zM63 21a42.33 42.33 0 017.61.7 41.7 41.7 0 0127 17.44 42.15 42.15 0 015.27 10.52c-.36 5.48-3.36 10.74-8.71 15.27-4.82 4.34-13.26 4.34-22.18 4.34-9.69 0-19.72 0-26.8 5.51-4.2 3.36-8.54 9.6-8.17 17.13a8.63 8.63 0 00.32 2.76l.68 2a42.18 42.18 0 01-9.5-9.85 41.69 41.69 0 01-6.82-31.38c.22-1.22.49-2.42.82-3.6a34.77 34.77 0 007.74 1.06c16.16 0 23.79-14.77 30.51-27.79.2-.4.4-.83.61-1.28.42-.9.89-1.87 1.44-2.82zm-5.16.33a3.19 3.19 0 01-.42 1.53v.22l-.22.42C50 37.85 43.47 48.82 30.48 48.82a28.37 28.37 0 01-6.65-.82 41.94 41.94 0 0134-26.62z"></path>
        </svg>
      ),
    },
    {
      id: 'basketball',
      name: 'Basketball',
      counter: 186,
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="13.04 13.13 99.89 99.89">
          <path d="M109.65 81c0-.1.07-.21.11-.31s.11-.31.17-.46a49.8 49.8 0 003-15.4v-.77-1-.46-.94-1.15c0-.38-.05-.82-.08-1.23 0-.23 0-.45-.06-.68a49.52 49.52 0 00-.75-5.31v-.06c-.12-.59-.25-1.17-.39-1.75 0-.11 0-.21-.08-.31-.13-.56-.28-1.12-.43-1.67 0-.12-.07-.24-.11-.36-.16-.55-.33-1.11-.51-1.66s-.38-1.14-.59-1.7l-.25-.66c-.22-.57-.45-1.13-.69-1.69l-.09-.22a49.77 49.77 0 00-37.66-29.53h-.31c-1-.15-2-.27-3-.37l-.57-.06h-.65l-1.12-.07h-.56c-.7 0-1.36-.05-2-.05h-.69a49.69 49.69 0 00-21.76 5.3l-1.11.58h-.08l-.09.05a50 50 0 00-19.66 19.06l-.27.47a1.74 1.74 0 00-.1.19A52.33 52.33 0 0016.78 44l-.33.83c-.25.66-.49 1.31-.72 2-.09.24-.18.48-.26.73-.26.8-.49 1.61-.71 2.43-.11.4-.21.8-.31 1.2s-.23 1-.34 1.49-.18.85-.26 1.28a.43.43 0 000 .11c-.09.49-.16 1-.24 1.49-.11.72-.2 1.44-.28 2.17-.06.55-.12 1.1-.16 1.65 0 .39-.05.79-.07 1.19 0 .63-.05 1.27-.06 1.9V63.4a49.87 49.87 0 00.38 5.87v.29q.18 1.33.42 2.64c0 .17.06.34.1.51.16.84.35 1.68.56 2.52 0 .14.07.28.1.42.24.9.5 1.81.79 2.7.13.4.28.8.42 1.2s.29.85.46 1.27c.22.59.46 1.17.7 1.75.07.16.15.33.22.5.61 1.4 1.26 2.79 2 4.13.45.81.94 1.63 1.5 2.51l.15.24c.52.81 1.07 1.62 1.63 2.39.75 1 1.56 2 2.38 3l.14.17c.48.55 1 1.1 1.45 1.63l.4.42c.43.45.86.9 1.31 1.34l.82.77c.33.31.66.62 1 .92a47.79 47.79 0 004.11 3.26l.16.11c.66.47 1.33.92 2 1.35l.38.23c.61.38 1.22.75 1.85 1.1l.55.3c.57.31 1.14.61 1.73.9l.7.34c.53.26 1.07.5 1.6.73l.88.37c.48.2 1 .39 1.45.57l1.05.38 1.3.43L49 111l1.14.31c.46.12.92.25 1.39.36l1.17.25c.55.11 1.1.23 1.66.33.73.12 1.46.24 2.19.33l.59.07c.71.09 1.43.16 2.15.21h.4c.82 0 1.65.09 2.47.1h3.73l1.06-.07 1.24-.11h.47a50 50 0 0037.89-25.16l.31-.56c.18-.32.35-.65.52-1l.45-.88.39-.82c.06-.12.13-.25.18-.37l.1-.22.37-.84c0-.1.09-.19.13-.29.24-.64.45-1.13.65-1.64z"></path>
        </svg>
      ),
    },
    {
      id: 'darts',
      name: 'Darts',
      counter: 42,
      svg: (
        <svg className="S w-3.5 h-3.5 fill-current" viewBox="13 13 100 100">
          <circle cx="63" cy="63" r="40" fill="none" stroke="currentColor" strokeWidth="6"></circle>
          <circle cx="63" cy="63" r="24" fill="none" stroke="currentColor" strokeWidth="6"></circle>
          <circle cx="63" cy="63" r="8" fill="currentColor"></circle>
        </svg>
      ),
    },
  ];

  // 4. Complete A-Z SPORTS list matching user reference screenshot
  const azSportsList = [
    { id: 'cricket', name: 'Cricket', icon: '🏏' },
    { id: 'golf', name: 'Golf', icon: '⛳' },
    { id: 'american-football', name: 'Am. Football', icon: '🏈' },
    { id: 'aussie-rules', name: 'Aussie Rules', icon: '🏉' },
    { id: 'badminton', name: 'Badminton', icon: '🏸' },
    { id: 'baseball', name: 'Baseball', icon: '⚾' },
    { id: 'biathlon', name: 'Biathlon', icon: '⛷️' },
    { id: 'boxing', name: 'Boxing', icon: '🥊' },
    { id: 'chess', name: 'Chess', icon: '♟️' },
    { id: 'cycling', name: 'Cycling', icon: '🚴' },
    { id: 'esports', name: 'eSports', icon: '🎮' },
    { id: 'field-hockey', name: 'Field Hockey', icon: '🏑' },
    { id: 'floorball', name: 'Floorball', icon: '🏑' },
    { id: 'formula-1', name: 'Formula 1', icon: '🏎️' },
    { id: 'futsal', name: 'Futsal', icon: '⚽' },
    { id: 'gaelic-football', name: 'Gaelic Football', icon: '⚽' },
    { id: 'handball', name: 'Handball', icon: '🤾' },
    { id: 'hurling', name: 'Hurling', icon: '🏑' },
    { id: 'ice-hockey', name: 'Ice Hockey', icon: '🏒' },
    { id: 'mma', name: 'MMA', icon: '🥋' },
    { id: 'motor-racing', name: 'Motor Racing', icon: '🏍️' },
    { id: 'padel', name: 'Padel', icon: '🎾' },
    { id: 'politics', name: 'Politics', icon: '🗳️' },
    { id: 'rugby-league', name: 'Rugby League', icon: '🏉' },
    { id: 'rugby-union', name: 'Rugby Union', icon: '🏉' },
    { id: 'sailing', name: 'Sailing', icon: '⛵' },
    { id: 'snooker', name: 'Snooker', icon: '🎱' },
    { id: 'specials', name: 'Specials', icon: '⭐' },
    { id: 'speedway', name: 'Speedway', icon: '🏍️' },
    { id: 'table-tennis', name: 'Table Tennis', icon: '🏓' },
    { id: 'volleyball', name: 'Volleyball', icon: '🏐' },
    { id: 'water-polo', name: 'Water Polo', icon: '🤽' },
  ];

  // 5. Help & Support items matching user reference screenshot
  const helpSupportLinks = [
    { label: 'Betting Rules', topic: 'betting-rules' as HelpTopic, icon: '📜' },
    { label: 'Cashout', topic: 'cashout' as HelpTopic, icon: '💰' },
    { label: 'Bet Builder Rules', topic: 'bet-builder' as HelpTopic, icon: '🛠️' },
    { label: 'Help & Live Support', topic: 'general' as HelpTopic, icon: '💬' },
  ];

  return (
    <aside
      className="Sidebar Sidebar--Left w-[280px] shrink-0 bg-[#F9F8F8] border-r border-[#e8e8e8] h-full overflow-y-auto scrollbar-thin p-2.5 hidden xl:block text-slate-800 text-xs select-none font-['Nunito_Sans',sans-serif]"
      style={
        {
          '--c-base-08': '#06120b',
          '--c-hover-black': '#121d29',
          '--black': '#000',
          '--white': '#fff',
          '--c-base-01': '#fefefe',
          '--c-base-02': '#f1f1f1',
          '--c-base-03': '#f2f2f2',
          '--c-base-04': '#e8e8e8',
          '--c-base-05': '#d9d9d9',
          '--c-base-06': '#d5d5d5',
          '--c-base-07': '#aaa',
          '--c-extra-01': '#35af26',
          '--c-extra-02': '#389a2b',
          '--c-extra-03': '#fff769',
          '--c-extra-04': '#fbe542',
          '--c-extra-05': '#ff000d',
          '--c-extra-06': '#cc2121',
          '--c-extra-07': '#1b1397',
          '--c-extra-08': '#1a1297',
          '--c-extra-09': '#191196',
        } as React.CSSProperties
      }
    >
      {/* SimpleSearchTrigger matching exact DOM snippet */}
      <div className="SimpleSearchTrigger relative mb-3">
        <div className="relative flex items-center bg-white border border-[#d5d5d5] rounded-md shadow-2xs">
          <span className="SimpleSearchTrigger__IconWrapper pl-2.5 pr-1.5 py-1.5 flex items-center text-slate-400">
            <span className="OM-Icon OM-Icon--Svg OM-Icon--general OM-Icon--search">
              <svg className="S w-3.5 h-3.5 fill-[#1a1297]" viewBox="0 0 120 120">
                <path d="m80.645 72.421h-4.3248l-1.5339-1.4807a35.696 35.696 0 1 0-3.8455 3.8455l1.4807 1.5339v4.3248l27.408 27.355 8.1703-8.1703zm-32.884 0a24.671 24.671 0 1 1 24.66-24.66 24.628 24.628 0 0 1-24.66 24.66z"></path>
              </svg>
            </span>
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search"
            className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none py-1.5 pr-2 font-semibold"
          />
        </div>
      </div>

      {/* Widget SiteLinksWidget matching exact DOM snippet */}
      <div className="Widget SiteLinksWidget mb-3.5">
        <h3 className="Widget__Header flex items-center space-x-1.5 font-black text-[#1a1297] uppercase tracking-wider mb-1.5 text-[11px]">
          <span className="Widget__IconWrapper">
            <span className="OM-Icon OM-Icon--Svg OM-Icon--general OM-Icon--link">
              <svg className="S w-3.5 h-3.5 fill-[#1a1297]" viewBox="0 0 120 120">
                <path d="m63.744 84.48v-10.848h19.776c7.488 0 13.632-6.144 13.632-13.632s-6.144-13.632-13.632-13.632h-19.776v-10.848h19.776c13.536 0 24.48 10.944 24.48 24.48s-10.944 24.48-24.48 24.48zm-27.264 0c-13.536 0-24.48-10.944-24.48-24.48s10.944-24.48 24.48-24.48h19.776v10.848h-19.776c-7.488 0-13.632 6.144-13.632 13.632s6.144 13.632 13.632 13.632h19.776v10.848zm3.744-18.816v-11.328h39.552v11.328z"></path>
              </svg>
            </span>
          </span>
          <span className="Widget__Title">Site Links</span>
        </h3>
        <div className="Widget__Content">
          <ul className="Menu SiteLinksMenu space-y-0.5">
            {siteLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label} className="MenuItem">
                  <Link
                    href={link.href}
                    prefetch={true}
                    className={`Anchor MenuItem__Anchor flex items-center space-x-2 py-1.5 px-2 rounded-md transition-colors font-semibold text-xs ${
                      isActive
                        ? 'bg-[#E8EDFB] text-[#1a1297]'
                        : 'text-[#1a1297] hover:bg-[#1a1297]/10 hover:text-[#191196]'
                    }`}
                  >
                    <span className="MenuItem__IconWrapper shrink-0 text-[#1a1297]">{link.svg}</span>
                    <span className="MenuItem__Name">
                      <span className="MenuItem__Text font-semibold text-[#1a1297]">{link.label}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* OM-Menu OM-PopularLinksMenu matching exact HTML snippet provided */}
      <div className="OM-Menu OM-PopularLinksMenu mb-4 border-t border-[#e8e8e8] pt-2.5">
        <div className="OM-MenuHeader mb-1.5">
          <span className="OM-MenuHeader__Title font-black text-[#1a1297] uppercase tracking-wider text-[11px]">
            Popular
          </span>
        </div>
        <div className="OM-Menu__Content OM-Menu__Content--HasIcon space-y-0.5">
          {popularLeagues.map((league) => {
            const isActive = selectedCategory === league.id;
            return (
              <div key={league.id} className="OM-MenuItem group" title={league.name}>
                <div className="OM-MenuItem__ActionGroup">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelectSportCategory(league.id);
                    }}
                    className={`OM-WidgetsLink OM-WidgetsLink--AnchorLink OM-MenuItem__Action flex items-center justify-between py-1 px-2 rounded-md transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[#1a1297] text-white font-extrabold shadow-sm'
                        : 'hover:bg-[#e5e5e5] text-[#1a1297] font-semibold'
                    }`}
                  >
                    <div className="flex items-center space-x-2 min-w-0">
                      {/* Indicator SVGs and Flag Icons */}
                      <span className="OM-MenuItem__ItemIndicator shrink-0 flex items-center space-x-1">
                        <span className="OM-Icon OM-Icon--Svg OM-Icon--discipline shrink-0 text-[#1a1297] group-hover:text-[#191196]">
                          {league.svg}
                        </span>
                        <span
                          className="OM-Icon OM-Icon--flag w-4 h-4 rounded-full bg-cover bg-center shrink-0 border border-slate-200 shadow-2xs"
                          style={{ backgroundImage: `url("${league.flag}")` }}
                        ></span>
                      </span>
                      <span className="OM-MenuItem__ItemContent truncate">
                        <span className={`OM-MenuItem__ItemText text-[12px] ${isActive ? 'text-white' : 'text-[#1a1297]'}`}>
                          {league.name}
                        </span>
                      </span>
                    </div>

                    {league.isLive && (
                      <span className="OM-MenuItem__ItemLabel bg-[#ff000d] text-white text-[9px] font-black uppercase px-1 rounded-xs shrink-0 ml-1 animate-pulse">
                        live
                      </span>
                    )}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* OM-Menu OM-EventNavigationMenu (TOP SPORTS) matching exact DOM snippet */}
      <div className="OM-Menu OM-Menu--Level0 OM-EventNavigationMenu OM-EventNavigationMenu--sports mb-4 border-t border-[#e8e8e8] pt-2.5">
        <div className="OM-MenuHeader mb-1.5">
          <span className="OM-MenuHeader__Title font-black text-[#1a1297] uppercase tracking-wider text-[11px]">
            Top Sports
          </span>
        </div>
        <div className="space-y-0.5">
          {topSports.map((sport) => {
            const isActive = selectedCategory === sport.id;
            return (
              <div key={sport.id} className="OM-MenuItem OM-MenuItem--sports OM-MenuItem--level0 OM-EventNavigationMenuItem">
                <div className="OM-MenuItem__ActionGroup">
                  <button
                    type="button"
                    onClick={() => handleSelectSportCategory(sport.id)}
                    onMouseEnter={() => handlePrefetch('/sport')}
                    onTouchStart={() => handlePrefetch('/sport')}
                    className={`w-full OM-WidgetsLink OM-WidgetsLink--AnchorLink OM-MenuItem__Action flex items-center justify-between py-1 px-2 rounded-md transition-colors text-left cursor-pointer active:scale-[0.98] ${
                      isActive
                        ? 'bg-[#1a1297] text-white font-extrabold shadow-sm'
                        : 'hover:bg-[#e5e5e5] text-[#1a1297] font-semibold'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <span className="OM-MenuItem__ItemIndicator">
                        <span className="OM-Icon OM-Icon--Svg OM-Icon--discipline OM-Icon--Medium1 OM-MenuItem__Icon text-[#1a1297]">
                          {sport.svg}
                        </span>
                      </span>
                      <div className="OM-MenuItem__ItemContent">
                        <div className="OM-MenuItem__ItemContentWrapper">
                          <span className={`OM-MenuItem__ItemText text-[12px] truncate ${isActive ? 'text-white font-bold' : 'text-[#1a1297]'}`}>
                            {sport.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {sport.counter !== null && sport.counter > 0 && (
                      <span className={`OM-MenuItem__ItemCounter text-[10px] font-bold px-1.5 py-0.2 rounded-full font-mono shrink-0 ${
                        isActive ? 'bg-white text-[#1a1297]' : 'bg-[#e8e8e8] text-slate-700'
                      }`}>
                        {sport.counter}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* A-Z SPORTS SECTION (Exact match to reference screenshot) */}
      <div className="OM-Menu OM-AZSportsMenu mb-4 border-t border-[#e8e8e8] pt-2.5">
        <div className="OM-MenuHeader mb-1.5">
          <span className="OM-MenuHeader__Title font-black text-[#1a1297] uppercase tracking-wider text-[11px]">
            A-Z SPORTS
          </span>
        </div>
        <div className="space-y-0.5">
          {azSportsList.map((sport) => {
            const isActive = selectedCategory === sport.id;
            return (
              <div key={sport.id} className="OM-MenuItem">
                <button
                  type="button"
                  onClick={() => handleSelectSportCategory(sport.id)}
                  className={`w-full flex items-center space-x-2.5 py-1 px-2 rounded-md transition-colors text-left cursor-pointer active:scale-[0.98] ${
                    isActive
                      ? 'bg-[#1a1297] text-white font-extrabold shadow-sm'
                      : 'hover:bg-[#e5e5e5] text-[#1a1297] font-semibold'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full border border-[#1a1297]/30 flex items-center justify-center text-[10px] shrink-0 bg-white/40">
                    {sport.icon}
                  </span>
                  <span className={`text-[12px] truncate ${isActive ? 'text-white font-bold' : 'text-[#1a1297]'}`}>
                    {sport.name}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* HELP & SUPPORT SECTION (Exact match to reference screenshot) */}
      <div className="OM-Menu OM-HelpSupportMenu border-t border-[#e8e8e8] pt-2.5 mb-2">
        <div className="OM-MenuHeader mb-1.5">
          <span className="OM-MenuHeader__Title font-black text-[#1a1297] uppercase tracking-wider text-[11px]">
            HELP & SUPPORT
          </span>
        </div>
        <div className="space-y-0.5">
          {helpSupportLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setActiveHelpTopic(link.topic)}
              className="w-full flex items-center space-x-2 py-1.5 px-2 text-[#1a1297] hover:bg-[#e5e5e5] rounded-md font-semibold text-[12px] transition-colors text-left"
            >
              <span className="text-sm shrink-0">{link.icon}</span>
              <span>{link.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Help Modal */}
      {activeHelpTopic && (
        <HelpSupportModal initialTopic={activeHelpTopic} onClose={() => setActiveHelpTopic(null)} />
      )}
    </aside>
  );
};
