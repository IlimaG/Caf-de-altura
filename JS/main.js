
const tarrazú = document.querySelector("#btnTarrazu")
const losNaranjos = document.querySelector("#btnLosNaranjos")
const laosAmanecer = document.querySelector("#btnLaosAmanecer")
const etiopíaYrgacheff = document.querySelector("#btnEtiopíaYrgacheff")
const shopCart = document.querySelector("#shopCart")

localStorage.clear()

let coffeStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

coffeStorage = []

// PRODUCTOS

product = [
    {
        idProduct: 1,
        name: "Costa Rica Tarrazú",
        price: 9.00,
        stock: 5,
        quantity: 0
    },
    {
        idProduct: 2,
        name: "Colombia Los Naranjos",
        price: 9.00,
        stock: 8,
        quantity: 0
    },
    {
        idProduct: 3,
        name: "Laos Amanecer",
        price: 9.00,
        stock: 3,
        quantity: 0
    },
    {
        idProduct: 4,
        name: "Etiopía Yrgacheff",
        price: 9.00,
        stock: 7,
        quantity: 0
    }
]

// AÑADIR CAFE SELECCIONADO AL LOCAL STORE 

const newCoffe = (button) => {
    switch (button) {
        case tarrazú:
            product[0].quantity++
            coffeStorage.push(product[0])
            localStorage.setItem('cart', JSON.stringify(coffeStorage))
            break;
        case losNaranjos:
            product[1].quantity++
            coffeStorage.push(product[1])
            localStorage.setItem('cart', JSON.stringify(coffeStorage))
            break;
        case laosAmanecer:
            product[2].quantity++
            coffeStorage.push(product[2])
            localStorage.setItem('cart', JSON.stringify(coffeStorage))
            break;
        case etiopíaYrgacheff:
            product[3].quantity++
            coffeStorage.push(product[3])
            localStorage.setItem('cart', JSON.stringify(coffeStorage))
            break;
        default:
            break;
    }
    noDuplicates(button)
}


// FUNCION NO DUPLICADOS 

function noDuplicates() {
    shopCart.innerHTML = ''


    let noDuplicates = coffeStorage.filter((item, index) => {
        return coffeStorage.indexOf(item) === index;
    })

    noDuplicates.forEach(e => {
        shopCart.innerHTML += `<div><h5>${e.name}</h5>${e.price}€ <button>+</button>${e.quantity}<button onclick = "deleteNote()">-</button> <br> <p> Total: ${e.price * e.quantity} €</p> </div>`
    })

    coffeStorage = noDuplicates
    localStorage.setItem('cart', JSON.stringify(coffeStorage))
}

// BOTON MENOS 

const deleteNote = (button) => {





    noDuplicates(button)
}


// MOSTRAR/OCULTAR CESTA

const cart = document.querySelector("#cart")

cart.onclick = (e) => {
    e.preventDefault()
    if (shopCart.style.display === "none") {
        shopCart.style.display = "block"
    } else {
        shopCart.style.display = "none"
    }
}


