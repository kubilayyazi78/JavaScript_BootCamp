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

function addToCart2(productName,quantity,unitPrice){

}
addToCart2("elma",5,10)
let product1={productName:"Elma",unitPrice:10,quantity:5}
function addToCart3(product) {
    console.log("Ürün" + product.productName +"Adet : " + product.quantity)
    console.log("Ürün fiyat " + product.unitPrice)
}

addToCart3(product1)

let product2={productName:"Elma",unitPrice:10,quantity:5}
let product3={productName:"Elma",unitPrice:10,quantity:5}

product2=product3
product2.productName="Karpuz"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
}

let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCart4(products)

/*function add(number1,number2) {
    console.log(number1+number2)
}
add(20,30)*/

function add(...numbers) {
    let total=0;
    for(let i=0; i<numbers.length; i++){
        console.log(numbers[i])
        total=total+numbers[i]
    }
    console.log(total)
}
add(20,30)
add(20,30,40)

let numbers=[10,300,20,500,6000]

console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name:"İç Anadolu",population:"20m"},
    {name:"Marmara",population:"30m"},
    {name:"Karadeniz",population:"10m"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]
console.log(icAnadolu.population)
console.log(marmara.name)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} ={productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)