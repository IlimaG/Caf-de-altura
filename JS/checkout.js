let coffeStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
let totalprice = localStorage.getItem('totalprice') ? JSON.parse(localStorage.getItem('totalprice')) : []

const totalProducts = () => {
    const countProducts = document.querySelector("#totalProducts")
    let count = 0

    coffeStorage.forEach(coffe => {
        count += coffe.quantity
    })

    if (countProducts === 0) {
        countProducts.style.display = "none"
    } else {
        countProducts.innerHTML = count
        countProducts.style.display = "inline"
    }

}

let cartTotal = document.getElementById(`cartTotal`)

const totalShop = (text = `9,00 €`) => {

    let price = 0

    coffeStorage.forEach(coffe => {
        price += (coffe.price * coffe.quantity)
    })

    if (totalprice[totalprice.length - 1] == price) {
        text = `GRATIS`
    }

    let iva = price - (price / 1.21)

    
    cartTotal.innerHTML = `
    <h3>Total del carrito</h3>
    <div>
    <p>SUBTOTAL <span>${price},00 €</span>
    <p>ENVIO <span>${text}</span>
    </div>
    <h5>TOTAL <span>${totalprice[totalprice.length - 1]},00 €</span></h5>
    <p id="iva">Incluye ${iva.toFixed(2)}€ de IVA</p> 
    <button id="goCheckout" class="disabled" disabled>Pagar y realizar pedido</button> 
    `
    
    
    let inputs = document.querySelectorAll(`.inputs`)

    const inputsControl = () => {

        inputs.forEach(input => {
            if (input.value == ``) {
                cartTotal.innerHTML = `
                    <h3>Total del carrito</h3>
                    <div>
                        <p>SUBTOTAL <span>${price},00 €</span>
                        <p>ENVIO <span>${text}</span>
                    </div>
                    <h5>TOTAL <span>${totalprice[totalprice.length - 1]},00 €</span></h5>
                    <p id="iva">Incluye ${iva.toFixed(2)}€ de IVA</p> 
                    <button id="goCheckout" class="disabled" disabled>Pagar y realizar pedido</button> 
                    `
            } else {
                cartTotal.innerHTML = `
                    <h3>Total del carrito</h3>
                    <div>
                        <p>SUBTOTAL <span>${price},00 €</span>
                        <p>ENVIO <span>${text}</span>
                    </div>
                    <h5>TOTAL <span>${totalprice[totalprice.length - 1]},00 €</span></h5>
                    <p id="iva">Incluye ${iva.toFixed(2)}€ de IVA</p> 
                    <button id="goCheckout">Pagar y realizar pedido</button> 
                    `
            }
        })

    }


    window.addEventListener("keyup", inputsControl)

}
totalShop()

// FORMULARIO

let form = document.getElementById(`form`)
let holdersName = document.getElementById(`holdersName`)
let cardNumber = document.getElementById(`CardNumber`)
let expiration = document.getElementById(`expiration`)
let cvc = document.getElementById(`cvc`)
let nameValue = document.getElementById(`name`)
let lastNames = document.getElementById(`lastNames`)
let phone = document.getElementById(`phone`)
let email = document.getElementById(`email`)
let country = document.getElementById(`country`)
let population = document.getElementById(`population`)
let cp = document.getElementById(`cp`)
let street = document.getElementById(`street`)
let numbers = document.getElementById(`numbers`)
let apartment = document.getElementById(`apartment`)
let door = document.getElementById(`door`)
let card = document.getElementById(`card`)
let checkoutForms = document.getElementById(`checkoutForms`)
let infoCard = document.getElementById(`infoCard`)



const payment = () => {
    
if (!card.checked) {
    infoCard.style.display = `none`
} else {
    infoCard.style.display = `block`
}

}

checkoutForms.addEventListener(`click`, payment)


const formValidation = (e) => {
    e.preventDefault()

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


    if (card.checked) {
        if (!validateName(holdersName.value)) {
            alert('Introduce un nombre válido')
            holdersName.focus()
            return
        }
    
        if (holdersName.value.length < 3) {
            alert('El nombre tiene que tener 3 o mas catacteres ')
            holdersName.focus()
            return
        }
        if (!(cardNumber.value * 1)) {
            alert('Introduza un número de tarjeta válido')
            cardNumber.focus()
            return
        }
    
        if (cardNumber.value.length > 16) {
            alert('Introduza un número de tarjeta válido')
            cardNumber.focus()
            return
        }
    
        if (expiration.value.length !== 5) {
            alert('Introduza una fecha valida')
            expiration.focus()
            return
        }
    
        if (!validateExpiration(expiration.value)) {
            alert('Introduza una fecha valida')
            expiration.focus()
            return
        }
    
        if (!(cvc.value * 1)) {
            alert('Introduza un CVC válido')
            cvc.focus()
            return
        }
    
        if (cvc.value.length !== 3) {
            alert('Introduza un CVC válido')
            cvc.focus()
            return
        }
    }

    if (!validateName(nameValue.value)) {
        alert('Introduce un nombre válido')
        nameValue.focus()
        return
    }

    if (nameValue.value.length < 3) {
        alert('El nombre tiene que tener 3 o mas catacteres ')
        nameValue.focus()
        return
    }

    if (!validateName(lastNames.value)) {
        alert('Introduce un apellido válido')
        lastNames.focus()
        return
    }

    if (lastNames.value.length < 3) {
        alert('El apellido tiene que tener 3 o mas catacteres ')
        lastNames.focus()
        return
    }

    if (!(phone.value * 1)) {
        alert('Introduza un número de teléfono válido')
        phone.focus()
        return
    }

    if (phone.value.length !== 9) {
        alert('Introduza un número de teléfono válido')
        phone.focus()
        return
    }

    if (!validateEmail(email.value)) {
        alert('Introduza email válido')
        email.focus()
        return
    }

    if (country.value === `none`) {
        alert('Seleccione un país')
        country.focus()
        return
    }

    if (!validateName(population.value)) {
        alert('Introduce una población válida')
        population.focus()
        return
    }

    if (!(cp.value * 1)) {
        alert('Introduza un código postal válido')
        cp.focus()
        return
    }

    if (cp.value.length !== 5) {
        alert('Introduza un código postal válido')
        cp.focus()
        return
    }

    if (!validateName(street.value)) {
        alert('Introduza una calle válida')
        street.focus()
        return
    }

    if (!(numbers.value * 1)) {
        alert('Introduza un número válido')
        numbers.focus()
        return
    }

    if (numbers.length > 3) {
        alert('Introduza un número válido')
        numbers.focus()
        return
    }

    if (!(apartment.value * 1)) {
        alert('Introduza un piso válido')
        apartment.focus()
        return
    }

    if (apartment.length > 3) {
        alert('Introduza un piso válido')
        apartment.focus()
        return
    }

    if (door.length > 3) {
        alert('Introduza un piso válido')
        apartment.focus()
        return
    }

    window.location.href = "../pages/success.html"
}



form.addEventListener('submit', formValidation)
window.addEventListener("load", totalProducts())
