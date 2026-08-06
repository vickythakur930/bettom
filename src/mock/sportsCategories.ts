import { SportCategory } from '@/types/sports';

export const mockSportCategories: SportCategory[] = [
  { id: 'basketball', name: 'Basketball', iconName: 'Dribble', liveCount: 14, totalCount: 86 },
  { id: 'football', name: 'Football', iconName: 'Trophy', liveCount: 32, totalCount: 210 },
  { id: 'tennis', name: 'Tennis', iconName: 'Activity', liveCount: 9, totalCount: 45 },
  { id: 'cricket', name: 'Cricket', iconName: 'Target', liveCount: 4, totalCount: 18 },
  { id: 'ice-hockey', name: 'Ice Hockey', iconName: 'Zap', liveCount: 6, totalCount: 34 },
  { id: 'volleyball', name: 'Volleyball', iconName: 'Disc', liveCount: 3, totalCount: 22 },
  { id: 'esports', name: 'Esports', iconName: 'Gamepad2', liveCount: 11, totalCount: 52 },
];
