import '../styles/Home.css'
import Buttons from "../Components/Buttons/Buttons"
import CoffeeConditionsList from "../Components/CoffeeConditionsList/CoffeeConditionsList"
import DropDown from "../Components/DropDown/DropDown"
import ArrowLink from "../Components/ArrowLink/ArrowLink"
import ContactForm from "../Components/ContactForm/ContactForm"
import Footer from "../Components/Footer/Footer"
import Loader from '../Components/Loader/Loader'
import ProductCard from "../Components/ProductCard/ProductCard"

import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { ProductsContext } from '../context/ProductsContext'

import restaurantImg from '../assets/img/restaurant.jpg'
import coffeeBeanImg from '../assets/img/granocafe.jpg'
import InfoWhitImg from "../Components/InfoWhitImg/InfoWhitImg"

const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    const { allProdructs, setAllProducts } = useContext(ProductsContext)

    setTimeout(() => {
        setIsLoading(false)
    }, 1000)

    const coffeProducts = allProdructs.sort((a, b) => a.price - b.price)

    coffeProducts.map((coffee) => {
        if (!coffee.available) {
            coffeProducts.splice(coffeProducts.indexOf(coffee), 1)
            coffeProducts.push(coffee)
        }
    })

    const mainProductsShop = coffeProducts.slice(0, 4)

    return (
        <div id='Home'>
            <InfoWhitImg
                h3="De la planta a tu taza"
                h1="El mejor café del mundo, ahora en tu casa."
                info="Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar."
                btn1={<Buttons nameClass="btnBlack" text="Descubrir orígenes" />}
                btn2={<Buttons nameClass="btnGreen" text={<Link to={'/shop'}>Comprar café</Link>} />}
                imgURL={coffeeBeanImg} />

            <CoffeeConditionsList />

            <div>
                <div className='mainProducts'>
                    <h2>Novedades</h2>
                    {isLoading && <Loader />}

                    <div className='mainShop'>
                        {!isLoading && mainProductsShop.map((coffee) => {
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
                    <ArrowLink text="Ver todos" nameClass="arrowLink" url="/shop" />
                </div>

            </div>

            <DropDown />

            <InfoWhitImg
                h3="Pruébalo en nuestro coffee shop"
                nameClass="fakeh2"
                info="Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento."
                btn1={<ArrowLink text="Cómo llegar" nameClass="arrowLink" />}
                imgURL={restaurantImg} />
            <ContactForm />

            <Footer />
        </div>
    )
}

export default Home