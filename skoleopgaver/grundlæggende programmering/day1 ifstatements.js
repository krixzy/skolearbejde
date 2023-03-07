//opgave 1
let opgaveNummer = 1
console.log(`opgavenummer ${opgaveNummer++}`) 
let number = 10
if(number % 2 == 0){
    console.log("number is even")
}else{
  console.log("number is odd")
}







//opgave 2
console.log(`opgavenummer ${opgaveNummer++}`) 

let opIFem = 50
if(opIFem % 5 == 0){
    console.log(opIFem +" går op i 5")
}else{
  console.log(opIFem + " går ikke op i 5")
}









//opgave 3
console.log(`opgavenummer ${opgaveNummer++}`)

let randomNumber = Math.floor(Math.random() * 100)
if(randomNumber % 5 == 0){
    console.log(randomNumber +" går op i 5")
}else{
  console.log(randomNumber + " går ikke op i 5")
}







//opgave 4
console.log(`opgavenummer ${opgaveNummer++}`)
let a = 25
let b = 33
let c = 12

if(a > b && a > c){
    console.log("a er størst")
}else if(b > c && b > a){
    console.log("b er størst")
}else{
    console.log("c er størst")
}
console.log(Math.max(a, b, c))





//opgave 5
console.log(`opgavenummer ${opgaveNummer++}`)

let temp = Math.floor(Math.random() * 50)
if(temp <= 0){
    console.log("Det er frostvejr")
}else if(temp <= 10){
    console.log("Det er meget koldt")
}else if(temp <= 20){
    console.log("Det er koldt")
}else if(temp <= 30){
    console.log("Det er normalt vejr")
}else if(temp <= 40){
    console.log("Det er varmt")
}else{
    console.log("Det er meget varmt")
}






//opgave 6
console.log(`opgavenummer ${opgaveNummer++}`)

let ugeDag = 5

switch(ugeDag){
    case 0: console.log("det er mandag")
    break;
    case 1: console.log("det er tirsdag")
    break;
    case 2: console.log("det er onsdag")
    break;
    case 3: console.log("det er torsdag")
    break;
    case 4: console.log("det er fredag")
    break;
    case 5: console.log("det er lørdag")
    break;
    case 6: console.log("det er søndag")
    break;
}