
const tarrazú = document.querySelector("#btnTarrazu")
const losNaranjos = document.querySelector("#btnLosNaranjos")
const laosAmanecer = document.querySelector("#btnLaosAmanecer")
const etiopíaYrgacheff = document.querySelector("#btnEtiopíaYrgacheff")
const shopCart = document.querySelector("#shopCart")


let coffeStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

product = [
    {
        idProduct: 1,
        name: "Costa Rica Tarrazú",
        price: 9.00,
        quantity : 0
    },
    {
        idProduct: 2,
        name: "Colombia Los Naranjos",
        price: 9.00,
        quantity : 0
    },
    {
        idProduct: 3,
        name: "Laos Amanecer",
        price: 9.00,
        quantity : 0
    },
    {
        idProduct: 4,
        name: "Etiopía Yrgacheff",
        price: 9.00,
        quantity : 0
    }
]

const newCoffe = (button) => {

    const coffe = document.createElement('li')
    shopCart.appendChild(coffe)

    switch (button) {
        case tarrazú:
            product[0].quantity++
            coffeStorage.push(product[0])
            localStorage.setItem('cart', JSON.stringify(coffeStorage))
            coffe.innerHTML = `<h5>${product[0].name}</h5> ${product[0].price}€ <button>+<button>${product[0].quantity}<button>-</button>  `
            break;
        case losNaranjos:
            product[1].quantity++
            coffe.innerHTML = `<h5>Colombia Los Naranjos</h5>${product[1].price}€ <button>+<button>${product[1].quantity}<button>-</button> `
            coffeStorage.push(product[1])
            localStorage.setItem('cart', JSON.stringify(coffeStorage))
            break;
        case laosAmanecer:
            product[2].quantity++
            coffe.innerHTML = `<h5>Laos Amanecer</h5>${product[2].price}€ <button>+<button>${product[2].quantity}<button>-</button> `
            coffeStorage.push(product[2])
            localStorage.setItem('cart', JSON.stringify(coffeStorage))
            break;
        case etiopíaYrgacheff:
            product[3].quantity++
            coffe.innerHTML = `<h5>Etiopía Yrgacheff</h5>${product[3].price}€ <button>+<button>${product[3].quantity}<button>-</button> `
            coffeStorage.push(product[3])
            localStorage.setItem('cart', JSON.stringify(coffeStorage))
            break;
        default:
            break;
    }

}

const cart = document.querySelector("#cart")

cart.onclick = (e) =>{
    e.preventDefault()

    if ( shopCart.style.display === "none") {
        shopCart.style.display = "block"
    }else {
        shopCart.style.display = "none"
    }
}

