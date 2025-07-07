
import React, { useState } from 'react'

export default function buttons() {
    // const [count, setCount] = useState(0);
    // const [buttonText, setButtonText] = useState("Click me😊");

    // const handleClick = (name) => {
    //     if (count < 3) {
    //         const newCount = count + 1;
    //         setCount(newCount);
    //         alert(`${name} You clicked me ${newCount} times`);
    //     }
    //     else {
    //         setButtonText("Stop clicking me! 😡");
    //         alert(`${name} stop clicking meeeeee 👿`);
    //     }
    // };

    const handelClick=(e)=>{
        e.target.textContent = "OUCHH 😖";
    }

    // const handleCLick2 = (name) => {
    //     alert(`${name} stop clicking meeeeee 👿`);
    // }

    return (
        <button className='btn' onDoubleClick={(e) => handelClick(e)}>
            Click me😊
        </button>
    )

}