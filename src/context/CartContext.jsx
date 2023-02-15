import { createContext, useState } from "react";

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [shipping, setShipping] = useState(0)
    const [isClickingBuy, setIsClickingBuy] = useState(true)

    return (
        <CartContext.Provider value={{cart, setCart, shipping, setShipping, isClickingBuy, setIsClickingBuy}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}