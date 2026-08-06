'use client';

import React, { useState } from 'react';
import { HelpCircle, MessageSquare, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does live cash out work?',
      a: 'Live Cash Out allows you to lock in a profit or minimize losses before an event finishes. Cash Out availability updates in real time based on current match scores and odds.',
    },
    {
      q: 'When are basketball bets graded?',
      a: 'NBA bets are officially graded using NBA.com statistics. Player props stand as long as the player steps onto the court during official match minutes.',
    },
    {
      q: 'What deposit methods are accepted?',
      a: 'We accept Visa, Mastercard, PayPal, Skrill, Neteller, Apple Pay, and Bitcoin/Crypto with instant processing.',
    },
    {
      q: 'How long do withdrawals take?',
      a: 'Faster Payments and e-wallet withdrawals are processed within 1-2 hours. Standard card withdrawals take 1-2 business days.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-6">
      {/* Banner */}
      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-black text-bettom-text flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-bettom-accent" />
            <span>Customer Support & FAQs</span>
          </h1>
          <p className="text-xs text-bettom-muted mt-1">Our live support team is online 24/7 to assist with your wagers.</p>
        </div>

        <button className="flex items-center space-x-2 bg-bettom-accent text-bettom-bg font-extrabold text-xs px-5 py-3 rounded-xl shadow-lg shadow-bettom-accent/20 uppercase tracking-wider shrink-0">
          <MessageSquare className="w-4 h-4" />
          <span>START LIVE CHAT</span>
        </button>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-6 shadow-xl space-y-3">
        <h2 className="font-extrabold text-sm text-bettom-text uppercase tracking-wider mb-4">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-bettom-border rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full flex items-center justify-between p-4 bg-bettom-header text-left font-bold text-xs text-bettom-text hover:text-bettom-accent transition-colors"
            >
              <span>{faq.q}</span>
              {openFaq === idx ? <ChevronUp className="w-4 h-4 text-bettom-accent" /> : <ChevronDown className="w-4 h-4 text-bettom-muted" />}
            </button>
            {openFaq === idx && (
              <div className="p-4 bg-bettom-surface text-xs text-bettom-muted leading-relaxed border-t border-bettom-border">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
