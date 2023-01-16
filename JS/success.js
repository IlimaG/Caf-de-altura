let totalprice = localStorage.getItem('totalprice') ? JSON.parse(localStorage.getItem('totalprice')) : []

let order =  document.getElementById(`order`)

const yourOrder = (text = `9,00 €`) => {
    let price = 0

    coffeStorage.forEach(coffe => {
        price += (coffe.price * coffe.quantity)
    })

    if (totalprice[totalprice.length - 1] == price) {
        text = `GRATIS`
    }

    let iva = totalprice[totalprice.length - 1] - (totalprice[totalprice.length - 1] / 1.21)

    coffeStorage.forEach(coffe => {
        let target = document.createElement(`div`)
        target.setAttribute(`class`, `allProducts`)


        target.innerHTML = `
            <div class = "infoAllProducts">

                <img src="${coffe.img_url}" alt="coffe ${coffe.brand}"> 
            
                <div>
                    <h5>${coffe.brand}</h5>
                   <p>Paquete de café, 250 gr</p>
                   <p>Cantidad: ${coffe.quantity}</span>
                </div>
            </div>

            <h3>${coffe.price * coffe.quantity},00 €</h3>  
            
        `
        order.appendChild(target)

    })

    order.innerHTML += `
        <div id = "totalPrice">
            <div id = "subtotal">
                <p>SUBTOTAL <span>${price},00 €</span>
                <p>ENVIO <span>${text}</span>
            </div>
            <h5>TOTAL<span>${totalprice[totalprice.length - 1]},00 €</span></h5>
            <p id="iva">Incluye ${iva.toFixed(2)}€ de IVA</p>  
        </div>
    `

    
}

yourOrder()

coffeStorage = []
totalprice = []
    actCart()
