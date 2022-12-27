// DROP-DOWN

const buttonDropDown1 = document.querySelector(".dropDown1")
const text1 = document.querySelector(".text1")

buttonDropDown1.onclick = () => {

    if (text1.style.display === "block") {
        text1.style.display = "none "
    } else {
        text1.style.display = "block"
    }

}

const buttonDropDown2 = document.querySelector(".dropDown2")
const text2 = document.querySelector(".text2")

buttonDropDown2.onclick = () => {

    if (text2.style.display === "none") {
        text2.style.display = "block"
    } else {
        text2.style.display = "none"
    }

}

const buttonDropDown3 = document.querySelector(".dropDown3")
const text3 = document.querySelector(".text3")

buttonDropDown3.onclick = () => {

    if (text3.style.display === "none") {
        text3.style.display = "block"
    } else {
        text3.style.display = "none"
    }

}



