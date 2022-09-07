import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import {
  add,
  format,
  getDay,
  isSameDay,
  isSameMonth,
  isToday,
  startOfToday,
  sub,
} from 'date-fns';
import { getDaysOfMonth } from 'utils';
import { AnimatePresence, motion } from 'framer-motion';
/* <<--------------------------------------------------------->> */
type update_months_params = '+1' | '-1';
interface calendar_props {
  disabled?: boolean;
}
/* <<--------------------------------------------------------->> */
const HEADER_DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
/* <<--------------------------------------------------------->> */

const CalendarFns = (props: calendar_props) => {
  const [currentMonth, setCurrentMonth] = useState<number | Date>(startOfToday());
  const [selectedDay, setSelectedDay] = useState<number | Date>(startOfToday());
  const [currentMonthDays, setCurrentMonthDays] = useState<Array<any>>(() =>
    getDaysOfMonth({ targetMonth: currentMonth }),
  );
  /* <<--------------------------------------------------------->> */

  const onDayClick = (day: number | Date): void => {
    setSelectedDay(day);
  };
  const getUpdatedMonthDays = (factor: update_months_params): void => {
    let updated_month =
      factor === '+1'
        ? add(currentMonth, { months: 1 })
        : sub(currentMonth, { months: 1 });

    let updated_days = getDaysOfMonth({
      targetMonth: updated_month,
    });
    setCurrentMonth(updated_month);
    setCurrentMonthDays(updated_days);
  };
  /* <<--------------------------------------------------------->> */
  return (
    <div
      className='p-3 mx-auto w-[410px] shadow-2xl
     rounded-lg min-h-[25rem] flex flex-col overflow-hidden'
    >
      <div id='calendar-nav' className='flex gap-12 items-center justify-center'>
        <div>
          <button
            onClick={() => getUpdatedMonthDays('-1')}
            className='transition bg-transparent outline-none pointer
           rounded focus:outline-gray-400 shadow p-1 flex items-center 
           hover:bg-gray-200 active:bg-gray-300/90
           '
          >
            <Icon icon='charm:arrow-left' />
          </button>
        </div>
        <div className='uppercase tracking-wide overflow-hidden w-24 text-center '>
          <AnimatePresence initial={false} mode='wait'>
            <motion.div
              key={String(currentMonth)}
              transition={{ type: 'tween' }}
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
            >
              {format(currentMonth, 'MMM yyyy')}
            </motion.div>
          </AnimatePresence>
        </div>
        <div>
          <button
            onClick={() => getUpdatedMonthDays('+1')}
            className='transition bg-transparent outline-none pointer
           rounded focus:outline-gray-400 shadow p-1 flex items-center
           hover:bg-gray-200 active:bg-gray-300/90
              
           '
          >
            <Icon icon='charm:arrow-right' />
          </button>
        </div>
      </div>
      <div id='calendar-days-head' className='grid grid-cols-7 mt-5'>
        {HEADER_DAYS.map((item, i) => {
          return (
            <div key={`${item + i}`} className='flex items-center justify-center'>
              <p className='font-bold'>{item}</p>
            </div>
          );
        })}
      </div>
      <AnimatePresence initial={false} mode='wait'>
        <motion.div
          transition={{ type: 'just' }}
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          key={String(currentMonth)}
          className='grid grid-cols-7 mt-3 overflow-hidden'
        >
          {currentMonthDays.map((day, i) => {
            return (
              <div
                key={String(day)}
                className={`flex my-1
              items-center justify-center
              rounded-full
              ${i === 0 && COL_START_CLASSES[getDay(day)]}
              `}
              >
                <button
                  onClick={() => onDayClick(day)}
                  className={`m-1 bg-transparent rounded-full
               h-6 w-6 p-4 outline-none
              items-center justify-center
              flex bg-gray-100 transition
              focus:outline-gray-400
              hover:bg-gray-200
              active:bg-gray-300/90
              ${
                isToday(day) &&
                !isSameDay(day, selectedDay) &&
                'text-blue-500 font-semibold'
              }
              ${isSameMonth(day, currentMonth) ? '' : 'text-gray-500'}
              ${
                isSameDay(day, selectedDay)
                  ? 'bg-blue-500 text-white hover:bg-blue-500 active:bg-blue-600 '
                  : ''
              }
              `}
                >
                  <time dateTime={format(day, 'yyyy-MM-dd')}>
                    {format(day, 'd')}
                  </time>
                </button>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CalendarFns;
const COL_START_CLASSES = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];
