
let coffeStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

// IMPRIMIR CESTA

const shopCart = document.querySelector("#shopCart")
const totalProducts = document.querySelector("#totalProducts")

const actCart = () => {

    shopCart.innerHTML = ''

    let price = 0
    let totalsProducts = 0

    coffeStorage.forEach(coffe => {

        let shopTarget = document.createElement(`div`)
        shopTarget.setAttribute(`id`, `product`)

        shopTarget.innerHTML = `
        <div id="product">
           <img src="${coffe.img_url}" alt="coffe ${coffe.brand}"> 
            <div>
                <h5>${coffe.brand}</h5>
                <p id="priceU">Precio unidad: ${coffe.price}€</p>
                <button id="add" onclick="add(this)">+</button>
                <span id="cuantity">${coffe.quantity}</span>
                <button id="minus" onclick="minus(this)">-</button>
                <button id="deleteProduct" onclick="deleteThisProduct(this)">X </button>
                <p> Total: ${coffe.price * coffe.quantity} € </p>
            </div>
            </div>
            `
        shopCart.appendChild(shopTarget)

        price += (coffe.price * coffe.quantity)
        totalsProducts += coffe.quantity


    })

    shopCart.innerHTML += `<p id="subTotal">Subtotal (${totalsProducts} productos): ${price} € </p>`

    if (totalsProducts === 0) {
        totalProducts.style.display = "none"
    } else {
        totalProducts.innerHTML = totalsProducts
        totalProducts.style.display = "inline"
    }

    if (coffeStorage.length < 1) {
        cest.style.display = "none"
        shopCart.innerHTML = `<div id="emptyCart"> La cesta esta vacia</div>`
    } else {
        cest.style.display = "flex"
    }

    localStorage.setItem('cart', JSON.stringify(coffeStorage))
}

// ELIMINAR ESE PRODUCTO

const deleteThisProduct = (button) => {

    button = button.parentNode.firstElementChild.textContent

    coffeStorage.forEach(coffe => {

        if (coffe.brand === button) {
            coffeStorage.splice(coffeStorage.indexOf(coffe), 1)
            coffe.quantity = 1
        }
    })

    actCart()
}

// BORRAR CESTA ENTERA

const deleteAll = document.querySelector("#deleteAll")

deleteAll.onclick = (e) => {
    e.preventDefault()
    coffeStorage = []
    actCart()
    shopCart.innerHTML = `<div id="emptyCart"> La cesta esta vacia</div>`
    cest.style.display = "none"
}

// BOTON AÑADIR PRODUCTO

const add = (button) => {

    button = button.parentNode.firstElementChild.textContent

    coffeStorage.forEach(coffe => {

        if (coffe.brand === button) {
            coffeStorage[coffeStorage.indexOf(coffe)].quantity ++
        }
    })

    actCart()
}

// BOTON QUITAR PRODUCTO

const minus = (button) => {

    button = button.parentNode.firstElementChild.textContent

    coffeStorage.forEach(coffe => {

        if (coffe.brand === button) {
            coffeStorage[coffeStorage.indexOf(coffe)].quantity --
        }

        if (coffe.quantity === 0) {
            coffeStorage.splice(coffeStorage.indexOf(coffe), 1)
        }

    })

    actCart()
}

// MOSTRAR/OCULTAR CESTA

const cart = document.querySelector("#cart")
const shop = document.querySelector("#shop")

cart.onclick = (e) => {
    e.preventDefault()
    if (shop.style.display === "none") {
        shop.style.display = "block"
    } else {
        shop.style.display = "none"
    }
}


window.addEventListener("load", actCart());
