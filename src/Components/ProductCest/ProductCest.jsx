import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './ProductCest.css'

const ProductCest = () => {

    const { cart, setCart } = useContext(CartContext)
    const { isClickingBuy, setIsClickingBuy } = useContext(CartContext)

    const subtractProduct = (id) => {
        cart.map((coffee) => {
            if (coffee._id === id) {
                coffee.quantity--
            }
            if (coffee.quantity === 0) {
                cart.splice(cart.indexOf(coffee), 1)
            }
        })
        setIsClickingBuy(!isClickingBuy)
    }

    const addProduct = (id) => {
        cart.map((coffee) => {
            if (coffee._id === id) {
                coffee.quantity++
            }
        })
        setIsClickingBuy(!isClickingBuy)
    }


    return (
        <div>
            <h3>Productos</h3>
            {cart.map((coffee) => {
                return (
                    <div key={coffee._id} className='productCest'>
                        <div className='infoCoffe'>
                            <div className='infoCoffeBtn'>
                                <button onClick={() => subtractProduct(coffee._id)}>━</button>
                                <span >{coffee.quantity}</span>
                                <button onClick={() => addProduct(coffee._id)}>╋</button>
                            </div>

                            <img src={coffee.img} alt={`${coffee.name} café`}/>

                            <div>
                                <h5>{coffee.name}</h5>
                                <p>Paquete de café, 250 gr</p>
                            </div>
                        </div>

                        <h3>{(coffee.price).toFixed(2)} €</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCest