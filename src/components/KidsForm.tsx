'use client';

import { Child } from '@/types';
import { useLanguage } from '@/lib/LanguageContext';

interface KidsFormProps {
  children: Child[];
  onChildrenChange: (children: Child[]) => void;
}

const CHILD_BORDER_COLORS = [
  'border-l-violet-400',
  'border-l-orange-400',
  'border-l-emerald-400',
  'border-l-pink-400',
  'border-l-sky-400',
  'border-l-amber-400',
];

export default function KidsForm({ children, onChildrenChange }: KidsFormProps) {
  const { t } = useLanguage();

  function addChild() {
    if (children.length >= 6) return;

    const newChild: Child = {
      id: `child-${Date.now()}`,
      age: 5,
      gender: 'any',
    };

    onChildrenChange([...children, newChild]);
  }

  function removeChild(id: string) {
    if (children.length <= 1) return;
    onChildrenChange(children.filter(c => c.id !== id));
  }

  function updateChild(id: string, updates: Partial<Child>) {
    onChildrenChange(
      children.map(c => (c.id === id ? { ...c, ...updates } : c))
    );
  }

  const childCountFn = t('childCount') as (count: number) => string;
  const childLabelFn = t('childLabel') as (index: number) => string;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-pink-100 flex items-center justify-center text-lg">👶</span>
          {t('children') as string}
        </h2>
        <span className="text-sm text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
          {childCountFn(children.length)}
        </span>
      </div>

      <div className="space-y-3">
        {children.map((child, index) => (
          <div
            key={child.id}
            className={`p-4 bg-gray-50 rounded-xl space-y-3 border-l-4 ${CHILD_BORDER_COLORS[index % CHILD_BORDER_COLORS.length]}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                {childLabelFn(index + 1)}
              </span>
              {children.length > 1 && (
                <button
                  onClick={() => removeChild(child.id)}
                  className="text-sm text-red-500 hover:text-red-700 min-h-[44px] flex items-center"
                >
                  {t('remove') as string}
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">{t('age') as string}</label>
                <select
                  value={child.age}
                  onChange={(e) => updateChild(child.id, { age: parseInt(e.target.value) })}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white min-h-[44px]"
                >
                  {Array.from({ length: 18 }, (_, i) => (
                    <option key={i} value={i}>
                      {i === 0
                        ? (t('underOneYear') as string)
                        : `${i} ${i === 1 ? (t('yearSingular') as string) : (t('yearPlural') as string)}`}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">{t('gender') as string}</label>
                <select
                  value={child.gender}
                  onChange={(e) => updateChild(child.id, { gender: e.target.value as Child['gender'] })}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white min-h-[44px]"
                >
                  <option value="any">{t('genderAny') as string}</option>
                  <option value="boy">{t('genderBoy') as string}</option>
                  <option value="girl">{t('genderGirl') as string}</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>

      {children.length < 6 && (
        <button
          onClick={addChild}
          className="mt-4 w-full py-3 border-2 border-dashed border-primary-300 rounded-xl text-primary-600 hover:border-primary-500 hover:bg-primary-50 transition-all flex items-center justify-center gap-2 min-h-[44px] font-medium"
        >
          <span className="text-lg">+</span>
          <span>{t('addChild') as string}</span>
        </button>
      )}
    </div>
  );
}
