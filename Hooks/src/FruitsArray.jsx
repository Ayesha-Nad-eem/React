import React, { useState } from 'react'
import List from '../../Props/src/List';

export default function FruitsArray() {
    const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);
    const handleAddFood = (e) => {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value= '';
        setFruits(f=>[...f, newFood]);
    }
    const handleRemoveFood = (index) => {
        setFruits(fruits.filter((_,i)=> i!== index))
    }
    return (
        <div>
            <h2>List of fruits</h2>
            <ul>
                {fruits.map((fruit,index)=> ( <li key={index} onClick={()=>handleRemoveFood(index)}> {fruit} </li>))}
            </ul>
            <input type="text" id='foodInput' placeholder='Enter food name'/>
            <button onClick={handleAddFood}>Add Fruit</button>
        </div>
    )
}
