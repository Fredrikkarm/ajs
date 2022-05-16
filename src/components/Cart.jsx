import Login from "./Login";
import { useState } from "react";
import Shop from "./Shop";
import Timer from "./Timer";

export default function Cart({username, handleClick, cartSum, cartNum}){



    function sendAlert(){
        alert('Purchase complete! ordered items: ' + cartNum + 'order price: ' + cartSum);
        handleClick();
    }
    
    return(<>
    <Timer/>
    <h1>Shopping cart</h1>
    <h4>logged in as: {username}</h4>
    <p>cartNum: {cartNum}</p>
    <p>cartSum: {cartSum} </p>

    <button onClick={handleClick}>Logout</button>
    <button onClick={sendAlert}>Buy</button>
    </>)
}
