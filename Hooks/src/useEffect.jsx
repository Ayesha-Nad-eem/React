import React, { useState, useEffect } from 'react'
// useEffect(callback, [dependencies]) - runs the callback after the component mounts and whenever the dependencies change

export default function Component() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");

    //   useEffect(() => {
    //     document.title = `Count: ${count}`;
    //   });

    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // },[]);

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    },[count ,color]);

    function addCount() {
        setCount(c => c + 1);
    }

    function subCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "red" ? "green" : "red");
    }
    return (
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button><br />
            <button onClick={subCount}>Subtract</button><br />
            <button onClick={changeColor}>Change color</button>
        </>
    );
}
