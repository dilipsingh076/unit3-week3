

main()

function main() {

    let purchasedata = JSON.parse(localStorage.getItem("purchase"))

    append(purchasedata)
    let userdata=JSON.parse(localStorage.getItem("user"))
    let balance=userdata.wallet
    document.querySelector("#wallet_balance").innerText=balance
    document.querySelector("#balance").innerText=balance


   
}



function append(data) {
    let container = document.querySelector("#purchased_vouchers")

    data.forEach(function (ele) {
        let div = document.createElement("div")
        div.setAttribute("class", "voucher")

        let image = document.createElement("img")
        image.src = ele.image
        // console.log(image)

        let name = document.createElement("p")
        name.innerText = ele.name
        // console.log(name)

        let price = document.createElement("p")
        price.innerText = ele.price
        // console.log(price)

       

        div.append(image, name, price)
        container.append(div)

    })
}

