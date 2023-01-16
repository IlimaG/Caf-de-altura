let coffeStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []


let produtcsCart = document.getElementById(`produtcsCart`)


const allProducts = () => {
    let totalProducts = 0
    let cuantityCest = document.getElementById(`cuantityCest`)

    produtcsCart.innerHTML = ``

    coffeStorage.forEach(coffe => {

        let shopTarget = document.createElement(`div`)
        shopTarget.setAttribute(`id`, `allProducts`)


        shopTarget.innerHTML = `
            <div id="infoCoffe">
                <div>
                    <button class="btnCoffe" onclick="minusCoffe(this)">-</button>
                    <span id="cuantityCoffe">${coffe.quantity}</span>
                    <button class="btnCoffe" onclick="addCoffe(this)">+</button>
                </div>

                <img src="${coffe.img_url}" alt="coffe ${coffe.brand}"> 
            
                <div>
                    <h5>${coffe.brand}</h5>
                   <p>Paquete de café, 250 gr</p>
                </div>
            </div>

            <h3>${coffe.price * coffe.quantity},00 €</h3>  
            
        `
        produtcsCart.appendChild(shopTarget)

        totalProducts += coffe.quantity
        cuantityCest.textContent = `Cesta (${totalProducts})`


    });

    if (coffeStorage.length === 0) {
        console.log("ouh yeah");
        produtcsCart.innerHTML = `
        <h4>Su cesta es vacia</h4>
        <a href="../pages/shop.html">Seguir comprando</a>
        `
        cuantityCest.textContent = `Cesta (0)`
    }
}

// BOTON AÑADIR PRODUCTO

const addCoffe = (button) => {
    button = button.parentNode.nextElementSibling.nextElementSibling.firstElementChild.textContent

    coffeStorage.forEach(coffe => {

        if (coffe.brand === button) {
            coffeStorage[coffeStorage.indexOf(coffe)].quantity++
        }
    })

    totalShop()
    allProducts()
    actCart()
}

// BOTON RESTAR PRODUCTO

const minusCoffe = (button) => {

    button = button.parentNode.nextElementSibling.nextElementSibling.firstElementChild.textContent

    coffeStorage.forEach(coffe => {

        if (coffe.brand === button) {
            coffeStorage[coffeStorage.indexOf(coffe)].quantity--
        }

        if (coffe.quantity === 0) {
            coffeStorage.splice(coffeStorage.indexOf(coffe), 1)
        }

    })

    totalShop()
    allProducts()
    actCart()
}

// TOTAL DEL CARRITO

let cartTotal = document.getElementById(`cartTotal`)
let express = document.getElementById(`express`)
let standard = document.getElementById(`standard`)

let totalprice = localStorage.getItem('totalprice') ? JSON.parse(localStorage.getItem('totalprice')) : []


const totalShop = (text = `GRATIS`) => {

    let price = 0
    let send = 0
    


    coffeStorage.forEach(coffe => {
        price += (coffe.price * coffe.quantity)
        send += (coffe.price * coffe.quantity)
    })
    
    if (express.checked) {
        text = "9,00 €"
        send += 9
        totalprice.push(send)
    }
    if (standard.cheched) {
        totalprice.push(price)
    }

   
    let iva = send - (send / 1.21)



    cartTotal.innerHTML = `
    <h3>Total del carrito</h3>
    <div>
        <p>SUBTOTAL <span>${price},00 €</span>
        <p>ENVIO <span>${text}</span>
    </div>
        <h5>TOTAL <span>${send},00 €</span></h5>
        <p id="iva">Incluye ${iva.toFixed(2)}€ de IVA</p> 
        <button id="goCheckout"><a href="../pages/checkout.html">Ir a checkout</a></button>
        <a id="goShop" href="../pages/shop.html">Seguir comprando</a>
    `

    if (coffeStorage.length === 0) {
        cartTotal.innerHTML = `
        <h3>Total del carrito</h3>
        <div>
            <p>SUBTOTAL <span>${price},00 €</span>
            <p>ENVIO <span>${text}</span>
         </div>
        <h5>TOTAL <span>0,00 €</span></h5>
        <p id="iva">Incluye ${iva.toFixed(2)}€ de IVA</p> 
        <button class="disabled" disabled>Ir a checkout</button>
        <a id="goShop" href="../pages/shop.html">Seguir comprando</a>
    `
        cuantityCest.textContent = `Cesta (0)`
    }

    localStorage.setItem('totalprice', JSON.stringify(totalprice))

}
totalShop()

standard.onclick = () => {
    totalShop(`GRATIS`)
}

express.onclick = () => {
    totalShop(`9,00 €`)
}

window.addEventListener("load", allProducts())






//////////////////////////////////////////


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
            coffeStorage[coffeStorage.indexOf(coffe)].quantity++
        }
    })

    actCart()
    allProducts()
}

// BOTON QUITAR PRODUCTO

const minus = (button) => {

    button = button.parentNode.firstElementChild.textContent

    coffeStorage.forEach(coffe => {

        if (coffe.brand === button) {
            coffeStorage[coffeStorage.indexOf(coffe)].quantity--
        }

        if (coffe.quantity === 0) {
            coffeStorage.splice(coffeStorage.indexOf(coffe), 1)
        }

    })

    actCart()
    allProducts()
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
