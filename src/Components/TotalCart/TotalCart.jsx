import './TotalCart.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext, useEffect, useState } from 'react'

const Totalcart = (props) => {
    const { sendPrice, text1, link1, classname, classname1, textBtn, classname2 } = props

    const { cart, setCart } = useContext(CartContext)
    const {shipping, setShipping} = useContext(CartContext)


    const CheckautBtn = () => {
        if (cart.length === 0) {

            return (
                <div className='isEmptyCart'>
                    <Link to={'/shop'}>Seguir comprando</Link>
                </div>
            )

        } else {
            return (
                <div className='totalCartLinks'>
                    <Link className={`goCheckout ${classname}`} to={link1}>{text1}</Link>
                    <Link className={`goShop ${classname1}`} to={'/shop'}>Seguir comprando</Link>
                    <button type='submit' className={`goShop ${classname2}`}>{textBtn}</button>
                </div>
            )
        }

    }

    const totalShop = () => {
        let textSend = sendPrice
        let price = 0
        let send = 0

        cart.map(coffe => {
            price += (coffe.price * coffe.quantity)
            send += (coffe.price * coffe.quantity)
        })


        let iva = send - (send / 1.21)

        if (sendPrice !== 'GRATIS') {
            send += 9
            setShipping(send)
        } else {
            setShipping(price)
        }

        if (cart.length === 0) {

            return (
                <> </>
            )

        } else {
            return (
                <>
                    <h3>Total del carrito</h3>
                    <div>
                        <p>SUBTOTAL <span>{price.toFixed(2)} €</span></p>
                        <p>ENVIO <span>{sendPrice} </span></p>
                        <h5>TOTAL <span>{send.toFixed(2)} €</span></h5>
                        <p className="iva">Incluye {iva.toFixed(2)}€ de IVA</p>
                    </div>
                </>)
        }
    }

    return (

        <div className='toalShop'>
            {totalShop()}
            {CheckautBtn()}
        </div>
    )
}

export default Totalcart