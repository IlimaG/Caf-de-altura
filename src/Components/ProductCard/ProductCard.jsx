import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import './ProductCard.css'


const ProductCard = (props) => {
    const { imageUrl, name, price, nameClass, coffeeObj } = props
    const { cart, setCart } = useContext(CartContext)
    const { isClickingBuy, setIsClickingBuy } = useContext(CartContext)

    const addToCart = (product) => {
        const coffeeToCart = {
            name: product.brand,
            price: product.price,
            img: product.img_url,
            _id: product._id,
            quantity: 1
        }

        const duplicated = cart.some(prod => prod._id === product._id)

        if (duplicated) {
            cart.map((coffee) => {
                if (coffee._id === product._id) {
                    return coffee.quantity++
                }
            })
        } else if (!product.available) {
            return
        } else {
            setCart(prev => [...prev, coffeeToCart])
        }
        

    }

    return (
        <article className={`productCard ${nameClass}`}>
            <img src={imageUrl} alt={`${name} coffee`} />
            <h5>{name}</h5>
            <p>{price} €</p>
            <button className="btnShop" onClick={() => {
                setIsClickingBuy(!isClickingBuy)
                addToCart(coffeeObj)}}>
                Añadir
            </button>
        </article>
    )
}

export default ProductCard