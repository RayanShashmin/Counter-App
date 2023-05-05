
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      <div className="count-display">{count}</div>
      <div className="button-container">
        <button className="increment-button" onClick={handleIncrement}>+</button>
        <button className="decrement-button" onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}

export default App;
