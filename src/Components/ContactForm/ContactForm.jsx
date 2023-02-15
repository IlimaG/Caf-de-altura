import { useState } from 'react'
import Buttons from '../Buttons/Buttons'

import grayMail from '../../assets/img/greymail.png'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import grayTelephone from '../../assets/img/greyTelefon.png'

import './ContactForm.css'


const ContactForm = () => {

    const [fullName, setfullName] = useState('')
    const [isFullName, setIsFullName] = useState(false)
    const [email, setEmail] = useState('')
    const [isEmail, setIsEmail] = useState(false)
    const [phone, setPhone] = useState('')
    const [isPhone, setIsPhone] = useState(false)
    const [note, setNote] = useState('')
    const [privacyPolicy, setPrivacyPolicy] = useState(false)
    const [isPrivacyPolicy, setIsPrivacyPolicy] = useState(false)

    const handleFullNameInput = (e) => setfullName(e.target.value)
    const handleEmailInput = (e) => setEmail(e.target.value)
    const handlePhoneInput = (e) => setPhone(e.target.value)
    const handleNoteInput = (e) => setNote(e.target.value)
    const handlePrivacyPolicyInput = (e) => setPrivacyPolicy(e.target.checked)
   
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        // const newContact = { fullName, email, IMDBRating, phone, note }
        
        let validateEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        let validateName = /^[A-Z]+$/i

        if (validateName.test(fullName)) {
            setIsFullName(false)
        } else {
            return setIsFullName(true)
        }

        if (validateEmail.test(email)) {
            setIsEmail(false)
        } else {
            return setIsEmail(true)
        }

        if ((phone * 1) && phone.length === 9) {
            setIsPhone(false)
        } else {
            return setIsPhone(true)
        }

        if (privacyPolicy) {
            setIsPrivacyPolicy(false)
        } else {
            return setIsPrivacyPolicy(true)
        }

        if (!isEmail && !isFullName && !isPhone && !isPrivacyPolicy) {

            let contactFormInputs = document.querySelector('.infoContactFormValidate').reset();

            setEmail('')
            setfullName('')
            setIsPhone('')
            setIsPrivacyPolicy(false)
            setNote('')
        }
    }


    return (

        <div className='contactForm'>
            <div className='contacInfo'>
                <h3>Entra en contacto con nosotros</h3>
                <p>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo
                    antes
                    posible. </p>
                <p>También puedes ponerte en contacto con nosotros en nuestra dirección o a través del teléfono de
                    la
                    tienda. </p>
                <p>742 Evergreen Terrace <br />
                    Springfield, OR 12345</p>

                <ButtonIcon nameClass="transparentBtn" imgURL={grayTelephone} text="+1 (555) 123-4567" />
                <ButtonIcon nameClass="transparentBtn" imgURL={grayMail} text="support@example.com" />
                <p>¿buscas un trabajo? <a href="">Ver nuestras ofertas.</a></p>
            </div>


            <div className='infoContactForm' >
                <form onSubmit={handleSubmit} className='infoContactFormValidate'>

                    <label htmlFor="name">
                        <p>Nombre completo</p>
                        <input type="text" id="name" name="user_name" onChange={handleFullNameInput} className='contactFormInputs'/>
                        {isFullName && <h4>Introduce un nombre válido.</h4>}
                    </label>

                    <label htmlFor="mail">
                        <p>Email</p>
                        <input type="text" id="mail" name="user_mail" onChange={handleEmailInput} className='contactFormInputs'/>
                        {isEmail && <h4>Introduce un email válido.</h4>}
                    </label>

                    <label htmlFor="tel">
                        <p>Teléfono</p><div id="country">
                            <select >
                                <option value="AL">AL</option>
                                <option value="AF">AF</option>
                                <option value="DE">DE</option>
                                <option value="AD">AD</option>
                                <option value="AO">AO</option>
                                <option value="AI">AI</option>
                                <option value="AQ">AQ</option>
                                <option value="AG">AG</option>
                                <option value="AN">AN</option>
                                <option value="SA">SA</option>
                                <option value="DZ">DZ</option>
                                <option value="AR">AR</option>
                                <option value="AM">AM</option>
                                <option value="AW">AW</option>
                                <option value="AU">AU</option>
                                <option value="AT">AT</option>
                                <option value="AZ">AZ</option>
                                <option value="BS">BS</option>
                                <option value="BH">BH</option>
                                <option value="BD">BD</option>
                                <option value="BB">BB</option>
                                <option value="BE">BE</option>
                                <option value="BZ">BZ</option>
                                <option value="BJ">BJ</option>
                                <option value="BM">BM</option>
                                <option value="BY">BY</option>
                                <option value="MM">MM</option>
                                <option value="BO">BO</option>
                                <option value="BA">BA</option>
                                <option value="BW">BW</option>
                                <option value="BR">BR</option>
                                <option value="BN">BN</option>
                                <option value="BG">BG</option>
                                <option value="BF">BF</option>
                                <option value="BI">BI</option>
                                <option value="BT">BT</option>
                                <option value="CV">CV</option>
                                <option value="KH">KH</option>
                                <option value="CM">CM</option>
                                <option value="CA">CA</option>
                                <option value="TD">TD</option>
                                <option value="CL">CL</option>
                                <option value="CN">CN</option>
                                <option value="CY">CY</option>
                                <option value="VA">VA</option>
                                <option value="CO">CO</option>
                                <option value="DM">DM</option>
                                <option value="EC">EC</option>
                                <option value="EG">EG</option>
                                <option value="SV">SV</option>
                                <option value="AE">AE</option>
                                <option value="ER">ER</option>
                                <option value="SI">SI</option>
                                <option value="ES" >ES</option>
                                <option value="US">US</option>
                                <option value="ZW">ZW</option>
                            </select>
                            <input type="text" id="tel" name="tel" placeholder="+1 (555) 987-6543" onChange={handlePhoneInput} className='contactFormInputs'/>
                        </div>
                        {isPhone && <h4>Introduce un teléfono válido.</h4>}
                    </label>

                    <div>
                        <textarea id="msg" name="user_message" rows="5" cols=""
                            placeholder="¿En qué podemos ayudarte?" onChange={handleNoteInput}></textarea>
                    </div>

                    <label htmlFor="privacy" id='privacy'>
                        <input type="checkbox" name="acept" id="privacy" onChange={handlePrivacyPolicyInput} className='contactFormInputs'/>
                        <p>Acepto la <a href="">Política de Privacidad</a> y los
                        <a href="">Términos y condiciones.</a></p>
                    </label>
                        {isPrivacyPolicy && <h4 id='privacyH4'>Por favo acepta la Política de Privacidad y los Términos y condiciones.</h4>}
                    <Buttons nameClass="btnGreen" text="Enviar" />
                </form>
            </div>
        </div >
    )
}

export default ContactForm