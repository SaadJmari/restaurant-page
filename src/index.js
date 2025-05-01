import "./styles.css"
import loadHome from "./home.js"
import loadMenu from "./menu.js"

const content = document.querySelector("#content")
const homeContent = loadMenu()

content.appendChild(homeContent)