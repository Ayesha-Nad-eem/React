
import ComponentD from "./ComponentD.jsx"
import React,{useContext} from 'react'
import { UserContext } from "./ComponentA.jsx";

export default function ComponentC() {
    const {user, setUser} = useContext(UserContext);

    return (
        <div className='box'>
            <h1>ComponentC</h1>
            <h2>Hello {user}</h2>
                <ComponentD />
        </div>
    )
}
