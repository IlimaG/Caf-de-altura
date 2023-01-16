// PRODUCTOS

axios
    .get(`https://cafe-de-altura-api.vercel.app/api/products`)
    .then(response => {
        const products = response.data.products
        const indexProducts = products.slice(0, 4)

        let indexShop = document.getElementById(`section3Shop`)

        indexProducts.forEach(coffe => {

            let target = document.createElement(`div`)
            target.setAttribute(`class`, `col-sm-6 col-lg-3 buy`)
            indexShop.appendChild(target)

            let coffePicture = document.createElement(`img`)
            coffePicture.setAttribute(`src`, `${coffe.img_url}`)
            target.appendChild(coffePicture)

            let coffeName = document.createElement(`h5`)
            coffeName.innerText = coffe.brand
            target.appendChild(coffeName)

            let coffePrice = document.createElement(`p`)
            coffePrice.innerText = `${coffe.price},00 €`
            target.appendChild(coffePrice)

            let coffeBtn = document.createElement(`button`)
            coffeBtn.innerText = `Añadir`
            target.appendChild(coffeBtn)

            coffe.quantity = 1

            coffeBtn.onclick = () => {

                const existe = coffeStorage.some(prod => prod._id === coffe._id)

                if (existe) {
                    coffeStorage.forEach(prod => {
                        if (prod._id === coffe._id) {
                            prod.quantity++
                        }
                    })
                } else {
                    coffeStorage.push(coffe)
                }
                cest.style.display = "flex"
                actCart()
            }


        })

    })

    const buttonDropDown1 = document.querySelector(".dropDown1")
const text1 = document.querySelector(".text1")

buttonDropDown1.onclick = () => {
    
    
    if (text1.style.display === "block") {
        buttonDropDown1.style.transform = "rotate(-360deg)"
        text1.style.display = "none "
    } else {
        buttonDropDown1.style.transform = "rotate(-180deg)"
        text1.style.display = "block"
    }
    
}

const buttonDropDown2 = document.querySelector(".dropDown2")
const text2 = document.querySelector(".text2")

buttonDropDown2.onclick = () => {
    
    if (text2.style.display === "none") {
        buttonDropDown2.style.transform = "rotate(-180deg)"
        text2.style.display = "block"
    } else {
        buttonDropDown2.style.transform = "rotate(-360deg)"
        text2.style.display = "none"
    }

}

const buttonDropDown3 = document.querySelector(".dropDown3")
const text3 = document.querySelector(".text3")

buttonDropDown3.onclick = () => {

    if (text3.style.display === "none") {
        buttonDropDown3.style.transform = "rotate(-180deg)"
        text3.style.display = "block"
    } else {
        buttonDropDown3.style.transform = "rotate(-360deg)"
        text3.style.display = "none"
    }

}

/////////////////////////////////////////

// FORMULARIO

const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const mailInput = document.querySelector("#mail")
const telInput = document.querySelector("#tel")
const privacyInput = document.querySelector("#privacy")

const formValidation = (e) => {
    e.preventDefault()

    if (!nameInput.value){
        alert('Introduce un nombre valido.')
        nameInput.focus()
        return
    }

    if (nameInput.value.length < 3) {
        alert('El nombre tiene que tener 3 o mas catacteres ')
        nameInput.focus()
        return
    }

    function validateEmail(email) {
        let validate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return validate.test(email) ? true : false;
    }

    if (!validateEmail(mailInput.value)) {
        alert('Introduce un email valido')
        mailInput.focus()
        return
    }
    if (!(telInput.value * 1) || telInput.value.length < 9) {
        alert('Introduce un número de teléfono valido')
        telInput.focus()
        return
    }

    let checked = privacyInput.checked
    if (!checked) {
        alert('Acepta la Política de Privacidad y los Términos y condiciones')
        return
    }
}

form.addEventListener('submit', formValidation)

