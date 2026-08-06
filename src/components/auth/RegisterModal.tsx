'use client';

import React, { useState } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { Trophy, X, Mail, Lock, User, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const RegisterModal: React.FC = () => {
  const { isRegisterModalOpen, closeRegisterModal, register, openLoginModal } = useAuthStore();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isRegisterModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && email) {
      register(username, email);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-bettom-card border border-bettom-border rounded-2xl p-6 max-w-md w-full shadow-2xl relative text-bettom-text"
        >
          <button
            onClick={closeRegisterModal}
            className="absolute top-4 right-4 p-1.5 rounded-xl bg-bettom-surface hover:bg-bettom-hover text-bettom-muted hover:text-bettom-text transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center space-x-2.5 mb-6">
            <div className="w-10 h-10 rounded-xl bg-bettom-accent flex items-center justify-center text-bettom-bg font-black">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-extrabold text-lg">Create Bettom Account</h2>
              <p className="text-xs text-bettom-muted">Join the premier live sports betting platform</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-bettom-muted mb-1">Username</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-bettom-subtle" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="AlexRider99"
                  className="w-full bg-bettom-header border border-bettom-border focus:border-bettom-accent rounded-xl pl-9 pr-3 py-2.5 text-xs text-bettom-text focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-bettom-muted mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-bettom-subtle" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex.rider@bettom.com"
                  className="w-full bg-bettom-header border border-bettom-border focus:border-bettom-accent rounded-xl pl-9 pr-3 py-2.5 text-xs text-bettom-text focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-bettom-muted mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-bettom-subtle" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-bettom-header border border-bettom-border focus:border-bettom-accent rounded-xl pl-9 pr-3 py-2.5 text-xs text-bettom-text focus:outline-none transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-bettom-accent hover:bg-bettom-accent-hover text-bettom-bg font-black text-xs rounded-xl shadow-lg shadow-bettom-accent/20 transition-all uppercase tracking-wider flex items-center justify-center space-x-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>CREATE ACCOUNT & CLAIM BONUS</span>
            </button>
          </form>

          <div className="mt-5 text-center text-xs text-bettom-muted border-t border-bettom-border pt-4">
            Already registered?{' '}
            <button
              onClick={() => {
                closeRegisterModal();
                openLoginModal();
              }}
              className="text-bettom-accent font-bold hover:underline"
            >
              Log In
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
