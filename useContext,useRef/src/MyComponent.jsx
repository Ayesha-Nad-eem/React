import React,{useState, useEffect, useRef} from 'react'
import { use } from 'react';

export default function MyComponent() {
    // let [number, setNumber] = useState(0);

    const inputref = useRef(null);
    const number= useRef(0);

    useEffect(() => {
        console.log("Component Rendered");
        console.log(inputref);
    });

    const handleClick = () => {
        number.current ++;
        console.log("Number is: ", number.current);
        inputref.current.focus();
        inputref.current.style.backgroundColor = "yellow";
    }

  return (
    <div>
    <button onClick={handleClick}>Click Me!</button>
    <input type="text" ref={inputref}/>
    </div>
  )
}
