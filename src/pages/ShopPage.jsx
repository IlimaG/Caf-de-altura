import CoffeeConditionsList from "../Components/CoffeeConditionsList/CoffeeConditionsList"
import Footer from "../Components/Footer/Footer"
import Loader from '../Components/Loader/Loader'
import ProductCard from "../Components/ProductCard/ProductCard"

import { ProductsContext } from '../context/ProductsContext'
import { useEffect, useState, useContext } from "react"
import '../styles/Shop.css'

const ShopPage = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { allProdructs, setAllProducts } = useContext(ProductsContext)

    setTimeout(() =>{
        setIsLoading(false)
    },1000)

    const coffeProducts = allProdructs.sort((a, b) => a.price - b.price)

    coffeProducts.map((coffee) => {
        if (!coffee.available) {
            coffeProducts.splice(coffeProducts.indexOf(coffee), 1)
            coffeProducts.push(coffee)
        }
    })

    if (isLoading) {
        return (
            <div id="Shop">
                <Loader />

                <CoffeeConditionsList />

                <Footer />

            </div>
        )
    } else {
        return (
            <div id="Shop">
                <div className='products'>
                    <h2>Últimos orígenes</h2>

                    <div className='productsShop'>
                        {coffeProducts.map((coffee) => {
                            const outOfStock = !coffee.available ? `outStock` : ``;

                            return <ProductCard
                                key={coffee._id}
                                nameClass={outOfStock}
                                name={coffee.brand}
                                price={coffee.price.toFixed(2)}
                                imageUrl={coffee.img_url}
                                coffeeObj={coffee} />
                        })
                        }
                    </div>
                </div>


                <CoffeeConditionsList />

                <Footer />
            </div>
        )
    }
}

export default ShopPage