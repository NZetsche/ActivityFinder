'use client';

import { useState, useEffect } from 'react';
import { Activity } from '@/types';
import { useLanguage } from '@/lib/LanguageContext';
import ActivityCard from './ActivityCard';

const INITIAL_COUNT = 6;
const LOADING_MESSAGE_INTERVAL = 3000;

interface ResultsListProps {
  activities: Activity[];
  summary: string;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
}

export default function ResultsList({
  activities,
  summary,
  isLoading,
  error,
  onRetry,
}: ResultsListProps) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [loadingMsgIndex, setLoadingMsgIndex] = useState(0);

  // Reset expanded when activities change (new search)
  useEffect(() => {
    setExpanded(false);
  }, [activities]);

  // Cycle through whimsical loading messages
  useEffect(() => {
    if (!isLoading) {
      setLoadingMsgIndex(0);
      return;
    }
    const messages = t('loadingMessages') as unknown as string[];
    setLoadingMsgIndex(Math.floor(Math.random() * messages.length));
    const interval = setInterval(() => {
      setLoadingMsgIndex((prev) => (prev + 1) % messages.length);
    }, LOADING_MESSAGE_INTERVAL);
    return () => clearInterval(interval);
  }, [isLoading, t]);

  if (isLoading) {
    const messages = t('loadingMessages') as unknown as string[];
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-lg">✨</span>
          {t('recommendations') as string}
        </h2>

        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden animate-warm-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="h-40 bg-gradient-to-r from-violet-100 via-pink-50 to-orange-100" />
              <div className="p-5 space-y-3">
                <div className="h-5 bg-gray-200 rounded-full w-3/4" />
                <div className="h-4 bg-gray-100 rounded-full w-full" />
                <div className="h-4 bg-gray-100 rounded-full w-2/3" />
                <div className="flex gap-2 mt-2">
                  <div className="h-6 w-16 bg-violet-100 rounded-full" />
                  <div className="h-6 w-20 bg-orange-100 rounded-full" />
                  <div className="h-6 w-14 bg-emerald-100 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-4">
          <p className="text-gray-700 font-medium text-lg transition-opacity duration-500">
            {messages[loadingMsgIndex]}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            {t('searchingSubtext') as string}
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-lg">✨</span>
          {t('recommendations') as string}
        </h2>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <p className="text-red-800 mb-4">{error}</p>
          <button
            onClick={onRetry}
            className="px-6 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors min-h-[44px]"
          >
            {t('retry') as string}
          </button>
        </div>
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-lg">✨</span>
          {t('recommendations') as string}
        </h2>

        <div className="bg-gradient-to-br from-violet-50 to-orange-50 rounded-2xl p-10 text-center">
          <span className="text-6xl mb-4 block animate-float">🔍</span>
          <p className="text-gray-700 font-medium text-lg">
            {t('readyForAdventure') as string}
          </p>
          <p className="text-gray-500 mt-2">
            {t('fillInDetails') as string}
          </p>
        </div>
      </div>
    );
  }

  const activitiesCountFn = t('activitiesCount') as (count: number) => string;
  const visibleActivities = expanded ? activities : activities.slice(0, INITIAL_COUNT);
  const hasMore = activities.length > INITIAL_COUNT && !expanded;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
        <span className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-lg">✨</span>
        {t('recommendations') as string}
        <span className="text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-pink-500 px-3 py-1 rounded-full">
          {activitiesCountFn(activities.length)}
        </span>
      </h2>

      {summary && (
        <div className="bg-white rounded-2xl p-4 border-l-4 border-primary-400 shadow-sm">
          <p className="text-gray-700">{summary}</p>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 grid-cols-1">
        {visibleActivities.map((activity, index) => (
          <div
            key={activity.id}
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ActivityCard activity={activity} />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="text-center pt-2">
          <button
            onClick={() => setExpanded(true)}
            className="px-8 py-3 bg-white border-2 border-primary-300 text-primary-700 font-semibold rounded-2xl hover:bg-primary-50 hover:border-primary-400 transition-all shadow-sm hover:shadow-md min-h-[44px]"
          >
            {t('showMore') as string} ({activities.length - INITIAL_COUNT})
          </button>
        </div>
      )}
    </div>
  );
}
