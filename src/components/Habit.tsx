import React from 'react';
import './Habit.css';

const arr = Array.from({ length: 31 }, (_, i) => i + 1);

interface HabitProps {
  item: string;
  dates: string[];
  onClick: React.MouseEventHandler;
}

const Habit = (props: HabitProps) => {
  const { item, dates, onClick } = props;

  const dateSet = dates.reduce((acc, curr) => {
    acc.add(new Date(curr).getDate());
    return acc;
  }, new Set());

  return (
    <div className="habit">
      <div>{item}</div>
      <div className="dates" onClick={onClick}>
        {arr.map((num) => (
          <div className={dateSet.has(num) ? 'date checked' : 'date'} key={num}>
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habit;
