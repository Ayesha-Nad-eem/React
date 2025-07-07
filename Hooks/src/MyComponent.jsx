import React, { useState } from 'react';

function MyComponent() {
    //   const [name, setName] = useState("Guest");
    //   const [age, setAge] = useState(0);
    //   const [isEmployed, setIsEmployed] = useState(false);

    //   const updateName = () => {
    //     setName("SpongeBob");
    //   }

    //   const incrementAge = () => {
    //     setAge(age + 1);
    //   }

    //   const toggleEmployedStatus = () => {
    //     setIsEmployed(!isEmployed);
    //   }

    const [name, setName] = useState("Guest");
    const handleronChange = (e) => {
        setName(e.target.value);
    }
    const [quatity, setQuantity] = useState(0);
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    const [comments, setComments] = useState([]);
    const handleCommentChange = (e) => {
        setComments(e.target.value);
    }

    const [payment, setPayment] = useState();
    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    }

    const [shipping, setShipping] = useState("");
    const handleShippingChange = (e) => {
        setShipping(e.target.value);
    }

    return (
        <div className='container'>
            {/* <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Employment</button> */}

            <input className='name' type="text" value={name} onChange={handleronChange} />
            <p>Name: {name}</p>

            <input className='quantity' type="number" value={quatity} onChange={handleQuantityChange} />
            <p>Quantity: {quatity}</p>

            <textarea className='comment' name="" id="" value={comments} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
            <p>Comment: {comments}</p>

            <select className='select-payment' value={payment} onChange={handlePaymentChange}>
                <option value="">Select payment method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
            <p>Payment: {payment}</p>

            <label className='Radio'>
                <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange} />
                Pick up
            </label>
            <br />
            <label className='Radio'>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default MyComponent;
