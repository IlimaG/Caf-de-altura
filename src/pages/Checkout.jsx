import '../styles/Checkout.css'
import Totalcart from "../Components/TotalCart/TotalCart"
import bizumLogo from "../assets/img/bizumLogo.png"
import Copyright from '../Components/Copyright/Copyright'
import { useEffect, useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

const Checkout = () => {
    const [price, setPrice] = useState('')
    const [nextPage, setNextPage] = useState('none')
    const [thisPage, setThisPage] = useState('btnGreenOpacity')
    const { cart, setCart } = useContext(CartContext)
    const { shipping, setShipping } = useContext(CartContext)

    const [isCreditCard, setIsCreditCard] = useState(true)
    const [isBankTransfer, setIsBankTransfer] = useState(false)
    const [isBizum, setIsBizum] = useState(false)

    const [nameHolder, setNameHolder] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expiration, setExpiration] = useState('')
    const [cvc, setCvc] = useState('')

    const [isNameHolder, setIsNameHolder] = useState(false)
    const [isCardNumber, setIsCardNumber] = useState(false)
    const [isExpiration, setIsExpiration] = useState(false)
    const [isCvc, setIsCvc] = useState(false)
    const [isMethodPayment, setIsMethodPayment] = useState(false)

    const handleNameHolderInput = (e) => setNameHolder(e.target.value)
    const handleCardNumberInput = (e) => setCardNumber(e.target.value)
    const handleExpirationInput = (e) => setExpiration(e.target.value)
    const handleCvcInput = (e) => setCvc(e.target.value)

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('ES')
    const [population, setPopulation] = useState('')
    const [cp, setCp] = useState('')
    const [street, setStreet] = useState('')
    const [streetNumber, setStreetNumber] = useState('1')

    const [isName, setIsName] = useState(false)
    const [isLastName, setIsLastName] = useState(false)
    const [isPhone, setIsPhone] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isCountry, setIsCountry] = useState(false)
    const [isPopulation, setIsPopulation] = useState(false)
    const [isCp, setIsCp] = useState(false)
    const [isStreet, setIsStreet] = useState(false)
    const [isStreetNumber, setIsStreetNumber] = useState(false)

    const handleNameInput = (e) => setName(e.target.value)
    const handleLastNameInput = (e) => setLastName(e.target.value)
    const handlePhoneInput = (e) => setPhone(e.target.value)
    const handleEmailInput = (e) => setEmail(e.target.value)
    const handleCountryInput = (e) => setCountry(e.target.value)
    const handlePopulationInput = (e) => setPopulation(e.target.value)
    const handleCpInput = (e) => setCp(e.target.value)
    const handleStreetInput = (e) => setStreet(e.target.value)
    const handleStreetNumberInput = (e) => setStreetNumber(e.target.value)





    useEffect(() => {
        let price = 0

        cart.map(coffe => {
            price += (coffe.price * coffe.quantity)
        })

        if (price === shipping) {
            setPrice('GRATIS')
        } else {
            setPrice('9.00 €')
        }
    }, [])


    const onChangeValuesRadio = (e) => {
        let payment = e.target.value

        if (payment == 'creditCard') {
            setIsCreditCard(true)
        } else {
            setIsCreditCard(false)
        }

        if (payment == 'bankTransfer') {
            setIsBankTransfer(true)
        } else {
            setIsBankTransfer(false)
        }

        if (payment == 'bizum') {
            setIsBizum(true)
        } else {
            setIsBizum(false)
        }


    }

    const inputsControl = () => {
        let inputs = document.querySelectorAll(`.inputs`)

        function validateName(name) {
            let validateLetters = /^[A-Z ]+$/i
            return validateLetters.test(name)
        }

        function validateExpiration(date) {
            let validate = /^[0-9/]+$/;
            return validate.test(date)
        }

        function validateEmail(email) {
            let validate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return validate.test(email)
        }

        function validateNumber(number) {
            let validate = /^[0-9]+$/
            return validate.test(number)
        }

        if (isCreditCard) {
            if (validateName(nameHolder)) {
                setIsNameHolder(false)
            } else {
                setNextPage('none')
                setThisPage('btnGreenOpacity')
                setIsNameHolder(true)
                return
            }

            if (validateNumber(cardNumber) && cardNumber.length > 14) {
                setIsCardNumber(false)
            } else {
                setNextPage('none')
                setThisPage('btnGreenOpacity')
                return setIsCardNumber(true);
            }

            if (validateExpiration(expiration)) {
                setIsExpiration(false)
            } else {
                setNextPage('none')
                setThisPage('btnGreenOpacity')
                return setIsExpiration(true)
            }

            if (validateNumber(cvc) && cvc.length > 1) {
                setIsCvc(false)
            } else {
                setNextPage('none')
                setThisPage('btnGreenOpacity')
                return setIsCvc(true)
            }
        }

        if (validateName(name)) {
            setIsName(false)
        } else {
            setNextPage('none')
            setThisPage('btnGreenOpacity')
            return setIsName(true)
        }

        if (validateName(lastName)) {
            setIsLastName(false)
        } else {
            setNextPage('none')
            setThisPage('btnGreenOpacity')
            return setIsLastName(true)
        }

        if (validateNumber(phone) && phone.length > 7) {
            setIsPhone(false)
        } else {
            setNextPage('none')
            setThisPage('btnGreenOpacity')
            return setIsPhone(true)
        }

        if (validateEmail(email)) {
            setIsEmail(false)
        } else {
            setNextPage('none')
            setThisPage('btnGreenOpacity')
            return setIsEmail(true)
        }

        if (validateName(population)) {
            setIsPopulation(false)
        } else {
            setNextPage('none')
            setThisPage('btnGreenOpacity')
            return setIsPopulation(true)
        }

        if (validateNumber(cp)) {
            setIsCp(false)
        } else {
            setNextPage('none')
            setThisPage('btnGreenOpacity')
            return setIsCp(true)
        }

        if (validateName(street)) {
            setIsStreet(false)
        } else {
            setNextPage('none')
            setThisPage('btnGreenOpacity')
            return setIsStreet(true)
        }

        if ((streetNumber * 1)) {
            setIsStreetNumber(false)
        } else {
            setNextPage('none')
            setThisPage('btnGreenOpacity')
            return setIsStreetNumber(true)
        }

            setNextPage('btnGreen')
            setThisPage('none')

    }



    return (

        <div id='Checkout'>
            <h2 id='checkoutTitle'>Checkout</h2>
            <div id="checkout">

                <br />
                <div onChange={inputsControl}>
                    <form action="#" >


                        <div id='methodOfPayment' >
                            <h3>Seleccionar método de pago</h3>

                            <section>
                                <input type="radio" name="payment" id="card" value='creditCard' className="inputRadio" defaultChecked onChange={onChangeValuesRadio} />
                                <label htmlFor="card">
                                    <h4>Tarjeta de débito</h4>
                                    <p>Opción estándar sin seguimiento</p>
                                </label>
                            </section>

                            {isCreditCard && <div id="infoCard">
                                <label htmlFor="holdersName">Titular</label>
                                <br />
                                <input type="text" placeholder="Nombre del titular" id="holdersName" onChange={handleNameHolderInput} />
                                {isNameHolder && <h6>Introduce un titular correcto.</h6>}
                                <br />
                                <label htmlFor="CardNumber">Número de la tarjeta</label>
                                <br />
                                <input type="text" placeholder="1234 1234 1234 1234" id="CardNumber" maxLength={16} onChange={handleCardNumberInput} />
                                {isCardNumber && <h6>Introduce un número de tarjeta correcto.</h6>}
                                <br />
                                <label htmlFor="expiration">Fecha de caducidad</label>
                                <label htmlFor="cvc" className="cvcLabel">CVC</label>
                                <br />
                                <input type="text" placeholder="MM / YY" id="expiration" maxLength={5} onChange={handleExpirationInput} />
                                <input type="text" placeholder="123" id="cvc" maxLength={3} onChange={handleCvcInput} />
                                {isExpiration && <h6>Introduce un fecha de caducidad válida.</h6>}
                                {isCvc && <h6>Introduce un CVC válido.</h6>}
                            </div>}


                            <section id='bankTransfer'>
                                <input type="radio" name="payment" id="bankTransfer" value='bankTransfer' onChange={onChangeValuesRadio} />
                                <label htmlFor="bankTransfer" id="bankTransferLabel">
                                    <div>
                                        <h4>Transferencia bancaria a la cuenta ES12 1234 1234 123457890</h4>
                                        <p>Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>

                                        {isBankTransfer && <h5>Envianos el justicante de pago a: cafe-de-altura@cafedealtura.com</h5>}
                                    </div>
                                </label>

                            </section>



                            <section>
                                <input type="radio" name="payment" id="bizum" value='bizum' onChange={onChangeValuesRadio} />
                                <label htmlFor="bizum" id="bizumLabel">
                                    <h4>Bizum</h4>
                                    <img src={bizumLogo} alt="Bizum logo" />
                                </label>
                            </section>
                            {isBizum && <h5 id='bizumInfo'>Haz el pago al 623 123 123 y pon tu nombre completo en el asunto</h5>}
                            {isMethodPayment && <h6>Selecciona un método de pago.</h6>}
                        </div>
                    </form>
                    <form >
                        <div id='shippingAddress'>
                            <h3>Dirección de envío</h3>
                            <label htmlFor="name">Nombre </label>
                            <br />
                            <input type="text" id="name" className='inputs' onChange={handleNameInput} />
                            {isName && <h6>Introduce un nombre válido.</h6>}
                            <br />
                            <label htmlFor="lastNames">Apellidos</label>
                            <br />
                            <input type="text" id="lastNames" className='inputs' onChange={handleLastNameInput} />
                            {isLastName && <h6>Introduce un apellido válido.</h6>}
                            <br />
                            <label htmlFor="phone">Teléfono </label>
                            <br />
                            <input type="text" id="phone" placeholder="   +34 600 600 600" className='inputs' maxLength={9} onChange={handlePhoneInput} />
                            {isPhone && <h6>Introduce Un número de teléfono válido.</h6>}
                            <br />
                            <label htmlFor="email">Email </label>
                            <br />
                            <input type="text" id="email" className='inputs' onChange={handleEmailInput} />
                            {isEmail && <h6>Introduce un email válido.</h6>}
                            <br />
                            <label htmlFor="country">País </label>
                            <br />
                            <select name="country" id="country" className='inputs' defaultValue={'ES'} onChange={handleCountryInput}>
                                <option value="AF">Afganistán</option>
                                <option value="AL">Albania</option>
                                <option value="DE">Alemania</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antártida</option>
                                <option value="AG">Antigua y Barbuda</option>
                                <option value="AN">Antillas Holandesas</option>
                                <option value="SA">Arabia Saudí</option>
                                <option value="DZ">Argelia</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaiyán</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrein</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BE">Bélgica</option>
                                <option value="BZ">Belice</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermudas</option>
                                <option value="BY">Bielorrusia</option>
                                <option value="MM">Birmania</option>
                                <option value="BO">Bolivia</option>
                                <option value="BA">Bosnia y Herzegovina</option>
                                <option value="BW">Botswana</option>
                                <option value="BR">Brasil</option>
                                <option value="BN">Brunei</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="BT">Bután</option>
                                <option value="CV">Cabo Verde</option>
                                <option value="KH">Camboya</option>
                                <option value="CM">Camerún</option>
                                <option value="CA">Canadá</option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CY">Chipre</option>
                                <option value="VA">Ciudad del Vaticano (Santa Sede)</option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comores</option>
                                <option value="CG">Congo</option>
                                <option value="CD">Congo, República Democrática del</option>
                                <option value="KR">Corea</option>
                                <option value="KP">Corea del Norte</option>
                                <option value="CI">Costa de Marfíl</option>
                                <option value="CR">Costa Rica</option>
                                <option value="HR">Croacia (Hrvatska)</option>
                                <option value="CU">Cuba</option>
                                <option value="DK">Dinamarca</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egipto</option>
                                <option value="SV">El Salvador</option>
                                <option value="AE">Emiratos Árabes Unidos</option>
                                <option value="ER">Eritrea</option>
                                <option value="SI">Eslovenia</option>
                                <option value="ES">España</option>
                                <option value="US">Estados Unidos</option>
                                <option value="EE">Estonia</option>
                                <option value="ET">Etiopía</option>
                                <option value="FJ">Fiji</option>
                                <option value="PH">Filipinas</option>
                                <option value="FI">Finlandia</option>
                                <option value="FR">Francia</option>
                                <option value="GA">Gabón</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GD">Granada</option>
                                <option value="GR">Grecia</option>
                                <option value="GL">Groenlandia</option>
                                <option value="GP">Guadalupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GY">Guayana</option>
                                <option value="GF">Guayana Francesa</option>
                                <option value="GN">Guinea</option>
                                <option value="GQ">Guinea Ecuatorial</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="HT">Haití</option>
                                <option value="HN">Honduras</option>
                                <option value="HU">Hungría</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IQ">Irak</option>
                                <option value="IR">Irán</option>
                                <option value="IE">Irlanda</option>
                                <option value="BV">Isla Bouvet</option>
                                <option value="CX">Isla de Christmas</option>
                                <option value="IS">Islandia</option>
                                <option value="KY">Islas Caimán</option>
                                <option value="CK">Islas Cook</option>
                                <option value="CC">Islas de Cocos o Keeling</option>
                                <option value="FO">Islas Faroe</option>
                                <option value="HM">Islas Heard y McDonald</option>
                                <option value="FK">Islas Malvinas</option>
                                <option value="MP">Islas Marianas del Norte</option>
                                <option value="MH">Islas Marshall</option>
                                <option value="UM">Islas menores de Estados Unidos</option>
                                <option value="PW">Islas Palau</option>
                                <option value="SB">Islas Salomón</option>
                                <option value="SJ">Islas Svalbard y Jan Mayen</option>
                                <option value="TK">Islas Tokelau</option>
                                <option value="TC">Islas Turks y Caicos</option>
                                <option value="VI">Islas Vírgenes (EEUU)</option>
                                <option value="VG">Islas Vírgenes (Reino Unido)</option>
                                <option value="WF">Islas Wallis y Futuna</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italia</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japón</option>
                                <option value="JO">Jordania</option>
                                <option value="KZ">Kazajistán</option>
                                <option value="KE">Kenia</option>
                                <option value="KG">Kirguizistán</option>
                                <option value="KI">Kiribati</option>
                                <option value="KW">Kuwait</option>
                                <option value="LA">Laos</option>
                                <option value="LS">Lesotho</option>
                                <option value="LV">Letonia</option>
                                <option value="LB">Líbano</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">Libia</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lituania</option>
                                <option value="LU">Luxemburgo</option>
                                <option value="MK">Macedonia, Ex-República Yugoslava de</option>
                                <option value="MG">Madagascar</option>
                                <option value="MY">Malasia</option>
                                <option value="MW">Malawi</option>
                                <option value="MV">Maldivas</option>
                                <option value="ML">Malí</option>
                                <option value="MT">Malta</option>
                                <option value="MA">Marruecos</option>
                                <option value="MQ">Martinica</option>
                                <option value="MU">Mauricio</option>
                                <option value="MR">Mauritania</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">México</option>
                                <option value="FM">Micronesia</option>
                                <option value="MD">Moldavia</option>
                                <option value="MC">Mónaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="MS">Montserrat</option>
                                <option value="MZ">Mozambique</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Níger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk</option>
                                <option value="NO">Noruega</option>
                                <option value="NC">Nueva Caledonia</option>
                                <option value="NZ">Nueva Zelanda</option>
                                <option value="OM">Omán</option>
                                <option value="NL">Países Bajos</option>
                                <option value="PA">Panamá</option>
                                <option value="PG">Papúa Nueva Guinea</option>
                                <option value="PK">Paquistán</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Perú</option>
                                <option value="PN">Pitcairn</option>
                                <option value="PF">Polinesia Francesa</option>
                                <option value="PL">Polonia</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="UK">Reino Unido</option>
                                <option value="CF">República Centroafricana</option>
                                <option value="CZ">República Checa</option>
                                <option value="ZA">República de Sudáfrica</option>
                                <option value="DO">República Dominicana</option>
                                <option value="SK">República Eslovaca</option>
                                <option value="RE">Reunión</option>
                                <option value="RW">Ruanda</option>
                                <option value="RO">Rumania</option>
                                <option value="RU">Rusia</option>
                                <option value="EH">Sahara Occidental</option>
                                <option value="KN">Saint Kitts y Nevis</option>
                                <option value="WS">Samoa</option>
                                <option value="AS">Samoa Americana</option>
                                <option value="SM">San Marino</option>
                                <option value="VC">San Vicente y Granadinas</option>
                                <option value="SH">Santa Helena</option>
                                <option value="LC">Santa Lucía</option>
                                <option value="ST">Santo Tomé y Príncipe</option>
                                <option value="SN">Senegal</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leona</option>
                                <option value="SG">Singapur</option>
                                <option value="SY">Siria</option>
                                <option value="SO">Somalia</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="PM">St Pierre y Miquelon</option>
                                <option value="SZ">Suazilandia</option>
                                <option value="SD">Sudán</option>
                                <option value="SE">Suecia</option>
                                <option value="CH">Suiza</option>
                                <option value="SR">Surinam</option>
                                <option value="TH">Tailandia</option>
                                <option value="TW">Taiwán</option>
                                <option value="TZ">Tanzania</option>
                                <option value="TJ">Tayikistán</option>
                                <option value="TF">Territorios franceses del Sur</option>
                                <option value="TP">Timor Oriental</option>
                                <option value="TG">Togo</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad y Tobago</option>
                                <option value="TN">Túnez</option>
                                <option value="TM">Turkmenistán</option>
                                <option value="TR">Turquía</option>
                                <option value="TV">Tuvalu</option>
                                <option value="UA">Ucrania</option>
                                <option value="UG">Uganda</option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistán</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VE">Venezuela</option>
                                <option value="VN">Vietnam</option>
                                <option value="YE">Yemen</option>
                                <option value="YU">Yugoslavia</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabue</option>
                            </select>
                            {isCountry && <h6>Selecciona un país.</h6>}


                            <div id='populationInfo'>
                                <br />
                                <label htmlFor="population">Población</label>
                                <label htmlFor="cp" id="cpLabel">CP</label>
                                <br />

                                <input type="text" id="population" className='inputs' onChange={handlePopulationInput} />
                                <input type="text" id="cp" placeholder="12345" className='inputs' maxLength={5} onChange={handleCpInput} />
                                {isPopulation && <h6>Introduce una población válida</h6>}
                                {isCp && <h6>Introduce una código postal.</h6>}
                            </div>

                            <div id='streetInfo'>
                                <br />
                                <label htmlFor="street">Calle</label>
                                <label htmlFor="numbers" id="numLabel">Nº</label>
                                <label htmlFor="apartment" id="apartamentLabel">Piso</label>
                                <label htmlFor="door" id="doorLabel">Puerta</label>
                                <br />
                                <input type="text" id="street" className='inputs' onChange={handleStreetInput} />
                                <input type="text" id="numbers" className='inputs' onChange={handleStreetNumberInput} />
                                <input type="text" id="apartment" className='inputs' />
                                <input type="text" id="door" className='inputs' />

                                {isStreet && <h6>Intoduce una calle válida</h6>}
                                {isStreetNumber && <h6>Intoduce una número válido</h6>}
                            </div>
                        </div>

                    </form>
                </div>

                <Totalcart
                    sendPrice={price}
                    text1='Pagar y realizar pedido'
                    link1='/Success'
                    classname={nextPage}
                    classname1='none'
                    classname2={thisPage}
                    textBtn='Pagar y realizar pedido'
                />

            </div >
            <Copyright />
        </div >
    )
}

export default Checkout