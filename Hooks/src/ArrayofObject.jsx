import React, { useState } from 'react'

export default function ArrayofObject() {
    const [cars, setCars] = useState([
        {make: "Toyota", model: "Corolla", year: 2020},
        {make: "Honda", model: "Civic", year: 2019},
        {make: "Ford", model: "Focus", year: 2021}
    ]);
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    const [carYear, setCarYear] = useState(new Date().getFullYear());

    const handleAddCar = () => {
        if (!carMake || !carModel || !carYear) {
            alert("Please fill in all fields");
            return;
        }
        const newCar = {make: carMake, model: carModel, year: carYear};
        setCars(c => [...c, newCar]);

        setCarMake("");
        setCarModel("");
        setCarYear(new Date().getFullYear());
    }
    const handleRemoveCar = (index) => {
        setCars(cars.filter((_, i) => i !== index));
    }
    const handleMakeChange = (e) => {
        setCarMake(e.target.value);
    }
    const handleModelChange = (e) => {
        setCarModel(e.target.value);
    }
    const handleYearChange = (e) => {
        setCarYear(e.target.value);
    }

    return (
        <div>
            <h1>List of cars</h1>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}> 
                        {car.make} {car.model} {car.year} 
                    </li>
                ))}
            </ul>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car make'/> <br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter car model' /> <br />
            <input type="number" value={carYear} onChange={handleYearChange} placeholder='Enter car year'/> <br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}
