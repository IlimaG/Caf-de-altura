import CardCondition from '../CardCondition/CardCondition'
import './CoffeeConditionsList.css'
import checkListIMG from  '../../assets/img/Icon.1.png'
import giftIMG from '../../assets/img/Icon2.png'
import carIMG from'../../assets/img/Icon3.png'
const CoffeeConditionsList = () => {

    return ( 
        <div className='conditionsList'>
            <h2>Café con las mejores condiciones</h2>

            <div className='conditionsListCard'>
                <CardCondition 
                    imgURL={checkListIMG} 
                    condition="Recibe tu pedido sin preocuparte" 
                    info="Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana."/>
                <CardCondition 
                    imgURL={carIMG} 
                    condition="Envío en 24/48h" 
                    info="Pide tu café antes de las 12h y lo recibirás al día siguiente."/>
                <CardCondition 
                    imgURL={giftIMG} 
                    condition="Descuentos y beneficios" 
                    info="Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros."/> 
            </div>
        </div>
    )
}

export default CoffeeConditionsList