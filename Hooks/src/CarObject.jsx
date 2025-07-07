import React,{useState} from 'react'

export default function CarObject() {
    const [car, setCar] = useState({ make: "Toyota", year: 2025, model: "Corolla" });

    const handleMakeChange=(e)=> {
        setCar(c=>({...c,make: e.target.value}));
    }
    const handleModleChange=(e)=> {
        setCar(c=>({...c,model: e.target.value}));
    }
    const handleYearChange=(e)=> {
        setCar(c=>({...c,year: e.target.value}));
    }
  return (
    <div>
        <p>Your favourite car is : {car.make} {car.model} {car.year}</p>
        <input type="text" value={car.make} onChange={handleMakeChange}/> <br />
        <input type="text" value={car.model} onChange={handleModleChange}/> <br />
        <input type="number" value={car.year} onChange={handleYearChange}/> <br />
    </div>
  )
}
