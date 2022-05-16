
import ItemArr from "./StoreItems";
import Products from "./Products";
import { useState } from "react";
import Cart from "./Cart";
import Timer from "./Timer";

export default function Shop({change, username}){

    const [carted, setCarted] = useState(false);
    const [cartSum, setCartSum] = useState(0);
    const [cartNum, setCartNum] = useState(0);

    function changeSetCartSum(arg){
        setCartSum(arg);
    }
    function changeSetCartNum(arg){
        setCartNum(arg);
    }


     function changeSetCarted(){
         setCarted(!carted);
     }

    function handleClick(){
        change();
    }
    if(carted === true){
        return(
            <Cart username={username} handleClick={handleClick} cartSum={cartSum} cartNum={cartNum}/>
        )
    }

    return(<>
        <Timer/>
        <h1>Logged in as: {username}</h1>
        {/* {console.log(ItemArr)} */}
        <button onClick={handleClick}>Logout</button> 
        <button onClick={changeSetCarted}>ShoppingCart</button>
        <Products changeSetCartNum={changeSetCartNum} changeSetCartSum={changeSetCartSum}/>
        
    </>)
}