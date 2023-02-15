import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext, useEffect, useState } from 'react'

import Buttons from '../Buttons/Buttons'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import LogoCoffee from '../LogoCoffee/LogoCoffee'

import phoneImg from '../../assets/img/Icon.png'
import cartImg from '../../assets/img/Carr.png'
import './Navbar.css'
import Cart from '../cart/Cart'

const Navbar = () => {

    const [showCart, setShowCart] = useState(false)
    const [totalProducts, setTotalProducts] = useState(0)
    const [scrollStyle, setScrollStyle] = useState('0')
    const { cart, setCart } = useContext(CartContext)
    const { isClickingBuy, setIsClickingBuy } = useContext(CartContext)

    useEffect(() => {
        let numberProducts = 0
        const totalPro = cart.map((coffee) => {
            numberProducts += coffee.quantity
        })
        const numberProduct = document.getElementById('totalProducts')

        if (numberProducts === 0) {
            numberProduct.style.display = 'none'
        } else {
            numberProduct.style.display = 'block'
        }

        setTotalProducts(numberProducts)
    }, [isClickingBuy])

    
    let mainLocation = window.pageYOffset

    window.addEventListener("scroll", function () {

        let currenSscrollPosition = window.pageYOffset;

        if (mainLocation >= currenSscrollPosition) {
            setScrollStyle('0')
        } else {
            setScrollStyle('-80px')
        }

        mainLocation = currenSscrollPosition;
    });
    
    return (
        <>
            <nav style={{top : `${scrollStyle}`}}>

                <LogoCoffee />



                <ul id="nav">
                    <li><Link to={'/shop'}>Tienda</Link></li>
                    <li><a>Suscripción</a></li>
                    <li><a>Para empresas</a></li>
                    <li><a>Sobre nosotros</a></li>
                    <li><a>Contacto</a></li>
                </ul>

                <div id="contact">
                    <ButtonIcon nameClass="btnIconBlack" text="+34 919 49 05 18" imgURL={phoneImg} />
                    <Buttons nameClass="btnGray" text="Iniciar sesión" />
                </div>

                <button onClick={() => setShowCart(!showCart)}>
                    <img src={cartImg} alt="Cart list" />
                    <span id='totalProducts'>
                        {totalProducts}
                    </span>
                </button>

            </nav >

            {showCart &&
                <Cart />
            }
        </>
    )
}

export default Navbar