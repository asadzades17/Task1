let productsDiv = document.querySelector(".third-box")

async function GetDatas() {
    try {
        let result = await axios.get("https://northwind.vercel.app/api/suppliers")
        for (let i = 0; i < result.data.length; i++) {
            CreateProduct(result.data[i])
        }
    } catch (err) {
        console.log(err)
    }
}

function CreateProduct(product) {
    let productContainer = document.createElement("div")
    productContainer.style.width = "30%"
    productContainer.style.display = "flex"
    productContainer.style.flexDirection = "column"
    productContainer.style.border = "1px solid #212529"
    productContainer.style.borderRadius = "0.375rem"
    productContainer.style.overflow = "hidden"

    let product_top = document.createElement("div")
    product_top.style.padding = "20px"
    product_top.style.backgroundColor = "white"
    product_top.style.height = "180px"

    let h1 = document.createElement("h1")
    h1.textContent = product.companyName
    h1.style.fontSize = "24px"
    h1.style.margin = "0 0 10px"
    

    let p = document.createElement("p")
    p.textContent = product.contactTitle
    p.style.fontSize = "16px"
    p.style.margin = "0"
    p.style.color = "black"
    product_top.appendChild(h1)
    product_top.appendChild(p)

    let product_bottom = document.createElement("div")
    product_bottom.style.height = "30px"
    product_bottom.style.padding = "15px"
    product_bottom.style.backgroundColor = " #00000008"
    product_bottom.style.display = "flex"
    product_bottom.style.justifyContent = "flex-start"

    let button = document.createElement("button")
    button.textContent = "More Info"

    product_bottom.appendChild(button)

    productContainer.appendChild(product_top)
    productContainer.appendChild(product_bottom)
    productsDiv.appendChild(productContainer)
}

GetDatas()
