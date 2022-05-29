import React from 'react';
import './Habit.css';

const arr = Array.from({ length: 31 }, (_, i) => i + 1);

const Habit = () => {
  return (
    <div className="habit">
      <div>Getting up 6 am</div>
      <div className="dates">
        {arr.map((num) => (
          <div className="date" key={num}>
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habit;
