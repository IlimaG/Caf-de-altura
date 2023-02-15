import axios from 'axios'
import { useEffect, useState } from 'react'
import ArrowLink from '../ArrowLink/ArrowLink'
import Loader from '../Loader/Loader'
import ProductCard from '../ProductCard/ProductCard'
import './MainShop.css'

const MainShop = () => {
    
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const baseURL = 'https://cafe-de-altura-api.vercel.app/api/products'
    useEffect(() => {
        axios
            .get(baseURL).then((response) => {
                let allProducts = response.data.products
                setProducts(allProducts)
                setIsLoading(false)
            })
    })



    const coffeProducts = products.sort((a, b) => a.price - b.price)

    coffeProducts.map((coffee) => {
        if (!coffee.available) {
            coffeProducts.splice(coffeProducts.indexOf(coffee), 1)
            coffeProducts.push(coffee)
        }
    })

    const mainProductsShop = coffeProducts.slice(0, 4)

    if (isLoading) {
        return (
            <div>
                {isLoading && <Loader />}
            </div>
        )
    } else {
        return (
            <div className='mainProducts'>
                <h2>Novedades</h2>
                <div className='mainShop'>
                    {mainProductsShop.map((coffee) => {
                        const outOfStock = !coffee.available ? `outStock` : ``;

                        return <ProductCard
                            key={coffee._id}
                            nameClass={outOfStock}
                            name={coffee.brand}
                            price={coffee.price.toFixed(2)}
                            imageUrl={coffee.img_url} />
                    })
                    }
                </div>
                <ArrowLink text="Ver todos" nameClass="arrowLink" url="/shop" />
            </div>
        )
    }


}

export default MainShop