import { useState, useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"

import Copyright from "../Components/Copyright/Copyright"
import ProductCest from "../Components/ProductCest/ProductCest"
import Totalcart from "../Components/TotalCart/TotalCart"
import '../styles/ShoppingCart.css'

const ShoppingCart = () => {

    const { cart, setCart } = useContext(CartContext)
    const [shipping, setshipping] = useState('GRATIS')
    const [quantity, setQuantity] = useState(0)
    const { isClickingBuy, setIsClickingBuy } = useContext(CartContext)


    useEffect(() => {
        let cest = 0

        const cestQuantity = cart.map((coffee) => {
            cest += coffee.quantity
        })

        setQuantity(cest)
    }, [isClickingBuy])

    const onChangeValue = (e) => {
        setshipping(e.target.value)
    }




    return (

        <>

            <h2 id="cestQuantity">Cesta({quantity})</h2>

            <div id="cest">

                <div>
                    <ProductCest />
                    <div onChange={onChangeValue}>
                        <h3>Seleccionar envío</h3>

                        <article className="send">
                            <div className="sendInfo">
                                <input type="radio" name="shipping" id="standard" value='GRATIS' defaultChecked />
                                <label htmlFor="standard">
                                    <h5>Envío 5-7 días</h5>
                                    <p>Opción estándar sin seguimiento</p>
                                </label>
                            </div>
                            <span>GRATIS</span>
                        </article>

                        <article className="send">
                            <div className="sendInfo">
                                <input type="radio" name="shipping" id="express" value='9.00 €' />
                                <label htmlFor="standard">
                                    <h5>Envío urgente 24h </h5>
                                    <p>Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las
                                        13:00).
                                    </p>
                                </label>
                            </div>
                            <span>9,00 €</span>
                        </article>
                    </div>
                </div>

                <Totalcart
                    sendPrice={shipping}
                    text1='Ir a checkout'
                    link1='/checkout'
                    text2='Seguir comprando'
                    link2='/shop' />
            </div>
            <Copyright />
        </>
    )
}

export default ShoppingCart