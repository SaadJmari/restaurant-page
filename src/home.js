import RestImg from "./assets/SpongeChovy_065.webp"

const loadHome = () => {
    const content = document.createElement("div")
    const textDiv = document.createElement("div")
    const imgDiv = document.createElement("div")
    const restDesc = document.createElement("p")
    const restTitle = document.createElement("h1")
    const restImage = document.createElement("img")

    content.classList.add("home-content")
    textDiv.classList.add("text-section")
    imgDiv.classList.add("img-section")
    restTitle.classList.add("rest-title")
    restDesc.classList.add("rest-desc")
    restImage.classList.add("rest-img")

    restTitle.textContent = "Welcome to Krusty Krub"
    restImage.src = RestImg
    restImage.alt = "Restaurant Image"
    restDesc.textContent = "Welcome to the Krusty Krub — where every bite tastes like an undersea hug!.\n Our patties are flippin' fabulous, our fries are saltier than Squidward, and our secret sauce is... well, still a secret (don't ask Plankton). Whether you're a hungry jellyfisher, a sea-star snacker, or just lost in Bikini Bottom, we've got something delicious to soak your gills.\n Dive in, grab a tray, and remember — refills on jellyfish jelly are free (if you can catch 'em)"

    imgDiv.appendChild(restImage)
    content.appendChild(textDiv)
    content.appendChild(imgDiv)
    textDiv.appendChild(restTitle)
    textDiv.appendChild(restDesc)


    return content
}

export default loadHome