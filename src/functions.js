function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi! "+ productName +" Adet :" + quantity)
}
addToCart()
addToCart("Elma",10)
addToCart("Yumurta")
addToCart(10)

let sayHello=() => {
    console.log("Hello")
}

sayHello()

let sayHello2 =function(params) {
    console.log("Hello2")
}

sayHello2();