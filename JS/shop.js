

// PRODUCTOS ALLSHOP
axios
    .get(`https://cafe-de-altura-api.vercel.app/api/products`)
    .then(response => {
        const products = response.data.products

        let allShop = document.getElementById(`allShop`)

        products.forEach(coffe => {

            let target = document.createElement(`div`)
            if (!coffe.available) {
                target.style.opacity = `40%`
            }
            allShop.appendChild(target)

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
            if (!coffe.available) {
                coffeBtn.setAttribute(`disabled`, `disabled`)
            }
            target.appendChild(coffeBtn)


            coffe.quantity = 1
            coffeBtn.onclick = () => {

                const existe = coffeStorage.some(prod => prod._id === coffe._id)

                if (existe) {
                    coffeStorage.map(prod => {
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
