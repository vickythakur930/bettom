'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSportsStore } from '@/store/useSportsStore';

export const LiveSportsBanner: React.FC = () => {
  const { selectedCategory, setSelectedCategory, activeSport, activeCountry, setActiveCountry } = useSportsStore();
  const [activeTime, setActiveTime] = useState('Today');

  const sportsContainerRef = useRef<HTMLDivElement>(null);
  const countryContainerRef = useRef<HTMLDivElement>(null);

  const targetCategory = selectedCategory || activeSport;

  // Auto-scroll sports slider to make selected sport tile visible on LeftSidebar click
  useEffect(() => {
    if (!targetCategory || !sportsContainerRef.current) return;
    const targetTile = sportsContainerRef.current.querySelector(`.DisciplineId--${targetCategory}`);
    if (targetTile) {
      targetTile.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [targetCategory]);

  const scrollSlider = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const sportsTiles = [
    {
      id: 'az',
      name: 'A-Z sports',
      counter: 0,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="0 0 126 126">
          <path d="M101.312 74.9l-3.656-1.073-.929-1.632a31.45 31.45 0 0 0-32.21-53.975 31.45 31.45 0 0 0 28.004 56.272l.871 1.664-1.073 3.656 16.384 29.927 8.934-4.88L101.312 74.9zm-27.8-8.16a21.74 21.74 0 0 1-10.56-6.913c-2.759-3.298-4.477-7.341-4.938-11.616s.356-8.591 2.348-12.401a21.74 21.74 0 0 1 8.843-9.006 21.73 21.73 0 0 1 12.357-2.573c4.283.384 8.356 2.028 11.703 4.727a21.74 21.74 0 0 1 7.104 10.433c1.284 4.104 1.322 8.496.109 12.621-.8 2.74-2.133 5.295-3.923 7.519a21.7 21.7 0 0 1-23.044 7.21zM6 16h26.5a7.5 7.5 0 0 1 7.5 7.5H6V16zm0 76h64.5a7.5 7.5 0 0 1 7.5 7.5H6V92zm0-38h26.5a7.5 7.5 0 0 1 7.5 7.5H6V54z"></path>
        </svg>
      ),
    },
    {
      id: 'price-boost',
      name: 'Price boost',
      counter: 6,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="8 8 110 110">
          <path d="M59.13 99.73v-8.6a33 33 0 01-7.87-2 24 24 0 01-7.44-4.52l6.36-10a29.53 29.53 0 006.33 3.7 14.73 14.73 0 005.54 1.12c2.18 0 3.73-.39 4.65-1.16a4.52 4.52 0 001.37-3.66 3.88 3.88 0 00-1.63-3 24.67 24.67 0 00-4.13-2.63q-2.49-1.29-5.33-2.7a30.66 30.66 0 01-5.33-3.4 17.58 17.58 0 01-4.13-4.65 12.07 12.07 0 01-1.64-6.45 16.65 16.65 0 013.49-10.84 16.69 16.69 0 019.76-5.67v-9h9.63V35A20.26 20.26 0 0176 37.63a26.88 26.88 0 015.72 4.64l-7.28 8.43A20.32 20.32 0 0070 47.6a10.26 10.26 0 00-4.52-1 7.29 7.29 0 00-4.12 1c-.91.55-1.36 1.72-1.36 3.4a3.47 3.47 0 001.63 2.84 25.66 25.66 0 004.13 2.41l5.34 2.58a29.12 29.12 0 015.33 3.36A17.18 17.18 0 0180.55 67a12.72 12.72 0 011.63 6.62 17.93 17.93 0 01-3.31 10.84Q75.55 89 68.76 90.61v9.12zm44-35.82a40.22 40.22 0 01-4.74 18l13.06 7A55 55 0 00118 64.24zm8-27.31l-13 7.11a40.13 40.13 0 014.93 18l14.8-.48a54.84 54.84 0 00-6.65-24.63zM91.56 16l-7.69 12.66a40.15 40.15 0 0113.24 13.13L109.68 34a54.91 54.91 0 00-18.12-18zM64.24 8l-.33 14.8a40.22 40.22 0 0118 4.74l7-13.06A55 55 0 0064.24 8zM43.71 27.77a40.13 40.13 0 0118-4.93L61.21 8a54.84 54.84 0 00-24.61 6.79zM16 34.44l12.65 7.69a40.15 40.15 0 0113.14-13.24L34 16.32a54.91 54.91 0 00-18 18.12zm6.82 27.65a40.22 40.22 0 014.74-18l-13.06-7A55 55 0 008 61.76zm-8 27.31l13-7.11a40.13 40.13 0 01-4.93-18L8 64.79a54.84 54.84 0 006.79 24.61z"></path>
        </svg>
      ),
    },
    {
      id: 'football',
      name: 'Football',
      counter: 1149,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zM21.29 58.78l6.36 2.58L35.41 76l-2.73 11h-4.06a42.19 42.19 0 01-7.33-28.22zm7.11-.93l-6.59-2.67A42 42 0 0135 31.83l6.53.84-1.6 11.81zm29.63-3l15.32-5.47a72.75 72.75 0 0112.47 9.88L83 76.1c-2.88 2.18-10.89 5.33-14.84 6.76L55.32 72.49zm-14.5-10.58l1.59-12.19c4.62-3.5 13.24-5.25 15.55-5.67l11.93 6.66-.73 13-15.26 5.5zm31.32-14l-12.17-6.79-.18-2.41h.56a42 42 0 0126.5 9.5l-1 1.46a42.77 42.77 0 00-13.71-1.76zM38.73 77.35l14.19-2.26L65.8 85.55 63.21 97.1l-13 2A70.61 70.61 0 0136 88.35zm12.61 25.11l13.2-2A41.11 41.11 0 0076.28 102h2.07a42 42 0 01-27.16 1.25zM83 99.83C89.77 94.1 92.7 89 93.56 87.22L99 84.41a41.73 41.73 0 01-16 15.42zm9.65-16.12l-6.18-7.19 2.89-17c3-2.74 6.71-6.07 8.42-7.59l6.46 3.6a41.75 41.75 0 01-2.52 23.51zM91.34 34.2l.88-1.26a41.86 41.86 0 0110.89 17.93l-4-2.26c-1.28-3.9-5.97-11.55-7.77-14.41z"></path>
        </svg>
      ),
    },
    {
      id: 'horse-racing',
      name: 'Horse Racing',
      counter: 466,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="15.6 13 100.05 100.05">
          <path d="M107.1 75.2C95.2 81.7 94 70 94 70c-9.9-1.1-17.2-12.2-17.2-12.2-13.3 6.9-5.9 26.3-.2 33.8 12 4.1 9.8 13.4 9.2 18.6-9.2 5.5-38.2 4.3-53.6-15-10.1-11-7.2-27.3-4.4-37.5 4-10.9 9.3-16.8 17.1-23.2 11.6-9.4 33-10.6 33-10.6.1-.8.8-1.7 1.6-2.7-2.6.1-5.7.3-9.3.8-2.4.5-5.1.7-7.9 1.5-2.8.6-5.6 1.6-8.5 2.7-2.9 1.1-5.8 2.6-8.6 4.2-2.7 1.9-5.5 3.6-7.8 6-2.6 2.1-4.5 4.8-6.4 7.5-2 2.6-3 5.7-4.5 8.4-1.1 2.9-1.7 5.8-2.6 8.6-.8 2.7-.7 5.5-1.1 7.9-.3 2.5-.6 4.7-.4 6.8.1 2 .1 3.8.2 5.2.1 2.9.1 4.6.1 4.6h-.4s-.3-1.6-.8-4.6c-.2-1.5-.5-3.3-.8-5.3-.4-2.1-.5-4.4-.3-7 .1-1.9.2-3.9.3-5.9l-4.8-.1 4.9-6.1-5.2-.7L23 50l-5.4-1.7 7.7-4.2-5.8-1.7 10-3.2-6.9-2L34 34l-6.2-2.8 11.4-1.5-5.6-3.2L47.5 25c.1 0 .1-.1.2-.1L41.3 22l14.6-1.2-6.7-3.5 27.6 2.2c1.5.1 2.8.2 4 .3 3.5-3.4 9.1-6.8 9.1-6.8-1.1 1.1-1.6 7.4-1.6 7.4 1.1-2.1 4.8-4.1 4.8-4.1-2.1 4.8 0 15.2 0 15.2 6 6 12.6 26.6 12.6 26.6l2.5 3.7c3.3 4.5 2.1 11.7-1.1 13.4z"></path>
        </svg>
      ),
    },
    {
      id: 'greyhounds',
      name: 'Greyhounds',
      counter: 235,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="3 14.91 120.1 120.1">
          <path d="M91 101.7s1.1-7.8 1.2-11.7c.1-3.9.6-12.4 2.1-18.4l3.3-6.2c-.9 4-4 17.9-4.1 21.8-.1 3.9-1.2 12.3-1.2 12.3-.4 2.5 1.7 4.3 1.7 4.3 2.2-.1 3.4 2.3 3.4 2.3.7 1.2-.5 1.4-2.1 1.4-.5-.5-2.4-2-3.3-1.9 0 0-1.4-1.4-1-3.9zM30.3 84.5s3.2-1.6 5-5.3c0 0 4.9-8.7 6.1-10.6.5-.7.7-1 2.9-1.9l1.2.1s-.9 9.2-8.7 15.9c-7.8 6.7-11.2 11.8-11.2 20.2 0 0 5.3.6 4.9 4.1 0 0-7.4 1.6-7.5-1 0 0-2.4 5.7-1-13.8 2.3-2.9 4-5.3 8.3-7.7z"></path>
        </svg>
      ),
    },
    {
      id: 'tennis',
      name: 'Tennis',
      counter: 325,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zm.17 36A42 42 0 0163.05 105a42.31 42.31 0 01-7.6-.7 41.52 41.52 0 01-9.78-3 16.31 16.31 0 01-4.23-9.6c-.58-7 4.17-11.84 6.25-13.62 5.66-4.72 14.89-4.72 23.82-4.72 9.69 0 18.84 0 25.47-5.47a34.78 34.78 0 006.44-7.24l1.36-2a42.06 42.06 0 01-.48 11.91z"></path>
        </svg>
      ),
    },
    {
      id: 'basketball',
      name: 'Basketball',
      counter: 145,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13.04 13.13 99.89 99.89">
          <path d="M109.65 81c0-.1.07-.21.11-.31s.11-.31.17-.46a49.8 49.8 0 003-15.4v-.77-1-.46-.94-1.15c0-.38-.05-.82-.08-1.23 0-.23 0-.45-.06-.68a49.52 49.52 0 00-.75-5.31v-.06c-.12-.59-.25-1.17-.39-1.75 0-.11 0-.21-.08-.31-.13-.56-.28-1.12-.43-1.67 0-.12-.07-.24-.11-.36-.16-.55-.33-1.11-.51-1.66s-.38-1.14-.59-1.7l-.25-.66c-.22-.57-.45-1.13-.69-1.69l-.09-.22a49.77 49.77 0 00-37.66-29.53h-.31c-1-.15-2-.27-3-.37l-.57-.06h-.65l-1.12-.07h-.56c-.7 0-1.36-.05-2-.05h-.69a49.69 49.69 0 00-21.76 5.3l-1.11.58h-.08l-.09.05a50 50 0 00-19.66 19.06l-.27.47a1.74 1.74 0 00-.1.19A52.33 52.33 0 0016.78 44l-.33.83c-.25.66-.49 1.31-.72 2-.09.24-.18.48-.26.73-.26.8-.49 1.61-.71 2.43-.11.4-.21.8-.31 1.2s-.23 1-.34 1.49-.18.85-.26 1.28a.43.43 0 000 .11c-.09.49-.16 1-.24 1.49-.11.72-.2 1.44-.28 2.17-.06.55-.12 1.1-.16 1.65 0 .39-.05.79-.07 1.19 0 .63-.05 1.27-.06 1.9V63.4a49.87 49.87 0 00.38 5.87v.29q.18 1.33.42 2.64c0 .17.06.34.1.51.16.84.35 1.68.56 2.52 0 .14.07.28.1.42.24.9.5 1.81.79 2.7.13.4.28.8.42 1.2s.29.85.46 1.27c.22.59.46 1.17.7 1.75.07.16.15.33.22.5.61 1.4 1.26 2.79 2 4.13.45.81.94 1.63 1.5 2.51l.15.24c.52.81 1.07 1.62 1.63 2.39.75 1 1.56 2 2.38 3l.14.17c.48.55 1 1.1 1.45 1.63l.4.42c.43.45.86.9 1.31 1.34l.82.77c.33.31.66.62 1 .92a47.79 47.79 0 004.11 3.26l.16.11c.66.47 1.33.92 2 1.35l.38.23c.61.38 1.22.75 1.85 1.1l.55.3c.57.31 1.14.61 1.73.9l.7.34c.53.26 1.07.5 1.6.73l.88.37c.48.2 1 .39 1.45.57l1.05.38 1.3.43L49 111l1.14.31c.46.12.92.25 1.39.36l1.17.25c.55.11 1.1.23 1.66.33.73.12 1.46.24 2.19.33l.59.07c.71.09 1.43.16 2.15.21h.4c.82 0 1.65.09 2.47.1h3.73l1.06-.07 1.24-.11h.47a50 50 0 0037.89-25.16l.31-.56c.18-.32.35-.65.52-1l.45-.88.39-.82c.06-.12.13-.25.18-.37l.1-.22.37-.84c0-.1.09-.19.13-.29.24-.64.45-1.13.65-1.64z"></path>
        </svg>
      ),
    },
    {
      id: 'darts',
      name: 'Darts',
      counter: 14,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="8.83 8.83 108.34 108.34">
          <path d="M66 57v-2.39a8.78 8.78 0 00-.91-.29V40.68c.31 0 .61.08.91.12v-4.24a27.15 27.15 0 00-3-.16A26.49 26.49 0 0044.37 44l-.19.16c0 .06-.11.12-.15.18a26.56 26.56 0 000 37.26l.16.18a1.37 1.37 0 00.18.16 26.56 26.56 0 0037.26 0l.18-.16.16-.18A26.49 26.49 0 0089.6 63a27.15 27.15 0 00-.16-3H85.2c0 .3.09.6.12.91H71.68a8.78 8.78 0 00-.29-.91H69l18.5-18.54c5.11 1.85 10.37 1 13.72-2.37l11.17-11.17a2.09 2.09 0 00.61-1.48 2.12 2.12 0 00-.61-1.48L101 13.61a2.12 2.12 0 00-1.44-.61 2.09 2.09 0 00-1.48.61L86.91 24.78c-3.35 3.35-4.22 8.61-2.37 13.72z"></path>
        </svg>
      ),
    },
    {
      id: 'cricket',
      name: 'Cricket',
      counter: 42,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13.1 13.1 99.9 99.9">
          <path d="M83.7 67.2a1.7 1.7 0 010-2.3l2.1-2.5a1.7 1.7 0 012.5 2.2l-2.2 2.5a1.7 1.7 0 01-2.4.1zM51.2 96a1.6 1.6 0 00-1.6.2l-2.7 2a1.7 1.7 0 00-.6 1.6 1.7 1.7 0 002.6 1.1c1-.6 1.8-1.3 2.7-2a1.7 1.7 0 00.6-1.5 1.6 1.6 0 00-1-1.4z"></path>
        </svg>
      ),
    },
    {
      id: 'golf',
      name: 'Golf',
      counter: 18,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <path d="M60 25v60M60 25l25 12-25 12"></path>
          <circle cx="45" cy="85" r="6" fill="currentColor"></circle>
        </svg>
      ),
    },
    {
      id: 'american-football',
      name: 'Am. Football',
      counter: 12,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 12.95 100.12 100.12">
          <path d="M32.82 113.07C49.18 113.07 72.8 107 90 90c25.19-25.2 26.51-65.83 19.13-73.22-3.43-3.43-12.27-3.83-16-3.83-16.62 0-40.37 6.07-57.25 23C10.4 61.22 10 102.38 16.6 109.11c3.56 3.43 11.74 3.96 16.22 3.96z"></path>
        </svg>
      ),
    },
    {
      id: 'aussie-rules',
      name: 'Aussie Rules',
      counter: 4,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="3 11.89 120 120">
          <path d="M98.42 41.72l-.52-.22-.07-3.56a16.53 16.53 0 01-.14-2 16 16 0 01.8-5l.51-1.66-36-12.87-36 12.87.54 1.66a16 16 0 01.8 5 16.39 16.39 0 01-.14 2l-.1 3.56-.52.22c-1 .42-6.53 4-6.53 4S23.6 37.61 23.6 37a9.86 9.86 0 00-.48-3.07l-2.28-7L63 11.89 105.16 27l-2.28 7a10.16 10.16 0 00-.48 3c0 .62 2.55 8.76 2.55 8.76s-5.51-3.62-6.53-4.04zM63 113.15c18.37-5.75 39.36-22 39.36-22l-14 .5A103.42 103.42 0 0163 108.37a104.51 104.51 0 01-25.6-16.78c-1.5-.4-13.76-.42-13.76-.42S44.62 107.4 63 113.15z"></path>
        </svg>
      ),
    },
    {
      id: 'baseball',
      name: 'Baseball',
      counter: 35,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="12.98 13 100 100">
          <path d="M104.13 34.6A50 50 0 1063.05 113a50 50 0 0041.07-78.4zM21.7 55.44A41.79 41.79 0 0132.67 34c.31.4.63.79.94 1.2l.53.72-2.76 2.67a1.58 1.58 0 002.2 2.27l2.34-2.27.65 1.13a46.38 46.38 0 012.51 5l.39.93-3.9 1.69a1.58 1.58 0 00.62 3 1.68 1.68 0 00.62-.13l3.74-1.61.32 1.1a45.59 45.59 0 011.27 5.49l.18 1.08-3.57.35a1.58 1.58 0 00.15 3.15h.16l3.6-.35.06 1.06a47.35 47.35 0 010 5.33l-.07 1.06-3.57-.36h-.18A1.57 1.57 0 0037.33 68a1.62 1.62 0 00.35 1.16 1.64 1.64 0 001.07.57l3.53.34-.28 1.36a49.68 49.68 0 01-1.24 5.13l-.33 1.09-3.64-1.56a1.5 1.5 0 00-.62-.13 1.57 1.57 0 00-1.45 1 1.59 1.59 0 00.85 2.04l3.79 1.63-.4.94a47.09 47.09 0 01-2.5 5l-.66 1.13-2.22-2.15a1.54 1.54 0 00-1.1-.45 1.56 1.56 0 00-1.13.48 1.58 1.58 0 000 2.23L34 90.32l-.54.72c-.25.33-.52.66-.79 1a43.32 43.32 0 01-4.22-5.18 41.69 41.69 0 01-6.75-31.42z"></path>
        </svg>
      ),
    },
    {
      id: 'biathlon',
      name: 'Biathlon',
      counter: 3,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <circle cx="45" cy="63" r="8" fill="currentColor"></circle>
          <circle cx="81" cy="63" r="8" fill="currentColor"></circle>
        </svg>
      ),
    },
    {
      id: 'boxing',
      name: 'Boxing',
      counter: 2,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="10.8 3 120 120">
          <path d="M35.8 49.9c0 .4-.2.7-.4 1-.3.3-.6.4-1 .4s-.7-.2-1-.4c-.3-.3-.4-.6-.4-1s.2-.7.4-1c.3-.3.6-.4 1-.4s.7.2 1 .4c.3.3.4.7.4 1zm-1.4-3.6c.8 0 1.4-.6 1.4-1.4v-3.1c0-3.3 2.7-6.1 6.1-6.1h5.5c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4h-5.5c-4.9 0-8.9 4-8.9 8.9v3.1c0 .8.6 1.4 1.4 1.4zm53.5 54.3c2.9 0 5.3-2.4 5.3-5.3v-9.6c0-.4-.1-.9-.2-1.3l1.2-1.3c4.1-4.4 6.3-10.1 6.3-16V47.4c0-7.9-6.4-14.3-14.3-14.3H72.3c-.7-1.3-1.6-2.5-2.6-3.5-2.7-2.7-6.3-4.1-10.1-4.1H39.8c-7.9 0-14.3 6.4-14.3 14.3v19.6c0 6 2.2 11.6 6.3 16l1.2 1.3c-.1.4-.2.9-.2 1.3v9.6c0 2.9 2.4 5.3 5.3 5.3h21.3v2.4c0 2.9 2.4 5.3 5.3 5.3h23.2z"></path>
        </svg>
      ),
    },
    {
      id: 'chess',
      name: 'Chess',
      counter: 5,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <path d="M43 25h40v15H43zm10 15v35h20V40zM35 75h56v15H35z"></path>
        </svg>
      ),
    },
    {
      id: 'cycling',
      name: 'Cycling',
      counter: 5,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <circle cx="35" cy="75" r="16" fill="none" stroke="currentColor" strokeWidth="6"></circle>
          <circle cx="91" cy="75" r="16" fill="none" stroke="currentColor" strokeWidth="6"></circle>
          <path d="M35 75l20-32h20l16 32M55 43L40 30h-8M75 43l-10 32" fill="none" stroke="currentColor" strokeWidth="6"></path>
        </svg>
      ),
    },
    {
      id: 'esports',
      name: 'eSports',
      counter: 24,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="8.08 27 109.88 109.88">
          <path d="M18.61 99a10.16 10.16 0 01-2.61-.34c-2.63-.75-4.61-2.64-6-5.75-1.51-3.61-2.13-8.7-1.86-15.54a106 106 0 013-20.16 71.2 71.2 0 016.19-16.89c6.55-11.74 13.27-13.25 18.39-13.25 4.13 0 8.58 1.13 13.29 2.33l1.31.32A82.56 82.56 0 0062.21 32h1.49a81.48 81.48 0 0012-2.29l1.1-.27C81.33 28.25 86 27 90.3 27c7.58 0 13.26 4.07 18.43 13.2a76.67 76.67 0 016.17 16.88 105 105 0 013 20.15c.27 6.88-.36 12.12-1.87 15.55-1.31 3.14-3.29 5.06-6 5.89a9.3 9.3 0 01-2.43.3 27.51 27.51 0 01-7.84-1.25c-4.82-2-11.89-6.34-18.54-12.58C77 81 72 78.55 63 78.55S49 81 44.78 85.16c-6.63 6.22-13.7 10.57-18.54 12.56A24.61 24.61 0 0118.61 99z"></path>
        </svg>
      ),
    },
    {
      id: 'field-hockey',
      name: 'Field Hockey',
      counter: 7,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <path d="M30 25l45 55h20v-8H78L37 25h-7z"></path>
          <circle cx="85" cy="85" r="6" fill="currentColor"></circle>
        </svg>
      ),
    },
    {
      id: 'formula-1',
      name: 'Formula 1',
      counter: 3,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <path d="M25 35h16v14H25zm16 0h16v14H41zm16 0h16v14H57zm16 0h16v14H73zm-48 14h16v14H25zm16 0h16v14H41zm16 0h16v14H57zm16 0h16v14H73zm-48 14h16v14H25zm16 0h16v14H41zm16 0h16v14H57zm16 0h16v14H73z"></path>
        </svg>
      ),
    },
    {
      id: 'futsal',
      name: 'Futsal',
      counter: 9,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <path d="M112.93 65.36c0-.79 0-1.58.06-2.37a49.6 49.6 0 00-6-23.65 1.74 1.74 0 01-.1-.19l-1-1.77-.19-.38c-.35-.57-.72-1.13-1.09-1.69l-.22-.34-.09-.14-.08-.15A50.51 50.51 0 0098 27.29l-.59-.57-.91-.84-.81-.72-.49-.41c-.74-.63-1.5-1.23-2.28-1.81l-.19-.15c-.45-.34-.92-.66-1.38-1l-.16-.11A50 50 0 0085 18.11l-.18-.11h-.19c-.61-.29-1.23-.57-1.85-.84l-.68-.29-1.26-.5c-.44-.16-.88-.33-1.33-.48l-.67-.23c-.64-.22-1.28-.42-1.93-.6l-.15-.05A50 50 0 0063 13h-2.44l-.89.06c-.52 0-1 .07-1.55.12l-.83.09-1.62.21-.71.11c-.59.09-1.17.2-1.75.31l-.55.11c-.66.14-1.32.3-2 .46l-.28.07a49.87 49.87 0 00-6 2h-.08l-.44.19-.54.23c-.53.22-1 .45-1.56.68l-.19.1a49.83 49.83 0 00-20 16.93 1.19 1.19 0 00-.17.36 49.75 49.75 0 00-5.3 10.65l-.24.71q-.25.7-.48 1.41l-.34 1.14-.3 1c-.12.44-.23.88-.33 1.33l-.21.91-.29 1.38c0 .14-.06.27-.08.41l-.09.52-.23 1.46-.15 1.23c0 .36-.09.72-.12 1.08-.06.59-.1 1.18-.13 1.76v.56C13 61.4 13 62.19 13 63c0 1 0 2 .08 2.94a1.24 1.24 0 00-.05.43 49.88 49.88 0 009.3 25.85 1.52 1.52 0 00.4.36L23 93a49.52 49.52 0 0025.51 17.87l.12.06A50.09 50.09 0 0063 113h2.52c.58 0 1.16-.07 1.73-.12h.54l1.58-.17.51-.07a38.7 38.7 0 001.88-.29h.14c.71-.12 1.41-.27 2.11-.42h.11c.63-.14 1.26-.3 1.88-.47l.39-.11 1-.26h.1a50 50 0 0026-18.51 1.85 1.85 0 00.14-.14 49.83 49.83 0 009.29-25.85 1.79 1.79 0 000-.23 1.41 1.41 0 000-.2c-.02-.42 0-.61.01-.8z"></path>
        </svg>
      ),
    },
    {
      id: 'gaelic-football',
      name: 'Gaelic Football',
      counter: 4,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <circle cx="63" cy="63" r="40" fill="none" stroke="currentColor" strokeWidth="6"></circle>
          <path d="M23 63h80M63 23v80" stroke="currentColor" strokeWidth="6"></path>
        </svg>
      ),
    },
    {
      id: 'handball',
      name: 'Handball',
      counter: 11,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <circle cx="63" cy="40" r="12" fill="currentColor"></circle>
          <path d="M63 52l-15 25 10 20M63 52l15 25-10 20" fill="none" stroke="currentColor" strokeWidth="6"></path>
        </svg>
      ),
    },
    {
      id: 'hurling',
      name: 'Hurling',
      counter: 2,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <path d="M30 25l45 55h20v-8H78L37 25h-7z"></path>
        </svg>
      ),
    },
    {
      id: 'ice-hockey',
      name: 'Ice Hockey',
      counter: 28,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="2.01 3.68 122.01 122.01">
          <path d="M123.12 70.27a7.07 7.07 0 00-5.33-3.81 7.85 7.85 0 00-1.08-.08h-26a7.66 7.66 0 01-6.09-2.5l-2.07-2.54L72.1 47l21.81-33.46a6.28 6.28 0 00-5.18-9.85 5.3 5.3 0 00-.57 0 6.25 6.25 0 00-4.52 2.57L63 34.57 42.36 6.31a6.24 6.24 0 00-4.51-2.59 5.63 5.63 0 00-.58 0 6.28 6.28 0 00-5.19 9.84L53.9 47 43.45 61.34l-2.07 2.54a7.66 7.66 0 01-6.09 2.5h-26a7.85 7.85 0 00-1.08.08 7.08 7.08 0 00-5.33 3.8 7.74 7.74 0 00-.07 7L5.71 83a7.26 7.26 0 006.19 4h17.16a7.4 7.4 0 00-1 2.6 1.34 1.34 0 00-.15.49v17.56a1.26 1.26 0 00.16.46c1.23 7.24 14.79 12.76 32.25 13.3a1.75 1.75 0 00.33 0 1.24 1.24 0 00.27 0h4.5a1.09 1.09 0 00.26 0 1.75 1.75 0 00.32 0c17.44-.54 30.88-6.05 32.14-13.28a1.27 1.27 0 000-.48V90.11a1.13 1.13 0 000-.49 7.14 7.14 0 00-1-2.6h17a7.26 7.26 0 006.19-4l2.9-5.76a7.7 7.7 0 00-.11-6.99z"></path>
        </svg>
      ),
    },
    {
      id: 'mma',
      name: 'MMA',
      counter: 9,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="3 3 120 120">
          <path d="M121 102.5c-3.8-11.8-6.1-23.2-9.6-34.3-31.6 5-65.6 4.9-97.2-.2-3.1 11.3-5.9 22.8-9.2 34.7-.7 4.1-1.3 4.1-2 8.1 39.7-5.2 80.3-5.2 120 0-.7-4.1-1.4-4.2-2-8.3z"></path>
        </svg>
      ),
    },
    {
      id: 'motor-racing',
      name: 'Motor Racing',
      counter: 6,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <path d="M25 35h16v14H25zm16 0h16v14H41zm16 0h16v14H57zm16 0h16v14H73z"></path>
        </svg>
      ),
    },
    {
      id: 'padel',
      name: 'Padel',
      counter: 12,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <ellipse cx="63" cy="50" rx="20" ry="25" fill="none" stroke="currentColor" strokeWidth="6"></ellipse>
          <path d="M63 75v20" stroke="currentColor" strokeWidth="8" strokeLinecap="round"></path>
        </svg>
      ),
    },
    {
      id: 'pesapallo',
      name: 'Pesapallo',
      counter: 5,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <circle cx="63" cy="63" r="35" fill="none" stroke="currentColor" strokeWidth="6"></circle>
        </svg>
      ),
    },
    {
      id: 'politics',
      name: 'Politics',
      counter: 8,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <path d="M25 85h76V40L63 20 25 40z"></path>
        </svg>
      ),
    },
    {
      id: 'rugby-league',
      name: 'Rugby League',
      counter: 16,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="12.09 3 120 120">
          <path d="M112.48 34.26s-1.38-5.22-5-7.84a21.73 21.73 0 00-4.49-2.05 57.39 57.39 0 00-6.12-1.85L63 3 15.33 30.52v37.61A69.9 69.9 0 0012.46 81S11 93.76 13.88 96.51c0 0 5.34 5.18 16.47 7.64L63 123l47.67-27.52V60.63c3.06-8.35 4.5-17.63 1.81-26.37z"></path>
        </svg>
      ),
    },
    {
      id: 'rugby-union',
      name: 'Rugby Union',
      counter: 22,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13.32 9.86 106.33 106.33">
          <path d="M107.4 17.9s-3-5.17-7.64-6.91a23.64 23.64 0 00-5.38-.9c-9-.79-38.52-1-63 26 0 0-22.4 24.12-17.31 60.46 0 0 2.1 14.06 6 16.16 0 0 26.54 14.84 67.1-16.7a90.83 90.83 0 0016.42-18.47c5.34-8.1 16.7-39.23 3.81-59.64z"></path>
        </svg>
      ),
    },
    {
      id: 'sailing',
      name: 'Sailing',
      counter: 4,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <path d="M30 80h66l-10 15H40zM60 20l25 55H60z"></path>
        </svg>
      ),
    },
    {
      id: 'snooker',
      name: 'Snooker',
      counter: 7,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <circle cx="45" cy="63" r="10" fill="currentColor"></circle>
          <circle cx="65" cy="53" r="10" fill="currentColor"></circle>
          <circle cx="65" cy="73" r="10" fill="currentColor"></circle>
          <circle cx="85" cy="63" r="10" fill="currentColor"></circle>
        </svg>
      ),
    },
    {
      id: 'specials',
      name: 'Specials',
      counter: 15,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <polygon points="63,20 73,45 100,45 78,60 86,85 63,70 40,85 48,60 26,45 53,45"></polygon>
        </svg>
      ),
    },
    {
      id: 'speedway',
      name: 'Speedway',
      counter: 3,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <path d="M30 75l20-32h20l16 32M55 43L40 30h-8M75 43l-10 32" fill="none" stroke="currentColor" strokeWidth="6"></path>
        </svg>
      ),
    },
    {
      id: 'table-tennis',
      name: 'Table Tennis',
      counter: 31,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="8.93 8 109.96 109.96">
          <path d="M116.08 94.89L92.4 71.06l7.41-7.42a3 3 0 001-1.71A46.33 46.33 0 0088 21.41 45.66 45.66 0 0055.58 8a46.19 46.19 0 00-32.52 13.41 46.08 46.08 0 00-5 59.06 20.62 20.62 0 00-9.13 17 20.51 20.51 0 0040.92 2 45.44 45.44 0 005.73.37 52.89 52.89 0 008-.71 4.79 4.79 0 001.72-.86l7.41-7.56 23.83 23.83a3.24 3.24 0 002.28.85 3.81 3.81 0 002.29-.85l15-15.13a3.12 3.12 0 000-4.56zm-100-40.95a39.23 39.23 0 0139.5-39.38A39 39 0 0183.41 26 45.7 45.7 0 0190 34.54L42.65 81.85A20.33 20.33 0 0029.44 77a20.09 20.09 0 00-5.35.74 39 39 0 01-8.03-23.8zm82.75 53.79L75 83.9a3.34 3.34 0 00-2.28-1 3.65 3.65 0 00-2.27 1l-9 9a40.22 40.22 0 01-12.06 0 20.54 20.54 0 00-2.3-5.7L93 41.38a38.3 38.3 0 011.58 18.41l-9 9a3.17 3.17 0 000 4.56l23.68 23.83z"></path>
        </svg>
      ),
    },
    {
      id: 'volleyball',
      name: 'Volleyball',
      counter: 19,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <circle cx="63" cy="63" r="40" fill="none" stroke="currentColor" strokeWidth="6"></circle>
          <path d="M30 63c20 0 33-13 33-33M63 96c0-20 13-33 33-33M37 89c15-15 40-15 52 0" fill="none" stroke="currentColor" strokeWidth="6"></path>
        </svg>
      ),
    },
    {
      id: 'water-polo',
      name: 'Water Polo',
      counter: 10,
      icon: (
        <svg className="S w-5 h-5 fill-current" viewBox="13 13 100 100">
          <circle cx="63" cy="45" r="20" fill="none" stroke="currentColor" strokeWidth="6"></circle>
          <path d="M25 80c10-5 20 5 30 0s20-5 30 0 15-5 25 0" stroke="currentColor" strokeWidth="6" fill="none"></path>
        </svg>
      ),
    },
  ];

  const currentSport = sportsTiles.find((s) => s.id === selectedCategory || s.id === activeSport) || sportsTiles[3];

  const countryChips = [
    { id: 'topBets', locId: 'topBets', text: 'Popular', isRed: true },
    { id: 'all', locId: 'all', text: 'All' },
    { id: 'ENG', locId: '77', text: 'ENG', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp' },
    { id: 'EUR', locId: '67', text: 'EUR', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/67.webp' },
    { id: 'INT', locId: '240', text: 'INT', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/240.webp' },
    { id: 'SCO', locId: '78', text: 'SCO', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/78.webp' },
    { id: 'ESP', locId: '65', text: 'ESP', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/65.webp' },
    { id: 'GER', locId: '54', text: 'GER', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/54.webp' },
    { id: 'ITA', locId: '111', text: 'ITA', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/111.webp' },
    { id: 'FRA', locId: '73', text: 'FRA', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/73.webp' },
    { id: 'POR', locId: '182', text: 'POR', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/182.webp' },
    { id: 'TUR', locId: '221', text: 'TUR', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/221.webp' },
    { id: 'NED', locId: '164', text: 'NED', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/164.webp' },
    { id: 'BEL', locId: '21', text: 'BEL', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/21.webp' },
    { id: 'ARG', locId: '12', text: 'ARG', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/12.webp' },
    { id: 'BRA', locId: '30', text: 'BRA', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/30.webp' },
    { id: 'AUT', locId: '14', text: 'AUT', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/14.webp' },
    { id: 'SUI', locId: '41', text: 'SUI', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/41.webp' },
    { id: 'DEN', locId: '56', text: 'DEN', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/56.webp' },
    { id: 'NOR', locId: '165', text: 'NOR', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/165.webp' },
    { id: 'SWE', locId: '194', text: 'SWE', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/194.webp' },
    { id: 'CRO', locId: '100', text: 'CRO', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/100.webp' },
    { id: 'USA', locId: '229', text: 'USA', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/229.webp' },
    { id: 'CZE', locId: '53', text: 'CZE', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/53.webp' },
    { id: 'POL', locId: '178', text: 'POL', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/178.webp' },
    { id: 'HUN', locId: '102', text: 'HUN', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/102.webp' },
    { id: 'IRL', locId: '104', text: 'IRL', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/104.webp' },
    { id: 'ROU', locId: '187', text: 'ROU', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/187.webp' },
    { id: 'UKR', locId: '226', text: 'UKR', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/226.webp' },
    { id: 'SLO', locId: '197', text: 'SLO', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/197.webp' },
    { id: 'SVK', locId: '199', text: 'SVK', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/199.webp' },
    { id: 'SRB', locId: '255', text: 'SRB', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/255.webp' },
    { id: 'ISR', locId: '105', text: 'ISR', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/105.webp' },
    { id: 'NIR', locId: '79', text: 'NIR', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/79.webp' },
    { id: 'PAR', locId: '184', text: 'PAR', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/184.webp' },
    { id: 'SOA', locId: '10008', text: 'SOA', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/10008.webp' },
    { id: 'VEN', locId: '234', text: 'VEN', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/234.webp' },
    { id: 'ECU', locId: '60', text: 'ECU', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/60.webp' },
    { id: 'LAT', locId: '135', text: 'LAT', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/135.webp' },
    { id: 'COL', locId: '47', text: 'COL', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/47.webp' },
    { id: 'FRO', locId: '72', text: 'FRO', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/72.webp' },
    { id: 'ISL', locId: '110', text: 'ISL', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/110.webp' },
    { id: 'EST', locId: '61', text: 'EST', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/61.webp' },
    { id: 'KOR', locId: '122', text: 'KOR', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/122.webp' },
    { id: 'BOL', locId: '29', text: 'BOL', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/29.webp' },
    { id: 'LTU', locId: '133', text: 'LTU', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/133.webp' },
    { id: 'CHN', locId: '46', text: 'CHN', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/46.webp' },
    { id: 'AUS', locId: '15', text: 'AUS', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/15.webp' },
    { id: 'FIN', locId: '68', text: 'FIN', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/68.webp' },
    { id: 'MEX', locId: '155', text: 'MEX', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/155.webp' },
    { id: 'BHU', locId: '32', text: 'BHU', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/32.webp' },
    { id: 'CHI', locId: '44', text: 'CHI', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/44.webp' },
    { id: 'URU', locId: '230', text: 'URU', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/230.webp' },
    { id: 'UZB', locId: '231', text: 'UZB', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/231.webp' },
    { id: 'PER', locId: '173', text: 'PER', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/173.webp' },
    { id: 'KAZ', locId: '125', text: 'KAZ', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/125.webp' },
    { id: 'IND', locId: '106', text: 'IND', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/106.webp' },
    { id: 'JPN', locId: '114', text: 'JPN', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/114.webp' },
    { id: 'CRC', locId: '48', text: 'CRC', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/48.webp' },
    { id: 'AFR', locId: '1', text: 'AFR', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/1.webp' },
    { id: 'BUL', locId: '23', text: 'BUL', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/23.webp' },
    { id: 'CAN', locId: '37', text: 'CAN', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/37.webp' },
    { id: 'IDN', locId: '103', text: 'IDN', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/103.webp' },
    { id: 'ASI', locId: '253', text: 'ASI', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/253.webp' },
    { id: 'RSA', locId: '246', text: 'RSA', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/246.webp' },
    { id: 'KHM', locId: '117', text: 'KHM', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/117.webp' },
    { id: 'LUX', locId: '134', text: 'LUX', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/134.webp' },
    { id: 'NCA', locId: '250', text: 'NCA', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/250.webp' },
    { id: 'GRE', locId: '91', text: 'GRE', flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/91.webp' },
  ];

  const timeRanges = [
    { id: 'Live', timeClass: 'Live', text: 'Live', isLive: true },
    { id: '60 min', timeClass: '60_min', text: '60 Min' },
    { id: '2 Hrs', timeClass: '2_Hrs', text: '2 Hrs' },
    { id: 'Today', timeClass: 'Today', text: 'Today' },
    { id: 'Tomorrow', timeClass: 'Tomorrow', text: 'Tomorrow' },
    { id: 'In 7 days', timeClass: 'In_7 days', text: 'In 7 Days' },
    { id: 'Later', timeClass: 'Later', text: 'Later' },
  ];

  return (
    <div className="space-y-3 mb-4 select-none font-['Nunito_Sans',sans-serif]">
      {/* Active Sport Title Header matching screenshot: ← [Icon] eSports */}
      <div className="flex items-center space-x-2 py-1">
        <button
          onClick={() => setSelectedCategory('esports')}
          className="p-1 rounded font-bold text-slate-700 hover:text-[#031A9A] hover:bg-slate-200/60 transition-colors flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
        </button>
        <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded bg-blue-100/70 border border-blue-200">
          <span className="text-[#031A9A] flex items-center shrink-0">{currentSport.icon}</span>
          <span className="font-extrabold text-sm text-[#031A9A] tracking-tight">{currentSport.name}</span>
        </div>
      </div>

      {/* Sports Tile Category Slider matching exact inspect DOM snippet & screenshot */}
      <div className="relative group/tiles">
        {/* Floating Red Arrow Button on left */}
        <button
          onClick={() => scrollSlider(sportsContainerRef, 'left')}
          className="w-7 h-7 rounded-full bg-[#FF2925] text-white flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 shadow-md z-10 hover:bg-rose-600 transition-transform cursor-pointer"
          title="Scroll left"
        >
          <ChevronLeft className="w-4 h-4 stroke-[3]" />
        </button>

        <div
          ref={sportsContainerRef}
          className="OM-Slider__Container OM-Slider__Loaded flex items-center space-x-1.5 overflow-x-auto scrollbar-none py-1 px-8"
        >
          {sportsTiles.map((st) => {
            const isActive = selectedCategory === st.id || activeSport === st.id;
            return (
              <div key={st.id} className={`OM-Slider__Item DisciplineId--${st.id} shrink-0`}>
                <button
                  onClick={() => setSelectedCategory(st.id)}
                  className={`flex flex-col items-center justify-center min-w-[78px] h-[58px] rounded-lg p-1.5 font-bold transition-all cursor-pointer shadow-xs relative ${
                    isActive
                      ? 'bg-[#FF2925] text-white isSelected font-extrabold shadow-md scale-102'
                      : 'bg-[#031A9A] text-white hover:bg-[#020E50]'
                  }`}
                >
                  <span className="OM-NavItem__IconContainer flex items-center justify-center h-5">
                    {st.icon}
                  </span>
                  <div className="flex items-center justify-center space-x-1 w-full mt-0.5">
                    <span className="OM-NavItem__Name text-[10px] leading-tight truncate text-center">
                      {st.name}
                    </span>
                    {st.counter > 0 && (
                      <span className="OM-NavItem__Counter text-[9px] font-mono font-black bg-white/20 px-1 py-0.2 rounded text-white leading-none">
                        {st.counter}
                      </span>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Floating Red Arrow Button on right matching photo */}
        <button
          onClick={() => scrollSlider(sportsContainerRef, 'right')}
          className="w-7 h-7 rounded-full bg-[#FF2925] text-white flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 shadow-md z-10 hover:bg-rose-600 transition-transform cursor-pointer"
          title="Scroll right"
        >
          <ChevronRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>

      {/* Country Filter Pills Slider matching inspect DOM snippet & photo */}
      <div className="relative group/chips">
        {/* Floating Red Arrow Button on left */}
        <button
          onClick={() => scrollSlider(countryContainerRef, 'left')}
          className="w-6 h-6 rounded-full bg-[#FF2925] text-white flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 shadow-md z-10 hover:bg-rose-600 transition-transform cursor-pointer"
          title="Scroll left"
        >
          <ChevronLeft className="w-3.5 h-3.5 stroke-[3]" />
        </button>

        <div
          ref={countryContainerRef}
          className="OM-Slider__Container OM-Slider__Loaded flex items-center space-x-1.5 overflow-x-auto scrollbar-none py-1 px-7"
        >
          {countryChips.map((c) => {
            const isActive = activeCountry === c.id;
            return (
              <div key={c.id} className={`OM-Slider__Item LocationId--${c.locId} shrink-0`}>
                <button
                  onClick={() => setActiveCountry(c.id)}
                  className={`Anchor OM-Slider__Action flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer border ${
                    c.isRed
                      ? 'bg-[#FF2925] text-white border-[#FF2925] isSelected shadow-sm'
                      : isActive
                      ? 'bg-[#031A9A] text-white border-[#031A9A] isSelected shadow-sm'
                      : 'bg-[#E8E8E8] text-[#0f172a] border-transparent hover:bg-slate-300'
                  }`}
                >
                  {c.flag && (
                    <div className="OM-Slider__ItemIcon flex items-center justify-center">
                      <span
                        className={`OM-Icon OM-Icon--${c.locId} OM-Icon--AsBackground OM-Icon--flag w-4 h-4 rounded-full bg-cover bg-center shrink-0 shadow-2xs border border-slate-300`}
                        style={{ backgroundImage: `url("${c.flag}")` }}
                      ></span>
                    </div>
                  )}
                  <div className="OM-Slider__ItemText leading-none">{c.text}</div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Floating Red Arrow Button on right */}
        <button
          onClick={() => scrollSlider(countryContainerRef, 'right')}
          className="w-6 h-6 rounded-full bg-[#FF2925] text-white flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 shadow-md z-10 hover:bg-rose-600 transition-transform cursor-pointer"
          title="Scroll right"
        >
          <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
        </button>
      </div>

      {/* Time Range Filter Bar matching exact inspect DOM & dark navy photo background */}
      <div className="bg-[#031473] rounded-md px-4 h-[44px] flex items-center overflow-x-auto scrollbar-none shadow-md">
        <div className="OM-Slider__Container flex items-center space-x-8 w-full">
          {timeRanges.map((tr) => {
            const isActive = activeTime === tr.id;
            return (
              <div key={tr.id} className={`OM-Slider__Item TimeRange--${tr.timeClass} shrink-0 h-[44px] flex items-center`}>
                <button
                  onClick={() => setActiveTime(tr.id)}
                  className={`Anchor OM-Slider__Action relative h-full flex items-center space-x-1.5 text-xs font-bold transition-all cursor-pointer ${
                    tr.isLive ? 'OM-Slider__Action--Live text-white' : 'text-white/90 hover:text-white'
                  } ${isActive ? 'isSelected text-white font-black' : ''}`}
                >
                  <div className="OM-Slider__ItemIcon"></div>
                  <div className="OM-Slider__ItemText flex items-center gap-1 leading-none">
                    <span>{tr.text}</span>
                    {tr.isLive && (
                      <span className="w-2 h-2 rounded-full bg-[#FF2925] inline-block animate-pulse"></span>
                    )}
                  </div>
                  {/* Red Active Underline indicator bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#FF2925] rounded-t-sm"></div>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
