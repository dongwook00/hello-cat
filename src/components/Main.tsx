import React from 'react';
import Habit from './Habit';

import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <h1>July</h1>
      <section className="habits">
        <Habit />
      </section>
    </div>
  );
};

export default Main;
