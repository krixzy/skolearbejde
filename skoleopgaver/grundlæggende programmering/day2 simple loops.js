//opgave 1
let opgaveNummer = 1
console.log("opgaver nummer " + opgaveNummer++)
for (let x = 1; x <= 100; x++) {
    console.log(x)
}
//opgave 2
console.log("opgaver nummer " + opgaveNummer++)
for (let x = 0; x <= 100; x++) {
    console.log(x, x+1, x+2)
}
//opgave 3
console.log("opgaver nummer " + opgaveNummer++)
for (let x = 0; x <= 100; x++) {
   if(x % 3 == 0 && x % 5 == 0){
    console.log(x, "FizzBuzz")
   }else if (x % 5 == 0) {
    console.log(x, "Buzz")
   }else if(x % 3 == 0){
    console.log(x, "Fizz")
   }
}
console.log("opgave 3,1")
let counter = 0
while (counter < 100) {
    if(counter % 3 == 0 && counter % 5 == 0){
        console.log(counter, "FizzBuzz")
       }else if (counter % 5 == 0) {
        console.log(counter, "Buzz")
       }else if(counter % 3 == 0){
        console.log(counter, "Fizz")
       } 
       counter++
}
//opgave 4
console.log("opgaver nummer " + opgaveNummer++)
let tallet = 10
let resultat = 1
for (let x = 1; x <= tallet; x++) {
    resultat *= x
}

let counter1 = 1
let tallet1 = 15
let resultat1 = 1
while (counter1 <= tallet1) {
    resultat1 *= counter1
    counter1++
}
console.log(resultat)
console.log(resultat1)

//opgave 5
console.log("opgaver nummer " + opgaveNummer++)
let number = 15
for (let x = 0; x <= number; x++) {
    console.log(x * number) 
}
console.log()