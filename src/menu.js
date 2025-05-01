import krabbyPatty from "./assets/Krabby_Patty_icon.webp"
import deluxKP from "./assets/Deluxe_Krabby_Patty.webp"
import frenchFries from "./assets/French_fries.webp"
import krustyK from "./assets/Krusty_Kids.webp"
import coralB from "./assets/Coral_Bits_HD.PNG.webp"
import kelpFries from "./assets/Kelp_Fries.webp"

function createMenuItem(foodImg, foodPrice, foodNames) {
    const item = document.createElement("div")
    item.classList.add("menu-item")

    const img = document.createElement("img")
    img.src = foodImg
    img.alt = "Food image"
    img.classList.add("item-img")

    const price = document.createElement("p")
    price.textContent = foodPrice
    price.classList.add("item-price")

    const foodName = document.createElement("h1")
    foodName.textContent = foodNames

    const foodText = document.createElement("div")
    foodText.classList.add("item-text")

    foodText.appendChild(foodName)
    foodText.appendChild(price)
    item.appendChild(foodText)
    item.appendChild(img)


    return item
}

const loadMenu = () => {
    const menu = document.createElement("div")
    menu.classList.add("menu-container")

    menu.appendChild(createMenuItem(krabbyPatty, "11,99$", "Krabby Patty"))
    menu.appendChild(createMenuItem(deluxKP, "14,99$", "Deluxe Krabby Patty"))
    menu.appendChild(createMenuItem(frenchFries, "4,99$", "French Fries"))
    menu.appendChild(createMenuItem(kelpFries, "6,99$", "Kelp Fries"))
    menu.appendChild(createMenuItem(coralB, "6,99$", "Koral Bits"))
    menu.appendChild(createMenuItem(krustyK, "11,99$", "Krusty Kids"))

    return menu
}

export default loadMenu