
import React, { useState } from 'react'

export default function Couner() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }

  return (
    <div className="counter">
      <h1 className='counter-display'> Counter: {count}</h1>
      <button className='btn' onClick={increment}>Increment</button>
      <button className='btn' onClick={reset}>Reset</button>
      <button className='btn' onClick={decrement}>Decrement</button>
    </div>
  )
}
