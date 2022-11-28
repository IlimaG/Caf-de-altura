
localStorage.clear()

let coffeStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

coffeStorage = []

// PRODUCTOS

product = [
    {
        idProduct: 1,
        name: "Costa Rica Tarrazú",
        price: 9.00,
        quantity: 0,
        imagen: `<img src="./assets/img/Images.png" alt="Costa Rica Tarrazú" class="imgCartShop">`
    },
    {
        idProduct: 2,
        name: "Colombia Los Naranjos",
        price: 9.00,
        quantity: 0,
        imagen: `<img src="./assets/img/Images (1).png" alt="Colombia Los Naranjos" class="imgCartShop"> `

    },
    {
        idProduct: 3,
        name: "Laos Amanecer",
        price: 9.00,
        quantity: 0,
        imagen: `<img src="./assets/img/Images (2).png" alt="Laos Amanecer" class="imgCartShop">`
    },
    {
        idProduct: 4,
        name: "Etiopía Yrgacheff",
        price: 9.00,
        quantity: 0,
        imagen: `<img src="./assets/img/Images (3).png" alt="Etiopía Yrgacheff" class="imgCartShop"> `

    }
]

// AÑADIR CAFE SELECCIONADO AL LOCAL STORE

const tarrazú = document.querySelector("#btnTarrazu")
const losNaranjos = document.querySelector("#btnLosNaranjos")
const laosAmanecer = document.querySelector("#btnLaosAmanecer")
const etiopíaYrgacheff = document.querySelector("#btnEtiopíaYrgacheff")
const cest = document.querySelector("#cest")

const newCoffe = (button) => {
    switch (button) {
        case tarrazú:
            product[0].quantity++
            coffeStorage.push(product[0])
            cest.style.display = "flex"
            break;
        case losNaranjos:
            product[1].quantity++
            coffeStorage.push(product[1])
            cest.style.display = "flex"
            break;
        case laosAmanecer:
            product[2].quantity++
            coffeStorage.push(product[2])
            cest.style.display = "flex"
            break;
        case etiopíaYrgacheff:
            product[3].quantity++
            coffeStorage.push(product[3])
            cest.style.display = "flex"
            break;
        default:
            break;

            
    }

    noDuplicates(button)
}

       

// FUNCION ACTUALIZAR LOCAL STORAGE / IMPRIMiR CESTA / PRODUCTOS TOTALES 

const shopCart = document.querySelector("#shopCart")
let total = document.querySelector("#total")
const totalProducts = document.querySelector("#totalProducts")

function noDuplicates() {
    shopCart.innerHTML = ''

    let noDuplicates = coffeStorage.filter((item, index) => {
        return coffeStorage.indexOf(item) === index;
    })

    noDuplicates.forEach(e => {

        if (e.quantity === 0) {
            noDuplicates.splice(noDuplicates.indexOf(e), 1)
        }
    })


    let price = 0
    let totalsProducts = 0


    noDuplicates.forEach( e=> {
        shopCart.innerHTML += `<div id="product">${e.imagen}<div><div id="id">${e.idProduct}</div><h5>${e.name}</h5><p id="priceU">Precio unidad: ${e.price}€</p> <button id="add" onclick = "add(this)">+</button><span id="cuantity">${e.quantity}</span>
        <button id="minus" onclick = "minus(this)">-</button> <button id="deleteProduct" onclick = "deleteProduct(this)">X </button> <p> Total: ${e.price * e.quantity} €  </p></div> </div>`
        price += (e.price * e.quantity)
        totalsProducts += e.quantity
    })

    shopCart.innerHTML += `<p id="subTotal">Subtotal (${totalsProducts} productos): ${price} € </p>`

    if (totalsProducts === 0) {
        totalProducts.style.display = "none"
    } else {
        totalProducts.innerHTML = totalsProducts
        totalProducts.style.display = "inline"
    }
    

    if (noDuplicates.length <= 0) {
        cest.style.display = "none"
        shopCart.innerHTML = `<div id="emptyCart"> La cesta esta vacia</div>`
    }
    
    coffeStorage = noDuplicates
    localStorage.setItem('cart', JSON.stringify(coffeStorage))
}

// BOTON QUITAR PRODUCTO

const minus = (button) => {

    let minusCoffe = button.parentNode.textContent
    let arr = minusCoffe
    arr = [...arr]

    if (arr[0] == '1') {
        if(product[0].quantity === 0){
            return
        }
        product[0].quantity--
    }
    if (arr[0] == "2") {
        if(product[1].quantity === 0){
            return
        }
        product[1].quantity--
    }
    if (arr[0] == "3") {
        if(product[2].quantity === 0){
            return
        }
        product[2].quantity--
    }
    if (arr[0] == "4") {
        if(product[3].quantity === 0){
            return
        }
        product[3].quantity--
    }

    noDuplicates()
}

// BOTON AÑADIR PRODUCTO

const add = (button) => {

    let addCoffe = button.parentNode.textContent
    let arr = addCoffe
    arr = [...arr]

    if (arr[0] == '1') {
        product[0].quantity++
    }
    if (arr[0] == "2") {
        product[1].quantity++
    }
    if (arr[0] == "3") {
        product[2].quantity++
    }
    if (arr[0] == "4") {
        product[3].quantity++
    }

    noDuplicates()

}

// BORRAR CESTA ENTERA 

const deleteAll = document.querySelector("#deleteAll")

deleteAll.onclick = (e) => {
    e.preventDefault()
    coffeStorage = []
    noDuplicates()
    shopCart.innerHTML = `<div id="emptyCart"> La cesta esta vacia</div>`
    cest.style.display = "none"
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

// ELIMINAR ESE PRODUCTO 

const deleteProduct = (button) => {

    let deleteThisCoffe = button.parentNode.textContent
    let arr = deleteThisCoffe
    arr = [...arr]
    id = arr[0]
console.log(deleteThisCoffe);
console.log(arr);
console.log(id);

    let deleteProduct = coffeStorage
    deleteProduct.forEach(e => {
        
        if (id == e.idProduct) {
            deleteProduct.splice(deleteProduct.indexOf(e), 1)
            e.quantity = 0
        }
    })

    arr = []
    noDuplicates()
}

