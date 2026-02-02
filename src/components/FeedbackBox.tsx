'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FeedbackBox() {
  const { t } = useLanguage();
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  if (!formId) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim() || status === 'sending') return;

    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      if (res.ok) {
        setStatus('sent');
        setMessage('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('idle');
      }
    } catch {
      setStatus('idle');
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 max-w-xl mx-auto">
      {status === 'sent' ? (
        <p className="text-center text-green-600 font-medium py-2">
          {t('feedbackThanks') as string}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t('feedbackPlaceholder') as string}
            rows={2}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none"
          />
          <button
            type="submit"
            disabled={!message.trim() || status === 'sending'}
            className="self-end px-5 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-primary-600 to-pink-600 text-white hover:from-primary-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all"
          >
            {t('feedbackSend') as string}
          </button>
        </form>
      )}
    </div>
  );
}
