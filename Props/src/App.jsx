import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import List from './List.jsx'

function App() {

  const fruits = [{ id: 1, name: "apple", calories: 52 },
  { id: 2, name: "banana", calories: 89 },
  { id: 3, name: "orange", calories: 47 },
  { id: 4, name: "grape", calories: 69 },
  { id: 5, name: "kiwi", calories: 61 }];

  const vegetables = [{ id: 1, name: "carrot", calories: 41 },
  { id: 2, name: "broccoli", calories: 55 },
  { id: 3, name: "spinach", calories: 23 },
  { id: 4, name: "potato", calories: 77 },
  { id: 5, name: "cabbage", calories: 25 }];
  
  return (
    <>
      {/* Valid props */}
      <List items={vegetables} category="Vegetables" />
      <List items={fruits} category="Fruits"/>
    </>
  )
}

export default App
