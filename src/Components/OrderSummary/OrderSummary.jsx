import { CartContext } from '../../context/CartContext'
import './OrderSummary.css'
import { useEffect, useContext, useState } from 'react'

const OrderSummary = () => {

    const [price, setPrice] = useState(0)
    const [send, setSend] = useState(0)
    const [orderProduct, setOrderProduct] = useState([])
    const { cart, setCart } = useContext(CartContext)
    const { shipping, setShipping } = useContext(CartContext)
    const { isClickingBuy, setIsClickingBuy } = useContext(CartContext)

    
    
    useEffect(() => {
        let priceTotal = 0
        cart.map(coffe => {
            priceTotal += (coffe.price * coffe.quantity)
        })
        setPrice(priceTotal)

        if (priceTotal === shipping) {
            setSend('GRATIS')
        } else {
            setSend('9.00 €')
        }

        const order = cart.map((coffee) => {

            return (
                <div className='orderProduct' key={coffee._id}>
                    <div className='orderInfo'>
                        <img src={coffee.img} alt={`café ${coffee.name}`} />

                        <div  >
                            <h5>{coffee.name}</h5>
                            <p>Paquete de café, 250 gr</p>
                            <p>Cantidad: {coffee.quantity}</p>
                        </div>
                    </div>

                    <h3>{(coffee.price * coffee.quantity).toFixed(2)} €</h3>
                </div>
            )
        })

        setOrderProduct(order)


    }, [])

    useEffect(() => {
        setCart([])
        setIsClickingBuy(!isClickingBuy)
    }, [orderProduct])



    let iva = shipping - (shipping / 1.21)


    return (
        <div id='orderSummary'>
            <h3>Tu pedido</h3>
            {orderProduct}

            <div id="orderTotalPrice">
                <div id="subtotal">
                    <p>SUBTOTAL <span>{`${price.toFixed(2)} €`} €</span></p>
                    <p>ENVIO <span>{send}</span></p>
                </div>
                <h5>TOTAL<span>{`${shipping.toFixed(2)} €`}</span></h5>
                <p id="IVA">Incluye {iva.toFixed(2)} € de IVA</p>
            </div>

        </div>
    )
}

export default OrderSummary