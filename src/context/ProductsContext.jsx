import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {

    const [allProdructs, setAllProducts] = useState([])
    const [totalOrders, setTotalOrders] = useState(12387)

    const baseURL = 'https://cafe-de-altura-api.vercel.app/api/products'
    useEffect(() => {
        axios
            .get(baseURL).then((response) => {
                let allCoffeProducts = response.data.products
                setAllProducts(allCoffeProducts)
            })
    },[])


    return (
        <ProductsContext.Provider value={{allProdructs, setAllProducts, totalOrders, setTotalOrders}}>
            {children}
        </ProductsContext.Provider>
    )
}

export {ProductsContext, ProductsContextProvider}