import { Match, SportType } from '@/types/sports';
import { mockAllSportsMatches } from '@/mock/allSportsMatches';
import { TimeFilterValue } from '@/store/useSportsStore';

export interface SportCarouselItem {
  id: SportType;
  name: string;
  count: number;
  isLiveCount?: number;
  iconName: string;
}

export const TOP_SPORTS_LIST: SportCarouselItem[] = [
  { id: 'a-z-sports', name: 'A-Z Sports', count: 320, iconName: 'Grid' },
  { id: 'price-boost', name: 'Price Boost', count: 48, iconName: 'Zap' },
  { id: 'football', name: 'Football', count: 184, isLiveCount: 42, iconName: 'CircleDot' },
  { id: 'horse-racing', name: 'Horse Racing', count: 64, isLiveCount: 8, iconName: 'Trophy' },
  { id: 'greyhounds', name: 'Greyhounds', count: 36, isLiveCount: 5, iconName: 'Flame' },
  { id: 'tennis', name: 'Tennis', count: 92, isLiveCount: 19, iconName: 'Activity' },
  { id: 'basketball', name: 'Basketball', count: 54, isLiveCount: 12, iconName: 'Dribbble' },
  { id: 'darts', name: 'Darts', count: 28, isLiveCount: 4, iconName: 'Target' },
  { id: 'cricket', name: 'Cricket', count: 45, isLiveCount: 7, iconName: 'Shield' },
  { id: 'handball', name: 'Handball', count: 18, isLiveCount: 2, iconName: 'Box' },
  { id: 'table-tennis', name: 'Table Tennis', count: 62, isLiveCount: 15, iconName: 'Crosshair' },
  { id: 'mma', name: 'MMA', count: 18, isLiveCount: 1, iconName: 'Swords' },
  { id: 'boxing', name: 'Boxing', count: 14, isLiveCount: 0, iconName: 'Dumbbell' },
  { id: 'snooker', name: 'Snooker', count: 21, isLiveCount: 3, iconName: 'Circle' },
  { id: 'cycling', name: 'Cycling', count: 12, isLiveCount: 1, iconName: 'Compass' },
  { id: 'formula-1', name: 'Formula 1', count: 15, isLiveCount: 2, iconName: 'Flag' },
  { id: 'motor-racing', name: 'MotoGP', count: 11, isLiveCount: 0, iconName: 'Gauge' },
  { id: 'golf', name: 'Golf', count: 29, isLiveCount: 4, iconName: 'Sun' },
  { id: 'esports', name: 'Esports', count: 88, isLiveCount: 22, iconName: 'Gamepad2' },
  { id: 'the-hundred', name: 'The Hundred', count: 16, isLiveCount: 3, iconName: 'Shield' },
  { id: 'american-football', name: 'Am. Football', count: 38, isLiveCount: 6, iconName: 'Award' },
  { id: 'aussie-rules', name: 'Aussie Rules', count: 14, isLiveCount: 1, iconName: 'ShieldAlert' },
  { id: 'badminton', name: 'Badminton', count: 22, isLiveCount: 3, iconName: 'Crosshair' },
  { id: 'baseball', name: 'Baseball', count: 33, isLiveCount: 5, iconName: 'Disc' },
  { id: 'biathlon', name: 'Biathlon', count: 8, iconName: 'Compass' },
  { id: 'chess', name: 'Chess', count: 10, iconName: 'Box' },
  { id: 'field-hockey', name: 'Field Hockey', count: 12, isLiveCount: 2, iconName: 'Activity' },
  { id: 'floorball', name: 'Floorball', count: 15, isLiveCount: 1, iconName: 'Activity' },
  { id: 'futsal', name: 'Futsal', count: 18, isLiveCount: 3, iconName: 'CircleDot' },
  { id: 'gaelic-football', name: 'Gaelic Football', count: 9, iconName: 'CircleDot' },
  { id: 'hurling', name: 'Hurling', count: 11, iconName: 'Activity' },
  { id: 'ice-hockey', name: 'Ice Hockey', count: 41, isLiveCount: 9, iconName: 'Snowflake' },
  { id: 'padel', name: 'Padel', count: 16, isLiveCount: 2, iconName: 'Activity' },
  { id: 'politics', name: 'Politics', count: 7, iconName: 'Award' },
  { id: 'rugby-league', name: 'Rugby League', count: 19, isLiveCount: 2, iconName: 'ShieldAlert' },
  { id: 'rugby-union', name: 'Rugby Union', count: 22, isLiveCount: 3, iconName: 'ShieldAlert' },
  { id: 'sailing', name: 'Sailing', iconName: 'Compass', count: 5 },
  { id: 'specials', name: 'Specials', count: 12, iconName: 'Zap' },
  { id: 'speedway', name: 'Speedway', count: 8, isLiveCount: 1, iconName: 'Gauge' },
  { id: 'volleyball', name: 'Volleyball', count: 26, isLiveCount: 4, iconName: 'Layers' },
  { id: 'water-polo', name: 'Water Polo', count: 10, isLiveCount: 1, iconName: 'Layers' },
];

export interface RegionFilterItem {
  id: string;
  code: string;
  name: string;
  locationClass: string;
  flagUrl?: string;
}

