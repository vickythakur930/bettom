import { create } from 'zustand';
import { Transaction, UserProfile } from '@/types/user';

interface AuthState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  transactions: Transaction[];
  isLoginModalOpen: boolean;
  isRegisterModalOpen: boolean;
  
  // Actions
  login: (email: string) => void;
  register: (username: string, email: string) => void;
  logout: () => void;
  deposit: (amount: number, method: string) => void;
  withdraw: (amount: number, method: string) => boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openRegisterModal: () => void;
  closeRegisterModal: () => void;
}

const mockUser: UserProfile = {
  id: 'usr-9021',
  username: 'AlexRider99',
  email: 'alex.rider@bettom.com',
  firstName: 'Alex',
  lastName: 'Rider',
  balance: 1450.75,
  currency: 'GBP',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  isVerified: true,
  kycStatus: 'verified',
  notificationsCount: 3,
};

const mockTransactions: Transaction[] = [
  {
    id: 'tx-1001',
    type: 'deposit',
    amount: 500,
    date: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: 'completed',
    method: 'Visa **** 4920',
    referenceId: 'DEP-994182',
  },
  {
    id: 'tx-1002',
    type: 'bet_wager',
    amount: 25,
    date: new Date(Date.now() - 3600000 * 3).toISOString(),
    status: 'completed',
    referenceId: 'BET-8849120',
  },
];

export const useAuthStore = create<AuthState>((set, get) => ({
  user: mockUser,
  isAuthenticated: true,
  transactions: mockTransactions,
  isLoginModalOpen: false,
  isRegisterModalOpen: false,

  login: (email) => {
    set({
      user: {
        ...mockUser,
        email,
      },
      isAuthenticated: true,
      isLoginModalOpen: false,
    });
  },

  register: (username, email) => {
    set({
      user: {
        ...mockUser,
        username,
        email,
      },
      isAuthenticated: true,
      isRegisterModalOpen: false,
    });
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  deposit: (amount, method) => {
    const user = get().user;
    if (!user) return;

    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      type: 'deposit',
      amount,
      date: new Date().toISOString(),
      status: 'completed',
      method,
      referenceId: `DEP-${Math.floor(100000 + Math.random() * 900000)}`,
    };

    set({
      user: {
        ...user,
        balance: user.balance + amount,
      },
      transactions: [newTx, ...get().transactions],
    });
  },

  withdraw: (amount, method) => {
    const user = get().user;
    if (!user || user.balance < amount) return false;

    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      type: 'withdrawal',
      amount,
      date: new Date().toISOString(),
      status: 'pending',
      method,
      referenceId: `WTH-${Math.floor(100000 + Math.random() * 900000)}`,
    };

    set({
      user: {
        ...user,
        balance: user.balance - amount,
      },
      transactions: [newTx, ...get().transactions],
    });
    return true;
  },

  openLoginModal: () => set({ isLoginModalOpen: true }),
  closeLoginModal: () => set({ isLoginModalOpen: false }),
  openRegisterModal: () => set({ isRegisterModalOpen: true }),
  closeRegisterModal: () => set({ isRegisterModalOpen: false }),
}));
