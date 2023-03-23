function renderProduct(desc, imglink, id){
    let productCard = document.createElement("div")
    productCard.classList.add("product")
    let imageEl = document.createElement("img")
    imageEl.setAttribute("src", imglink)
    imageEl.setAttribute("alt", desc)
    let descEl = document.createElement("p")
    descEl.textContent = desc

    let delButton = document.createElement("button")
    delButton.textContent = "delete"
    delButton.setAttribute("id", id)
    delButton.setAttribute("class", "delete-btn")

    productCard.append(imageEl)
    productCard.append(descEl)
    productCard.append(delButton)

    document.querySelector(".products").append(productCard)
}

let prods = JSON.parse(localStorage.getItem("products"))
// console.log(products)
function renderProducts(products){
    document.querySelector(".products").innerHTML = ""
    products.forEach(prod=>{
        renderProduct(prod.des, prod.img, prod.id)
    })
}

renderProducts(prods)

function addEvents(){
    document.querySelectorAll(".delete-btn").forEach(btn=>{
        btn.addEventListener("click", (e)=>{
            console.log(e.target.id)
            deleteProduct(Number(e.target.id))
        })
})
}
addEvents()


function deleteProduct(id){
    let filteredProducts = prods.filter(product=> product.id !== id )
    localStorage.clear()
    localStorage.setItem("products", JSON.stringify(filteredProducts)) 
    prods = JSON.parse(localStorage.getItem("products"))
    renderProducts(prods)
    addEvents()
}

// form

function addProduct(){
    // array.push() to add new object(product) to products arr
    // update the local storage
    // render products from updated local strage
    // addEvents()
}



