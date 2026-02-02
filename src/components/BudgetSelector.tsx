'use client';

import { BudgetLevel } from '@/types';
import { useLanguage } from '@/lib/LanguageContext';

interface BudgetSelectorProps {
  selectedBudget: BudgetLevel;
  onBudgetChange: (budget: BudgetLevel) => void;
}

const BUDGET_ICONS: Record<BudgetLevel, string> = {
  free: '\ud83c\udd93',
  cheap: '\ud83d\udcb0',
  medium: '\ud83d\udcb0\ud83d\udcb0',
  any: '\ud83c\udfaf',
};

const BUDGET_BG: Record<BudgetLevel, string> = {
  free: 'bg-emerald-50',
  cheap: 'bg-amber-50',
  medium: 'bg-orange-50',
  any: 'bg-violet-50',
};

const BUDGET_SELECTED_BG: Record<BudgetLevel, string> = {
  free: 'bg-emerald-100 ring-2 ring-emerald-400',
  cheap: 'bg-amber-100 ring-2 ring-amber-400',
  medium: 'bg-orange-100 ring-2 ring-orange-400',
  any: 'bg-violet-100 ring-2 ring-primary-400',
};

const BUDGET_LABEL_KEYS: Record<BudgetLevel, string> = {
  free: 'budgetFree',
  cheap: 'budgetCheap',
  medium: 'budgetMedium',
  any: 'budgetAny',
};

export default function BudgetSelector({ selectedBudget, onBudgetChange }: BudgetSelectorProps) {
  const { t } = useLanguage();
  const budgets: BudgetLevel[] = ['free', 'cheap', 'medium', 'any'];

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-3">
        <span className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-lg">💶</span>
        {t('budget') as string}
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {budgets.map((budget) => (
          <button
            key={budget}
            onClick={() => onBudgetChange(budget)}
            className={`p-4 rounded-xl text-left transition-all duration-200 min-h-[44px] ${
              selectedBudget === budget
                ? BUDGET_SELECTED_BG[budget]
                : `${BUDGET_BG[budget]} hover:shadow-sm`
            }`}
          >
            <span className="text-2xl">{BUDGET_ICONS[budget]}</span>
            <p className={`text-sm font-medium mt-1 ${
              selectedBudget === budget ? 'text-gray-800' : 'text-gray-700'
            }`}>
              {t(BUDGET_LABEL_KEYS[budget] as Parameters<typeof t>[0]) as string}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
