console.log("Kodlama IO")

var  dolarDun=9.20
let  dolarBugun=9.30
{
    var dolarDun=9.10
}

console.log(dolarDun)

const euroDun=11.2

//euroDun=11

console.log(euroDun)

let konutKredileri=["Konut","Emlak Konut","Kamu"]
console.log("<ul>")
for(let i =0; i<konutKredileri.length;i++){
  console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
console.log(konutKredileri);