export const REGION_FILTERS: RegionFilterItem[] = [
  { id: 'topBets', code: 'Popular', name: 'Popular', locationClass: 'LocationId--topBets' },
  { id: 'all', code: 'All', name: 'All Regions', locationClass: 'LocationId--all' },
  { id: '77', code: 'ENG', name: 'England', locationClass: 'LocationId--77', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp' },
  { id: '67', code: 'EUR', name: 'Europe', locationClass: 'LocationId--67', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/67.webp' },
  { id: '240', code: 'INT', name: 'International', locationClass: 'LocationId--240', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/240.webp' },
  { id: '78', code: 'SCO', name: 'Scotland', locationClass: 'LocationId--78', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/78.webp' },
  { id: '65', code: 'ESP', name: 'Spain', locationClass: 'LocationId--65', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/65.webp' },
  { id: '54', code: 'GER', name: 'Germany', locationClass: 'LocationId--54', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/54.webp' },
  { id: '111', code: 'ITA', name: 'Italy', locationClass: 'LocationId--111', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/111.webp' },
  { id: '73', code: 'FRA', name: 'France', locationClass: 'LocationId--73', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/73.webp' },
  { id: '182', code: 'POR', name: 'Portugal', locationClass: 'LocationId--182', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/182.webp' },
  { id: '221', code: 'TUR', name: 'Turkey', locationClass: 'LocationId--221', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/221.webp' },
  { id: '164', code: 'NED', name: 'Netherlands', locationClass: 'LocationId--164', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/164.webp' },
  { id: '21', code: 'BEL', name: 'Belgium', locationClass: 'LocationId--21', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/21.webp' },
  { id: '12', code: 'ARG', name: 'Argentina', locationClass: 'LocationId--12', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/12.webp' },
  { id: '30', code: 'BRA', name: 'Brazil', locationClass: 'LocationId--30', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/30.webp' },
  { id: '14', code: 'AUT', name: 'Austria', locationClass: 'LocationId--14', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/14.webp' },
  { id: '41', code: 'SUI', name: 'Switzerland', locationClass: 'LocationId--41', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/41.webp' },
  { id: '56', code: 'DEN', name: 'Denmark', locationClass: 'LocationId--56', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/56.webp' },
  { id: '165', code: 'NOR', name: 'Norway', locationClass: 'LocationId--165', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/165.webp' },
  { id: '194', code: 'SWE', name: 'Sweden', locationClass: 'LocationId--194', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/194.webp' },
  { id: '100', code: 'CRO', name: 'Croatia', locationClass: 'LocationId--100', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/100.webp' },
  { id: '229', code: 'USA', name: 'USA', locationClass: 'LocationId--229', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/229.webp' },
  { id: '53', code: 'CZE', name: 'Czech Republic', locationClass: 'LocationId--53', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/53.webp' },
  { id: '178', code: 'POL', name: 'Poland', locationClass: 'LocationId--178', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/178.webp' },
  { id: '102', code: 'HUN', name: 'Hungary', locationClass: 'LocationId--102', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/102.webp' },
  { id: '104', code: 'IRL', name: 'Ireland', locationClass: 'LocationId--104', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/104.webp' },
  { id: '187', code: 'ROU', name: 'Romania', locationClass: 'LocationId--187', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/187.webp' },
  { id: '226', code: 'UKR', name: 'Ukraine', locationClass: 'LocationId--226', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/226.webp' },
  { id: '197', code: 'SLO', name: 'Slovenia', locationClass: 'LocationId--197', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/197.webp' },
  { id: '199', code: 'SVK', name: 'Slovakia', locationClass: 'LocationId--199', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/199.webp' },
  { id: '255', code: 'SRB', name: 'Serbia', locationClass: 'LocationId--255', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/255.webp' },
  { id: '105', code: 'ISR', name: 'Israel', locationClass: 'LocationId--105', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/105.webp' },
  { id: '79', code: 'NIR', name: 'Northern Ireland', locationClass: 'LocationId--79', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/79.webp' },
  { id: '10008', code: 'SOA', name: 'South America', locationClass: 'LocationId--10008', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/10008.webp' },
  { id: '172', code: 'PAN', name: 'Panama', locationClass: 'LocationId--172', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/172.webp' },
  { id: '35', code: 'BLR', name: 'Belarus', locationClass: 'LocationId--35', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/35.webp' },
  { id: '234', code: 'VEN', name: 'Venezuela', locationClass: 'LocationId--234', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/234.webp' },
  { id: '72', code: 'FRO', name: 'Faroe Islands', locationClass: 'LocationId--72', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/72.webp' },
  { id: '60', code: 'ECU', name: 'Ecuador', locationClass: 'LocationId--60', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/60.webp' },
  { id: '184', code: 'PAR', name: 'Paraguay', locationClass: 'LocationId--184', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/184.webp' },
  { id: '135', code: 'LAT', name: 'Latvia', locationClass: 'LocationId--135', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/135.webp' },
  { id: '61', code: 'EST', name: 'Estonia', locationClass: 'LocationId--61', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/61.webp' },
  { id: '110', code: 'ISL', name: 'Iceland', locationClass: 'LocationId--110', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/110.webp' },
  { id: '47', code: 'COL', name: 'Colombia', locationClass: 'LocationId--47', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/47.webp' },
  { id: '133', code: 'LTU', name: 'Lithuania', locationClass: 'LocationId--133', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/133.webp' },
  { id: '15', code: 'AUS', name: 'Australia', locationClass: 'LocationId--15', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/15.webp' },
  { id: '68', code: 'FIN', name: 'Finland', locationClass: 'LocationId--68', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/68.webp' },
  { id: '44', code: 'CHI', name: 'Chile', locationClass: 'LocationId--44', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/44.webp' },
  { id: '231', code: 'UZB', name: 'Uzbekistan', locationClass: 'LocationId--231', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/231.webp' },
  { id: '230', code: 'URU', name: 'Uruguay', locationClass: 'LocationId--230', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/230.webp' },
  { id: '173', code: 'PER', name: 'Peru', locationClass: 'LocationId--173', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/173.webp' },
  { id: '29', code: 'BOL', name: 'Bolivia', locationClass: 'LocationId--29', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/29.webp' },
  { id: '46', code: 'CHN', name: 'China', locationClass: 'LocationId--46', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/46.webp' },
  { id: '155', code: 'MEX', name: 'Mexico', locationClass: 'LocationId--155', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/155.webp' },
  { id: '122', code: 'KOR', name: 'South Korea', locationClass: 'LocationId--122', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/122.webp' },
  { id: '144', code: 'MYA', name: 'Myanmar', locationClass: 'LocationId--144', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/144.webp' },
  { id: '106', code: 'IND', name: 'India', locationClass: 'LocationId--106', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/106.webp' },
  { id: '125', code: 'KAZ', name: 'Kazakhstan', locationClass: 'LocationId--125', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/125.webp' },
  { id: '157', code: 'MOZ', name: 'Mozambique', locationClass: 'LocationId--157', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/157.webp' },
  { id: '114', code: 'JPN', name: 'Japan', locationClass: 'LocationId--114', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/114.webp' },
  { id: '48', code: 'CRC', name: 'Costa Rica', locationClass: 'LocationId--48', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/48.webp' },
  { id: '1', code: 'AFR', name: 'Africa', locationClass: 'LocationId--1', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/1.webp' },
  { id: '23', code: 'BUL', name: 'Bulgaria', locationClass: 'LocationId--23', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/23.webp' },
  { id: '156', code: 'MAS', name: 'Malaysia', locationClass: 'LocationId--156', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/156.webp' },
  { id: '37', code: 'CAN', name: 'Canada', locationClass: 'LocationId--37', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/37.webp' },
  { id: '250', code: 'NCA', name: 'Nicaragua', locationClass: 'LocationId--250', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/250.webp' },
  { id: '253', code: 'ASI', name: 'Asia', locationClass: 'LocationId--253', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/253.webp' },
  { id: '246', code: 'RSA', name: 'South Africa', locationClass: 'LocationId--246', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/246.webp' },
  { id: '91', code: 'GRE', name: 'Greece', locationClass: 'LocationId--91', flagUrl: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/91.webp' },
];

export const TIME_FILTERS: { id: TimeFilterValue; label: string; badge?: string }[] = [
  { id: 'live', label: 'Live', badge: 'LIVE' },
  { id: '60min', label: '60 Min' },
  { id: '2hrs', label: '2 Hrs' },
  { id: 'today', label: 'Today' },
  { id: 'tomorrow', label: 'Tomorrow' },
  { id: '7days', label: 'In 7 Days' },
  { id: 'later', label: 'Later' },
];

// Master category configurations for realistic mock match generation
const categoryConfigs: Record<
  string,
  { leagueName: string; country: string; flag: string; pairs: [string, string][] }
> = {
    'price-boost': {
      leagueName: '⚡ BetTOM Price Boosts & Daily Specials',
      country: 'Featured',
      flag: '⚡',
      pairs: [
        ['Liverpool to Win & Both Teams to Score (Was 2.10)', 'Boosted Odds 3.50'],
        ['Real Madrid & Bayern Munich Both Win (Was 2.40)', 'Boosted Odds 4.20'],
        ['Tyson Fury Win by Knockout (Was 2.80)', 'Boosted Odds 4.50'],
        ['Max Verstappen F1 Fastest Lap & Win (Was 1.90)', 'Boosted Odds 2.90'],
      ],
    },
    'a-z-sports': {
      leagueName: '🏆 All Sports Master Championship Highlights',
      country: 'Global',
      flag: '🌐',
      pairs: [
        ['England Cricket', 'Australia Cricket'],
        ['Real Madrid', 'Barcelona'],
        ['Tyson Fury', 'Oleksandr Usyk'],
        ['Los Angeles Lakers', 'Boston Celtics'],
      ],
    },
    football: {
      leagueName: 'World Football Championship Matches',
      country: 'International',
      flag: '⚽',
      pairs: [
        ['Manchester City', 'Real Madrid'],
        ['Bayern Munich', 'Paris Saint-Germain'],
        ['Inter Milan', 'Barcelona'],
        ['Arsenal', 'Juventus'],
      ],
    },
    cricket: {
      leagueName: 'ICC World Cup & Test Match Championship',
      country: 'International',
      flag: '🏏',
      pairs: [
        ['India National Cricket Team', 'Australia Cricket Team'],
        ['England Cricket Team', 'South Africa Cricket Team'],
        ['Pakistan Cricket Team', 'New Zealand Cricket Team'],
      ],
    },
    tennis: {
      leagueName: 'ATP / WTA Masters Championship',
      country: 'Grand Slam',
      flag: '🎾',
      pairs: [
        ['Novak Djokovic', 'Carlos Alcaraz'],
        ['Jannik Sinner', 'Alexander Zverev'],
        ['Iga Swiatek', 'Aryna Sabalenka'],
      ],
    },
    basketball: {
      leagueName: 'NBA & EuroLeague Basketball Championship',
      country: 'USA / Europe',
      flag: '🏀',
      pairs: [
        ['Boston Celtics', 'Dallas Mavericks'],
        ['Denver Nuggets', 'Minnesota Timberwolves'],
        ['Real Madrid Baloncesto', 'Panathinaikos'],
      ],
    },
    darts: {
      leagueName: 'PDC World Darts Championship',
      country: 'United Kingdom',
      flag: '🎯',
      pairs: [
        ['Luke Littler', 'Luke Humphries'],
        ['Michael van Gerwen', 'Michael Smith'],
        ['Gerwyn Price', 'Rob Cross'],
      ],
    },
    'horse-racing': {
      leagueName: 'Royal Ascot & Cheltenham Championship Racing',
      country: 'UK & Ireland',
      flag: '🏇',
      pairs: [
        ['City Of Troy (Jockey A)', 'Los Angeles (Jockey B)'],
        ['Kyprios (Jockey C)', 'Continuous (Jockey D)'],
      ],
    },
    greyhounds: {
      leagueName: 'English Greyhound Derby Championship',
      country: 'United Kingdom',
      flag: '🐕',
      pairs: [
        ['Ballymac Kingdom (Trap 1)', 'Droopys Sydney (Trap 3)'],
        ['Westwell Ofelia (Trap 2)', 'Coolavanny Hope (Trap 6)'],
      ],
    },
    'american-football': {
      leagueName: 'NFL Super Bowl Championship',
      country: 'USA',
      flag: '🏈',
      pairs: [
        ['Kansas City Chiefs', 'San Francisco 49ers'],
        ['Baltimore Ravens', 'Detroit Lions'],
      ],
    },
    'aussie-rules': {
      leagueName: 'AFL Premiership Aussie Rules',
      country: 'Australia',
      flag: '🏉',
      pairs: [
        ['Collingwood Magpies', 'Brisbane Lions'],
        ['Carlton Blues', 'Sydney Swans'],
      ],
    },
    biathlon: {
      leagueName: 'IBU World Cup Biathlon',
      country: 'International',
      flag: '⛷️',
      pairs: [
        ['Johannes Thingnes Boe', 'Tarjei Boe'],
        ['Sturla Holm Laegreid', 'Sebastian Samuelsson'],
      ],
    },
    chess: {
      leagueName: 'FIDE World Chess Championship',
      country: 'International',
      flag: '♟️',
      pairs: [
        ['Magnus Carlsen', 'Hikaru Nakamura'],
        ['Ding Liren', 'Gukesh D'],
      ],
    },
    'ice-hockey': {
      leagueName: 'NHL Stanley Cup Ice Hockey',
      country: 'USA / Canada',
      flag: '🏒',
      pairs: [
        ['Florida Panthers', 'Edmonton Oilers'],
        ['New York Rangers', 'Dallas Stars'],
      ],
    },
    politics: {
      leagueName: 'Global Political Elections & Outrights',
      country: 'International',
      flag: '🗳️',
      pairs: [
        ['US Presidential Election Candidate A', 'Candidate B'],
        ['UK Prime Minister Election Candidate X', 'Candidate Y'],
      ],
    },
    specials: {
      leagueName: 'BetTOM Entertainment & Awards Specials',
      country: 'Featured',
      flag: '⭐',
      pairs: [
        ['Academy Awards Best Picture Winner', 'Nominee B'],
        ['BBC Sports Personality of the Year', 'Contender B'],
      ],
    },
    'premier-league': {
      leagueName: 'Premier League',
      country: 'England',
      flag: '🇬🇧',
      pairs: [
        ['Liverpool', 'Arsenal'],
        ['Chelsea', 'Tottenham Hotspur'],
        ['Manchester City', 'Newcastle United'],
        ['Manchester United', 'Aston Villa'],
      ],
    },
    laliga: {
      leagueName: 'LaLiga',
      country: 'Spain',
      flag: '🇪🇸',
      pairs: [
        ['Barcelona', 'Real Madrid'],
        ['Atletico Madrid', 'Sevilla'],
        ['Real Betis', 'Athletic Bilbao'],
        ['Villarreal', 'Valencia'],
      ],
    },
    'serie-a': {
      leagueName: 'Serie A',
      country: 'Italy',
      flag: '🇮🇹',
      pairs: [
        ['Inter Milan', 'AC Milan'],
        ['Juventus', 'Napoli'],
        ['AS Roma', 'Lazio'],
        ['Fiorentina', 'Atalanta'],
      ],
    },
    bundesliga: {
      leagueName: 'Bundesliga',
      country: 'Germany',
      flag: '🇩🇪',
      pairs: [
        ['Bayern Munich', 'Borussia Dortmund'],
        ['Bayer Leverkusen', 'RB Leipzig'],
        ['Eintracht Frankfurt', 'VfB Stuttgart'],
        ['Wolfsburg', 'Borussia Monchengladbach'],
      ],
    },
    handball: {
      leagueName: 'EHF Champions League Handball',
      country: 'Europe',
      flag: '🇪🇺',
      pairs: [
        ['FC Barcelona Handball', 'Telekom Veszprem'],
        ['THW Kiel', 'Paris Saint-Germain Handball'],
        ['Kielce', 'SC Magdeburg'],
      ],
    },
    'table-tennis': {
      leagueName: 'ITTF World Tour Table Tennis Championship',
      country: 'International',
      flag: '🌐',
      pairs: [
        ['Ma Long', 'Fan Zhendong'],
        ['Wang Chuqin', 'Tomokazu Harimoto'],
        ['Lin Shidong', 'Hugo Calderano'],
      ],
    },
    mma: {
      leagueName: 'UFC Championship Night',
      country: 'USA',
      flag: '🇺🇸',
      pairs: [
        ['Jon Jones', 'Stipe Miocic'],
        ['Islam Makhachev', 'Dustin Poirier'],
        ['Alex Pereira', 'Jiri Prochazka'],
      ],
    },
    boxing: {
      leagueName: 'WBA / WBC Heavyweight World Championship',
      country: 'International',
      flag: '🌐',
      pairs: [
        ['Tyson Fury', 'Oleksandr Usyk'],
        ['Anthony Joshua', 'Daniel Dubois'],
        ['Canelo Alvarez', 'Edgar Berlanga'],
      ],
    },
    snooker: {
      leagueName: 'World Snooker Championship',
      country: 'United Kingdom',
      flag: '🇬🇧',
      pairs: [
        ['Judd Trump', 'Ronnie O\'Sullivan'],
        ['Mark Selby', 'Kyren Wilson'],
        ['John Higgins', 'Mark Allen'],
      ],
    },
    cycling: {
      leagueName: 'Tour de France Championship',
      country: 'France',
      flag: '🇫🇷',
      pairs: [
        ['Tadej Pogacar', 'Jonas Vingegaard'],
        ['Remco Evenepoel', 'Primoz Roglic'],
      ],
    },
    'formula-1': {
      leagueName: 'Formula 1 Grand Prix Championship',
      country: 'International',
      flag: '🏎️',
      pairs: [
        ['Max Verstappen', 'Lando Norris'],
        ['Lewis Hamilton', 'Charles Leclerc'],
        ['Oscar Piastri', 'George Russell'],
      ],
    },
    'motor-racing': {
      leagueName: 'MotoGP World Championship',
      country: 'International',
      flag: '🏍️',
      pairs: [
        ['Francesco Bagnaia', 'Jorge Martin'],
        ['Marc Marquez', 'Enea Bastianini'],
      ],
    },
    golf: {
      leagueName: 'PGA Masters Tournament',
      country: 'USA',
      flag: '🇺🇸',
      pairs: [
        ['Scottie Scheffler', 'Rory McIlroy'],
        ['Jon Rahm', 'Xander Schauffele'],
        ['Viktor Hovland', 'Collin Morikawa'],
      ],
    },
    esports: {
      leagueName: 'CS2 Major & Valorant World Championship',
      country: 'International',
      flag: '🎮',
      pairs: [
        ['FaZe Clan', 'Natus Vincere'],
        ['T1 Esports', 'Gen.G'],
        ['Sentinels', 'Fnatic Esports'],
        ['G2 Esports', 'Team Vitality'],
      ],
    },
    floorball: {
      leagueName: 'Swedish Floorball Superleague',
      country: 'Sweden',
      flag: '🇸🇪',
      pairs: [
        ['Storvreta IBK', 'IBF Falun'],
        ['Pixbo Wallenstam', 'Vaxjo IBK'],
      ],
    },
    badminton: {
      leagueName: 'BWF World Tour Finals Badminton',
      country: 'International',
      flag: '🌐',
      pairs: [
        ['Viktor Axelsen', 'Shi Yu Qi'],
        ['Anders Antonsen', 'Chou Tien Chen'],
      ],
    },
    volleyball: {
      leagueName: 'FIVB Nations League Volleyball',
      country: 'International',
      flag: '🌐',
      pairs: [
        ['Poland Volleyball Team', 'Italy Volleyball Team'],
        ['Brazil Volleyball Team', 'USA Volleyball Team'],
      ],
    },
    'water-polo': {
      leagueName: 'LEN Champions League Water Polo',
      country: 'Europe',
      flag: '🇪🇺',
      pairs: [
        ['Pro Recco', 'Ferencvaros'],
        ['Novi Beograd', 'Olympiacos'],
      ],
    },
    'field-hockey': {
      leagueName: 'FIH Pro League Field Hockey',
      country: 'International',
      flag: '🌐',
      pairs: [
        ['Netherlands Hockey Team', 'Belgium Hockey Team'],
        ['Australia Hockey Team', 'India Hockey Team'],
      ],
    },
    futsal: {
      leagueName: 'UEFA Futsal Champions League',
      country: 'Europe',
      flag: '🇪🇺',
      pairs: [
        ['Sporting CP Futsal', 'Palma Futsal'],
        ['FC Barcelona Futsal', 'Benfica Futsal'],
      ],
    },
    'gaelic-football': {
      leagueName: 'All-Ireland Senior Football Championship',
      country: 'Ireland',
      flag: '🇮🇪',
      pairs: [
        ['Dublin GAA', 'Kerry GAA'],
        ['Galway GAA', 'Armagh GAA'],
      ],
    },
    hurling: {
      leagueName: 'All-Ireland Senior Hurling Championship',
      country: 'Ireland',
      flag: '🇮🇪',
      pairs: [
        ['Limerick GAA Hurling', 'Kilkenny GAA Hurling'],
        ['Cork GAA Hurling', 'Clare GAA Hurling'],
      ],
    },
    padel: {
      leagueName: 'World Padel Premier Tour',
      country: 'Spain',
      flag: '🇪🇸',
      pairs: [
        ['Coello / Tapia', 'Lebron / Galan'],
        ['Chingotto / Galan', 'Stupaczuk / Di Nenno'],
      ],
    },
    'rugby-league': {
      leagueName: 'NRL Premiership Rugby League',
      country: 'Australia',
      flag: '🇦🇺',
      pairs: [
        ['Penrith Panthers', 'Brisbane Broncos'],
        ['Melbourne Storm', 'Sydney Roosters'],
      ],
    },
    'rugby-union': {
      leagueName: 'Six Nations Championship Rugby',
      country: 'Europe',
      flag: '🇪🇺',
      pairs: [
        ['Ireland Rugby', 'France Rugby'],
        ['England Rugby', 'Scotland Rugby'],
      ],
    },
    sailing: {
      leagueName: "America's Cup Sailing Championship",
      country: 'International',
      flag: '⛵',
      pairs: [
        ['Emirates Team New Zealand', 'INEOS Britannia'],
        ['Luna Rossa Prada Pirelli', 'American Magic'],
      ],
    },
    speedway: {
      leagueName: 'FIM Speedway Grand Prix Championship',
      country: 'International',
      flag: '🏍️',
      pairs: [
        ['Bartosz Zmarzlik', 'Fredrik Lindgren'],
        ['Martin Vaculik', 'Robert Lambert'],
      ],
    },
    ENG: {
      leagueName: 'Premier League & Championship',
      country: 'England',
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      pairs: [
        ['Liverpool', 'Arsenal'],
        ['Chelsea', 'Tottenham Hotspur'],
        ['Manchester City', 'Newcastle United'],
        ['Manchester United', 'Aston Villa'],
      ],
    },
    EUR: {
      leagueName: 'UEFA Champions League',
      country: 'Europe',
      flag: '🇪🇺',
      pairs: [
        ['Real Madrid', 'Bayern Munich'],
        ['Manchester City', 'Paris Saint-Germain'],
        ['Inter Milan', 'Barcelona'],
      ],
    },
    INT: {
      leagueName: 'FIFA World Cup & International Matches',
      country: 'International',
      flag: '🌐',
      pairs: [
        ['England National Team', 'France National Team'],
        ['Argentina', 'Brazil'],
        ['Spain', 'Germany'],
      ],
    },
    SCO: {
      leagueName: 'Scottish Premiership',
      country: 'Scotland',
      flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
      pairs: [
        ['Celtic', 'Rangers'],
        ['Hearts', 'Hibernian'],
        ['Aberdeen', 'Dundee United'],
      ],
    },
    ESP: {
      leagueName: 'LaLiga EA Sports',
      country: 'Spain',
      flag: '🇪🇸',
      pairs: [
        ['Barcelona', 'Real Madrid'],
        ['Atletico Madrid', 'Sevilla'],
        ['Real Betis', 'Athletic Bilbao'],
        ['Villarreal', 'Valencia'],
      ],
    },
    GER: {
      leagueName: 'Bundesliga',
      country: 'Germany',
      flag: '🇩🇪',
      pairs: [
        ['Bayern Munich', 'Borussia Dortmund'],
        ['Bayer Leverkusen', 'RB Leipzig'],
        ['Eintracht Frankfurt', 'VfB Stuttgart'],
        ['Wolfsburg', 'Borussia Monchengladbach'],
      ],
    },
    ITA: {
      leagueName: 'Serie A Enilive',
      country: 'Italy',
      flag: '🇮🇹',
      pairs: [
        ['Inter Milan', 'AC Milan'],
        ['Juventus', 'Napoli'],
        ['AS Roma', 'Lazio'],
        ['Fiorentina', 'Atalanta'],
      ],
    },
    FRA: {
      leagueName: 'Ligue 1 McDonald\'s',
      country: 'France',
      flag: '🇫🇷',
      pairs: [
        ['Paris Saint-Germain', 'Marseille'],
        ['Monaco', 'Lille'],
        ['Lyon', 'Rennes'],
      ],
    },
    USA: {
      leagueName: 'MLS & Major American Sports',
      country: 'USA',
      flag: '🇺🇸',
      pairs: [
        ['Inter Miami CF', 'LA Galaxy'],
        ['Los Angeles Lakers', 'Boston Celtics'],
        ['New York Yankees', 'Los Angeles Dodgers'],
      ],
    },
    TUR: {
      leagueName: 'Süper Lig',
      country: 'Turkey',
      flag: '🇹🇷',
      pairs: [
        ['Galatasaray', 'Fenerbahce'],
        ['Besiktas', 'Trabzonspor'],
        ['Basaksehir', 'Adana Demirspor'],
      ],
    },
    BRA: {
      leagueName: 'Brasileirão Serie A',
      country: 'Brazil',
      flag: '🇧🇷',
      pairs: [
        ['Flamengo', 'Palmeiras'],
        ['Sao Paulo', 'Corinthians'],
        ['Fluminense', 'Botafogo'],
      ],
    },
    ARG: {
      leagueName: 'Liga Profesional',
      country: 'Argentina',
      flag: '🇦🇷',
      pairs: [
        ['Boca Juniors', 'River Plate'],
        ['Racing Club', 'Independiente'],
        ['San Lorenzo', 'Velez Sarsfield'],
      ],
    },
    NED: {
      leagueName: 'Eredivisie',
      country: 'Netherlands',
      flag: '🇳🇱',
      pairs: [
        ['Ajax', 'PSV Eindhoven'],
        ['Feyenoord', 'AZ Alkmaar'],
      ],
    },
    POR: {
      leagueName: 'Primeira Liga',
      country: 'Portugal',
      flag: '🇵🇹',
      pairs: [
        ['Benfica', 'FC Porto'],
        ['Sporting CP', 'Braga'],
      ],
    },
    IND: {
      leagueName: 'Indian Super League / IPL',
      country: 'India',
      flag: '🇮🇳',
      pairs: [
        ['India', 'Australia'],
        ['Mumbai Indians', 'Chennai Super Kings'],
        ['Kolkata Knight Riders', 'Royal Challengers Bengaluru'],
      ],
    },
    AUS: {
      leagueName: 'A-League',
      country: 'Australia',
      flag: '🇦🇺',
      pairs: [
        ['Sydney FC', 'Melbourne Victory'],
        ['Central Coast Mariners', 'Brisbane Roar'],
      ],
    },
    'the-hundred': {
      leagueName: 'The Hundred',
      country: 'United Kingdom',
      flag: '🇬🇧',
      pairs: [
        ['Manchester Super Giants', 'Welsh Fire'],
        ['London Spirit', 'MI London'],
        ['Trent Rockets', 'Birmingham Phoenix'],
        ['Sunrisers Leeds', 'Oval Invincibles'],
      ],
    },
    'the-hundred-women': {
      leagueName: 'The Hundred Women',
      country: 'United Kingdom',
      flag: '🇬🇧',
      pairs: [
        ['Manchester Super Giants Women', 'Welsh Fire Women'],
        ['London Spirit Women', 'MI London Women'],
        ['Trent Rockets Women', 'Birmingham Phoenix Women'],
      ],
    },
    'uefa-super-cup': {
      leagueName: 'UEFA Super Cup',
      country: 'Europe',
      flag: '🇪🇺',
      pairs: [['Real Madrid', 'Atalanta']],
    },
    'community-shield': {
      leagueName: 'Community Shield',
      country: 'England',
      flag: '🇬🇧',
      pairs: [['Manchester City', 'Manchester United']],
    },
    'efl-cup': {
      leagueName: 'EFL Cup',
      country: 'England',
      flag: '🇬🇧',
      pairs: [
        ['Leeds United', 'Everton'],
        ['Leicester City', 'West Ham United'],
      ],
    },
    championship: {
      leagueName: 'Championship',
      country: 'England',
      flag: '🇬🇧',
      pairs: [
        ['Sunderland', 'Coventry City'],
        ['Middlesbrough', 'Norwich City'],
      ],
    },
    premiership: {
      leagueName: 'Premiership',
      country: 'Scotland',
      flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
      pairs: [
        ['Celtic', 'Rangers'],
        ['Hearts', 'Hibernian'],
      ],
    },
    nba: {
      leagueName: 'NBA',
      country: 'USA',
      flag: '🇺🇸',
      pairs: [
        ['Los Angeles Lakers', 'Boston Celtics'],
        ['Golden State Warriors', 'Chicago Bulls'],
        ['Denver Nuggets', 'Miami Heat'],
        ['Milwaukee Bucks', 'Phoenix Suns'],
      ],
    },
    mlb: {
      leagueName: 'MLB',
      country: 'USA',
      flag: '🇺🇸',
      pairs: [
        ['New York Yankees', 'Los Angeles Dodgers'],
        ['Houston Astros', 'Atlanta Braves'],
      ],
    },
  };

function getSeededNum(seedStr: string): number {
  let hash = 0;
  for (let i = 0; i < seedStr.length; i++) {
    hash = (hash << 5) - hash + seedStr.charCodeAt(i);
    hash |= 0;
  }
  const x = Math.sin(Math.abs(hash) + 1) * 10000;
  return Math.abs(x - Math.floor(x));
}

// Helper to generate dynamic mock match specifically for a selected competition/category, sport, or region
export function generateMockMatchesForCategory(
  category: string,
  sport: SportType,
  region: string,
  timeFilter: TimeFilterValue | 'all',
  count: number = 4
): Match[] {
  const isLive = timeFilter === 'live';
  const regionObj = REGION_FILTERS.find((r) => r.code === region || r.id === region) || REGION_FILTERS[0];

  const key = category || sport || region;
  const config = categoryConfigs[key] || categoryConfigs[category] || categoryConfigs[sport] || categoryConfigs[region] || {
    leagueName: `${regionObj.name || region || 'World'} ${sport ? sport.toUpperCase() : 'Pro'} Championship`,
    country: regionObj.name || region || 'International',
    flag: '🌐',
    pairs: [
      [`${regionObj.name || 'Pro'} Star Champion A`, `Rival Player B`],
      [`${regionObj.name || 'Pro'} Team C`, `Challenger D`],
      [`National Squad X`, `Pro Club Y`],
    ],
  };

  return config.pairs.map((pair, index) => {
    const id = `cat-${key}-${timeFilter}-${index + 1}`;
    const r1 = getSeededNum(id + '-score1');
    const r2 = getSeededNum(id + '-score2');
    const r3 = getSeededNum(id + '-odds1');
    const r4 = getSeededNum(id + '-odds2');
    const r5 = getSeededNum(id + '-odds3');
    const r6 = getSeededNum(id + '-clock');

    const homeScore = isLive ? Math.floor(r1 * 3) : 0;
    const awayScore = isLive ? Math.floor(r2 * 3) : 0;
    const homeOdds = Number((1.3 + r3 * 2.2).toFixed(2));
    const awayOdds = Number((1.8 + r4 * 3.5).toFixed(2));
    const drawOdds = Number((3.1 + r5 * 1.5).toFixed(2));

    const startTimeFormatted = isLive
      ? 'LIVE'
      : timeFilter === '60min'
      ? 'In 45 min'
      : timeFilter === '2hrs'
      ? 'In 1 hr 15 min'
      : timeFilter === 'tomorrow'
      ? 'Tomorrow 18:00'
      : timeFilter === '7days'
      ? 'In 3 Days 20:00'
      : 'Today 20:45';

    return {
      id,
      sport,
      leagueId: category || key,
      leagueName: config.leagueName,
      country: config.country,
      countryFlag: config.flag,
      isLive,
      liveClock: isLive ? `${Math.floor(r6 * 75 + 10)}'` : undefined,
      liveStatus: isLive ? '2nd Half' : undefined,
      startTime: startTimeFormatted,
      statusText: startTimeFormatted,
      homeTeam: {
        id: `ht-${id}`,
        name: pair[0],
        shortName: pair[0].substring(0, 3).toUpperCase(),
        score: homeScore,
      },
      awayTeam: {
        id: `at-${id}`,
        name: pair[1],
        shortName: pair[1].substring(0, 3).toUpperCase(),
        score: awayScore,
      },
      markets: [
        {
          id: `mkt-1x2-${id}`,
          name: sport === 'basketball' || sport === 'tennis' || sport === 'mma' || sport === 'boxing' || sport === 'snooker' ? 'Match Winner' : '1X2',
          category: 'main',
          outcomes: [
            { id: `out-h-${id}`, name: pair[0], odds: homeOdds },
            { id: `out-d-${id}`, name: 'Draw', odds: drawOdds },
            { id: `out-a-${id}`, name: pair[1], odds: awayOdds },
          ],
        },
        {
          id: `mkt-dc-${id}`,
          name: 'Double Chance',
          category: 'main',
          outcomes: [
            { id: `out-dc1-${id}`, name: '1X', odds: 1.25 },
            { id: `out-dc2-${id}`, name: '12', odds: 1.30 },
            { id: `out-dc3-${id}`, name: 'X2', odds: 1.50 },
          ],
        },
        {
          id: `mkt-btts-${id}`,
          name: 'Both Teams To Score',
          category: 'props',
          outcomes: [
            { id: `out-btts-y-${id}`, name: 'Yes', odds: 1.80 },
            { id: `out-btts-n-${id}`, name: 'No', odds: 1.95 },
          ],
        },
        {
          id: `mkt-totals-${id}`,
          name: sport === 'basketball' ? 'Total Points 214.5' : 'Over/Under 2.5 Goals',
          category: 'totals',
          outcomes: [
            { id: `out-ou-o-${id}`, name: 'Over 2.5', odds: 1.75 },
            { id: `out-ou-u-${id}`, name: 'Under 2.5', odds: 2.05 },
          ],
        },
      ],
    };
  });
}

export function filterSportsMatches(
  matches: Match[] = [],
  sport: SportType = 'football',
  category: string | null = null,
  region: string = 'Popular',
  timeFilter: TimeFilterValue | 'all' = 'all',
  searchQuery: string = ''
): Match[] {
  let filtered: Match[] = [];

  const safeCategory = category || '';
  const safeSport = sport || 'football';

  const isSpecificCategory = safeCategory && safeCategory !== 'all' && safeCategory !== 'football' && safeCategory !== 'topBets';

  if (isSpecificCategory) {
    // 1. Try to find static matches for this specific category
    filtered = (matches || []).filter((m) => {
      if (!m) return false;
      const matchCat = (m.categoryId || m.leagueId || '').toLowerCase();
      const cat = safeCategory.toLowerCase();
      return matchCat === cat || matchCat.includes(cat) || (m.leagueName || '').toLowerCase().includes(cat.replace(/-/g, ' '));
    });

    // 2. If no static matches exist for this category, generate matches ONLY for this category!
    if (filtered.length === 0) {
      filtered = generateMockMatchesForCategory(safeCategory, safeSport, region, timeFilter, 4);
    }
  } else {
    // Filter strictly by sport & region
    filtered = (matches || []).filter((m) => {
      if (!m) return false;
      if (safeSport === 'a-z-sports' || safeSport === 'price-boost') return true;
      const mSport = (m.sport || '').toLowerCase();
      const sSport = safeSport.toLowerCase();
      return mSport === sSport || mSport.includes(sSport);
    });

    if (region && region !== 'Popular' && region !== 'All' && region !== 'topBets') {
      filtered = filtered.filter((m) => {
        if (!m || !m.country) return false;
        const c = m.country.toLowerCase();
        const r = region.toLowerCase();
        return c.includes(r);
      });
    }

    if (filtered.length === 0) {
      filtered = generateMockMatchesForCategory(region || safeCategory || safeSport, safeSport, region, timeFilter, 4);
    }
  }

  // Filter by time filter
  if (timeFilter === 'live') {
    filtered = filtered.filter((m) => m?.isLive);
  }

  // Filter by search query if present
  if (searchQuery && searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(
      (m) =>
        m &&
        ((m.homeTeam?.name || '').toLowerCase().includes(q) ||
          (m.awayTeam?.name || '').toLowerCase().includes(q) ||
          (m.leagueName || '').toLowerCase().includes(q) ||
          (m.country || '').toLowerCase().includes(q))
    );
  }

  return filtered;
}
