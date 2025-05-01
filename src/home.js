const loadHome = () => {
    const content = document.createElement("div")
    const textDiv = document.createElement("div")
    const imgDiv = document.createElement("div")
    const restDesc = document.createElement("p")
    const restTitle = document.createElement("h1")

    textDiv.classList.add("text-section")
    imgDiv.classList.add("img-section")
    restTitle.classList.add("rest-title")
    restDesc.classList.add("rest-desc")

    restTitle.textContent = "Welcome to Krusty Krub"

    content.appendChild(textDiv)
    content.appendChild(imgDiv)
    textDiv.appendChild(restTitle)
    textDiv.appendChild(restDesc)


    return content
}

export default loadHome