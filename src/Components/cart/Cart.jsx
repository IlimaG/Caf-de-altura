import './Cart.css'
import { useContext, useEffect, useState, } from 'react'
import { CartContext } from '../../context/CartContext'
import papelera from '../../assets/img/papelera.png'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    const { isClickingBuy, setIsClickingBuy } = useContext(CartContext)
    const [printCart, setPrintCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [scrollStyle, setScrollStyle] = useState('0')

    useEffect(() => {

        const loadCart = cart.map((coffee) => {

            return (
                <article key={coffee._id} className="cartProduct">
                    <img src={coffee.img} alt={coffee.name} />

                    <div>
                        <h3>{coffee.name}</h3>
                        <section>
                            <button onClick={() => subtractProduct(coffee._id)}>━</button>
                            <span>{coffee.quantity}</span>
                            <button onClick={() => addProduct(coffee._id)}>╋</button>
                            <button onClick={() => { deleteProduct(coffee._id) }} id='deleteCoffee'>X</button>
                        </section>

                        <div id='cartPrices'>
                            <p>Precio unidad: {(coffee.price).toFixed(2)} €</p>
                            <p>Precio total: {(coffee.price * coffee.quantity).toFixed(2)} €</p>
                        </div>
                    </div>

                </article>
            )
        })
        istEmptyCart()
        setPrintCart(loadCart)
    }, [isClickingBuy])

    useEffect(() => {
        let numberProducts = 0
        const totalPro = cart.map((coffee) => {
            numberProducts += (coffee.quantity * coffee.price)
        })
        const numberProduct = document.getElementById('totalProducts')

        if (numberProducts === 0) {
            numberProduct.style.display = 'none'
        } else {
            numberProduct.style.display = 'block'
        }

        setTotalPrice(numberProducts)
    }, [isClickingBuy])



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

    const deleteProduct = (id) => {
        cart.map((coffee) => {
            if (coffee._id === id) {
                cart.splice(cart.indexOf(coffee), 1)
            }
        })
        setIsClickingBuy(!isClickingBuy)
    }

    const clearCart = () => {
        setCart([])
        setIsClickingBuy(!isClickingBuy)
    }

    const istEmptyCart = () => {

        const cartProduct = document.getElementById('cartP')

        if (cart.length === 0) {
            cartProduct.style.display = `none`
        }
    }
    let mainLocation = window.pageYOffset

    window.addEventListener("scroll", function () {

        let currenSscrollPosition = window.pageYOffset;

        if (mainLocation >= currenSscrollPosition) {
            setScrollStyle('0')
        } else {
            setScrollStyle('-500px')
        }

        mainLocation = currenSscrollPosition;
    });

    return (
        <div id='cartP' style={{right : `${scrollStyle}`}}>


            <div id='cartScroll'>
                {printCart}
            </div>


            <div id='cartButtons'>
                <Link className='btnGreen' to={'/ShoppingCart'} id='goToCest'>  Ir a lacesta</Link> <p id='totalPrice'>Precio total: <br /> {totalPrice.toFixed(2)} €</p><button id="btnClearCart" onClick={() => clearCart()}><img src={papelera} /></button>
            </div>

        </div>
    )
}

export default Cart