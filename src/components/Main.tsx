import React from 'react';
import Habit from './Habit';
import './Main.css';

const habits = [
  { id: 1, item: 'Getting up at 6 am', dates: ['2022/6/1', '2022/6/2', '2022/6/13'] },
];

const Main = () => {
  return (
    <div className="main">
      <h1>July</h1>
      <section className="habits">
        {habits.map((habit) => (
          <Habit key={habit.id} item={habit.item} dates={habit.dates} />
        ))}
      </section>
    </div>
  );
};

export default Main;
