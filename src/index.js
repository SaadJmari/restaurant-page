import "./styles.css"
import loadHome from "./home.js"
import loadMenu from "./menu.js"

const content = document.querySelector("#content")
const menuBtn = document.querySelector("#menu")
const homeBtn = document.querySelector("#home")

content.appendChild(loadHome())

homeBtn.addEventListener("click", () => {
    content.textContent = ""
    content.appendChild(loadHome())
})

menuBtn.addEventListener("click", () => {
    content.textContent = ""
    content.appendChild(loadMenu())
})