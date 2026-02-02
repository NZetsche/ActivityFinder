'use client';

import { useRef } from 'react';
import { TimeOfDay } from '@/types';
import { useLanguage } from '@/lib/LanguageContext';

interface DateTimePickerProps {
  selectedDate: Date;
  selectedTime: TimeOfDay;
  onDateChange: (date: Date) => void;
  onTimeChange: (time: TimeOfDay) => void;
}

const TIME_ICONS: Record<TimeOfDay, string> = {
  morning: '\u2600\ufe0f',
  afternoon: '\u26c5',
  allDay: '\ud83d\udd50',
};

export default function DateTimePicker({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}: DateTimePickerProps) {
  const { t, locale } = useLanguage();
  const dateInputRef = useRef<HTMLInputElement>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const isToday = selectedDate.toDateString() === today.toDateString();
  const isTomorrow = selectedDate.toDateString() === tomorrow.toDateString();
  const isCustom = !isToday && !isTomorrow;

  const customLabel = isCustom
    ? selectedDate.toLocaleDateString(locale, { weekday: 'short', day: 'numeric', month: 'short' })
    : null;

  const minDate = new Date(today);
  minDate.setDate(minDate.getDate() + 2);
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 90);

  function toInputValue(date: Date) {
    return date.toISOString().split('T')[0];
  }

  function handleCalendarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    if (val) {
      const [year, month, day] = val.split('-').map(Number);
      const date = new Date(year, month - 1, day);
      date.setHours(0, 0, 0, 0);
      onDateChange(date);
    }
  }

  function openCalendar() {
    dateInputRef.current?.showPicker();
  }

  const timeOptions: { value: TimeOfDay; labelKey: 'timeMorning' | 'timeAfternoon' | 'timeAllDay' }[] = [
    { value: 'morning', labelKey: 'timeMorning' },
    { value: 'afternoon', labelKey: 'timeAfternoon' },
    { value: 'allDay', labelKey: 'timeAllDay' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-3">
        <span className="w-9 h-9 rounded-xl bg-accent-100 flex items-center justify-center text-lg">📅</span>
        {t('when') as string}
      </h2>

      <div className="space-y-4">
        {/* Date selection */}
        <div>
          <label className="block text-sm text-gray-500 mb-2">{t('date') as string}</label>
          <div className="flex gap-2">
            <button
              onClick={() => onDateChange(today)}
              className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 min-h-[44px] ${
                isToday
                  ? 'bg-gradient-to-r from-primary-500 to-pink-500 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-violet-100'
              }`}
            >
              {t('today') as string}
            </button>
            <button
              onClick={() => onDateChange(tomorrow)}
              className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 min-h-[44px] ${
                isTomorrow
                  ? 'bg-gradient-to-r from-primary-500 to-pink-500 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-violet-100'
              }`}
            >
              {t('tomorrow') as string}
            </button>
            <button
              onClick={openCalendar}
              className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 min-h-[44px] flex items-center justify-center gap-1.5 ${
                isCustom
                  ? 'bg-gradient-to-r from-primary-500 to-pink-500 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-violet-100'
              }`}
            >
              <span>📅</span>
              {customLabel || (t('chooseDate') as string)}
            </button>
          </div>
          <input
            ref={dateInputRef}
            type="date"
            className="sr-only"
            min={toInputValue(minDate)}
            max={toInputValue(maxDate)}
            value={isCustom ? toInputValue(selectedDate) : ''}
            onChange={handleCalendarChange}
            tabIndex={-1}
          />
        </div>

        {/* Time of day */}
        <div>
          <label className="block text-sm text-gray-500 mb-2">{t('timeOfDay') as string}</label>
          <div className="grid grid-cols-3 gap-2">
            {timeOptions.map(({ value, labelKey }) => (
              <button
                key={value}
                onClick={() => onTimeChange(value)}
                className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1.5 min-h-[44px] ${
                  selectedTime === value
                    ? 'bg-gradient-to-r from-primary-500 to-pink-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-violet-100'
                }`}
              >
                <span>{TIME_ICONS[value]}</span>
                {t(labelKey) as string}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
