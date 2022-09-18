import { createContext,useState } from "react";

export let CounterContext = createContext(0);

export function CounterContextProvider(props) {
    let [count, setcount] = useState(0);
    let [cartItems, setcartItems] = useState(0);

    function increaseCount()
    {
        setcount(count+=1)
    }

    function decreaseCount()
    {
        setcount(count-=1)
    }
    function addToCart()
    {
        setcartItems(cartItems+count)
    }
    return <CounterContext.Provider value={{ count,increaseCount ,decreaseCount , addToCart, cartItems,setcartItems}}>
        {props.children}
    </CounterContext.Provider>
}