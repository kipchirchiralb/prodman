let storedProducts = JSON.parse(localStorage.getItem("products"))
let productsContainer = document.querySelector(".products")

function renderProduct(desc, imglink, id){
    let productCard = document.createElement("div")
    let imageEl = document.createElement("img")
    let descEl = document.createElement("p")
    let delButton = document.createElement("button")

    productCard.classList.add("product")
    imageEl.setAttribute("src", imglink)
    imageEl.setAttribute("alt", desc)
    descEl.textContent = desc
    delButton.textContent = "delete"
    delButton.setAttribute("id", id)
    delButton.setAttribute("class", "delete-btn")

    productCard.append(imageEl)
    productCard.append(descEl)
    productCard.append(delButton)

    productsContainer.append(productCard)
}

function addEvents(){
    document.querySelectorAll(".delete-btn").forEach(btn=>{
        btn.addEventListener("click", (e)=>{
            console.log(e.target.id)
            deleteProduct(Number(e.target.id))
        })
})
}

function renderProducts(products){
    productsContainer.innerHTML = ""
    products.forEach(product=>{
        renderProduct(product.des, product.img, product.id)
    })
    addEvents()
}


function deleteProduct(id){
    let filteredProducts = JSON.parse(localStorage.getItem("products")).filter(product=> product.id != id )
    localStorage.clear()
    localStorage.setItem("products", JSON.stringify(filteredProducts)) 
    renderProducts(filteredProducts)
}

// form
function addProduct(desc, link){
    let uniqueID = Date.now() + Math.floor(Math.random()*9999999)
    let newProduct = {
        "id": uniqueID,
        "des": desc,
        "img": link
    }
    let currentProducts = JSON.parse(localStorage.getItem("products")) // existing products
    // array.push() to add new object(product) to existing products arr
    currentProducts.push(newProduct)
    // update the local storage
    localStorage.clear()
    localStorage.setItem("products", JSON.stringify(currentProducts))
    // render products from updated local strage
    renderProducts(currentProducts)
}

document.getElementById("new-product-form").addEventListener("submit", (e)=>{
        e.preventDefault()
        let descInput = document.getElementById("desc")
        let linkInput = document.getElementById("link")
        addProduct(descInput.value, linkInput.value)
        descInput.value = ""
        linkInput.value = ""
})

renderProducts(storedProducts)
