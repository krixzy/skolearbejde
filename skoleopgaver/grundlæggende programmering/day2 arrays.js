//opgave 1
let opgaveNummer = 1
console.log(`opgavenummer ${opgaveNummer++}`)
let byer = ["Randers", "Viborg", "Aarhus", "København"]
console.log(byer[1])



//opgave 2
console.log(`opgavenummer ${opgaveNummer++}`)
byer.push("Skive")
console.log(byer)

//opgave 3
console.log(`opgavenummer ${opgaveNummer++}`)
let talrække = [0, 1, 0, 3, 4, 5, 6]
talrække.splice(2, 1, 2)
console.log(talrække)

//opgave 4
console.log(`opgavenummer ${opgaveNummer++}`)
let talrække1 = [1, 2, 3, 4, 11, 55, 99, 100]

//console.log(Math.max(...talrække1))
 let highNumber = (arr)=>{
    let counter = 0
    arr.forEach(element => {
        if(element > counter){
            counter = element
        }
    });
    console.log(counter)
 }
 highNumber(talrække1)
//opgave 5
console.log(`opgavenummer ${opgaveNummer++}`)
let talrække2 = [0, 12, 0, 22, 300, 4, 5]
talrække2.sort((a, b) =>{
    return a - b
})
console.log(talrække2)


//opgave 6 
console.log(`opgavenummer ${opgaveNummer++}`)
let talrække3 = [0, 12, 0, 22, 300, 4, 5]
talrække3.sort((a, b) =>{
    return  b - a
})
console.log(talrække3)
