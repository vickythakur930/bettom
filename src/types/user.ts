export interface UserProfile {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  balance: number;
  currency: string;
  avatar?: string;
  isVerified: boolean;
  kycStatus: 'verified' | 'pending' | 'unverified';
  notificationsCount: number;
}

export interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'bet_wager' | 'bet_payout' | 'cash_out';
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  method?: string;
  referenceId?: string;
}
