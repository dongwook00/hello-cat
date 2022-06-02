import React, { useState } from 'react';
import './Habit.css';

const arr = Array.from({ length: 31 }, (_, i) => i + 1);

interface HabitProps {
  item: string;
  dates: string[];
}

const Habit = (props: HabitProps) => {
  const { item, dates } = props;
  const [dateSet, setDateSet] = useState(
    dates.reduce((acc, curr) => {
      acc.add(new Date(curr).getDate());
      return acc;
    }, new Set()),
  );

  const onDateClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const tempDateSet = new Set(dateSet);
    const targetDate = +e.currentTarget.innerText;

    if (!tempDateSet.has(targetDate)) {
      tempDateSet.add(targetDate);
    } else {
      tempDateSet.delete(targetDate);
    }

    setDateSet(tempDateSet);
  };

  return (
    <div className="habit">
      <div>{item}</div>
      <div className="dates">
        {arr.map((num) => (
          <div
            onClick={onDateClick}
            className={dateSet.has(num) ? 'date checked' : 'date'}
            key={num}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habit;
