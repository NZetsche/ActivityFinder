'use client';

import { Activity } from '@/types';
import { useLanguage } from '@/lib/LanguageContext';

interface ActivityCardProps {
  activity: Activity;
}

const TAG_COLORS = [
  'tag-color-0',
  'tag-color-1',
  'tag-color-2',
  'tag-color-3',
  'tag-color-4',
  'tag-color-5',
];

export default function ActivityCard({ activity }: ActivityCardProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      {activity.imageUrl && (
        <div className="h-48 bg-gray-200 relative overflow-hidden rounded-t-2xl">
          <img
            src={activity.imageUrl}
            alt={activity.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
          {activity.isIndoor && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-primary-600 to-pink-500 text-white text-xs font-medium rounded-full">
              {t('indoor') as string}
            </span>
          )}
        </div>
      )}

      {!activity.imageUrl && activity.isIndoor && (
        <div className="h-2 bg-gradient-to-r from-primary-600 to-pink-500 rounded-t-2xl" />
      )}

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold text-gray-800 leading-tight">
            {activity.name}
          </h3>
          <span className="text-sm font-semibold text-primary-600 whitespace-nowrap bg-primary-50 px-2.5 py-0.5 rounded-full">
            {activity.priceRange}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {activity.description}
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <span>📍</span>
            <span className="truncate">{activity.address}</span>
          </div>

          {activity.distance && (
            <div className="flex items-center gap-2 text-gray-500">
              <span>🚗</span>
              <span>{activity.distance}</span>
            </div>
          )}

          {activity.openingHours && (
            <div className="flex items-center gap-2 text-gray-500">
              <span>🕐</span>
              <span>{activity.openingHours}</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-gray-500">
            <span>👶</span>
            <span>{t('suitableFor') as string} {activity.ageRange}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {activity.tags.slice(0, 4).map((tag, index) => (
            <span
              key={tag}
              className={`px-2.5 py-1 text-xs font-medium rounded-full ${TAG_COLORS[index % TAG_COLORS.length]}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 p-3 bg-success-50 rounded-xl border border-success-100">
          <p className="text-sm text-success-800">
            <span className="font-medium">💡 {t('whyRecommended') as string}</span> {activity.reasoning}
          </p>
        </div>

        <div className="flex gap-2 mt-4">
          <a
            href={activity.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 bg-gradient-to-r from-primary-600 to-pink-600 text-white text-center rounded-xl hover:from-primary-700 hover:to-pink-700 transition-all text-sm font-medium min-h-[44px] flex items-center justify-center"
          >
            {t('planRoute') as string}
          </a>
          {activity.websiteUrl && (
            <a
              href={activity.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium min-h-[44px] flex items-center justify-center"
            >
              {t('website') as string}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
