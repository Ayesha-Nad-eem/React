import React,{useContext} from 'react'
import { UserContext } from "./ComponentA.jsx";

export default function ComponentD() {
    const {user, setUser} = useContext(UserContext);
    return (
        <div className='box'>
            <h1>ComponentD</h1>
            <h2>Hello {user}</h2>
        </div>
    )
}
