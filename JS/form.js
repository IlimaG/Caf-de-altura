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

