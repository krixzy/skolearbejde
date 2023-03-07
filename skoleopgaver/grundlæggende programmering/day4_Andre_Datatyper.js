
//opgave 1
// let talrække = [0, 12, 0, 22, 300, 4, 5]
// let sum = 0
// talrække.forEach(element => {
//     sum += element
// });
// console.log(sum)



//opgave 2
// let talrække1 = [0, 12, 0, 22, 300, 4, 5]
// talrække1.forEach(element => {
//     console.log(element)
// });


//opgave 3
// let talrække2 = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12]
// let talrække3 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 122]
// let talArray = [talrække2, talrække3]
// talArray.forEach(element =>{
//     //console.log(element.indexOf(Math.max(...element)))
//     let indexOf = 0
//     element.forEach(x =>{
//         if(element[indexOf] < x){
//             indexOf = element.indexOf(x)
//         }
        
//     })
//     console.log(indexOf)
// })



//opgave 4
// let talrække4 = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12]
// let counter = 0
// talrække4.forEach(x =>{
//  if(x == 12){counter ++}
// })
// console.log(counter)


//opgave 5
// let talrække5 = [0, -12, 0, -22, -300, 4, 5, -12, 12, -212, 12]
// let counter = 0
// talrække5.forEach(x =>{
//     if(x > 0){counter++}
// })
// console.log(counter)


//opgave 6
   let talrække6 = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32]

let avgNum = (arr)=>{
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        counter += arr[i]
        
    }
   return counter / arr.length
}
  //  console.log((avgNum(talrække6)))

//opgave 7
    let varians = (arr) =>{
        let avg = avgNum(arr)
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += ((arr[i] - avg) ** 2)
        }
        return sum / arr.length
    }
    console.log(varians(talrække6))

console.log(Math.sqrt(varians(talrække6)))


//opgave 8
// const person1 = {
//     firstName: "Anders",
//     lastName: "Andersen",
//     age: 29,
//     eyeColor: "grøn"
//     };
//     const person2 = {
//     firstName: "Mads",
//     lastName: "Madsen",
//     age: 32,
//     eyeColor: "blå"
//     };
//     const person3 = {
//     firstName: "Mads",
//     lastName: "Madsen",
//     age: 55,
//     eyeColor: "brun"
//     };
//     let personArray = [person1, person2, person3]
//     let findPerson = (arr) => {
//         let returnArray = []
//         personArray.forEach(x =>{
//             if(x.age > 30 && x.eyeColor == "blå" || x.age > 30 && x.eyeColor == "grøn" || x.age > 30 && x.eyeColor == "rød"){
//                 returnArray.push(x.firstName, x.lastName)
//             }
//         })
//         return returnArray;
//     }
//  console.log(findPerson(personArray))


//opgave 9
// let dotFunction = (num)=>{
//     let printer = ""
// for (let x = 0; x < num; x++) {
//     printer += "*"
//     console.log(printer)
// }
// for (let x = num; x  > 1; x--) {
//     printer = printer.slice(0, -1)
//     console.log(printer)
    
// }
// }
// dotFunction(50)

//opgave 10

// const arrays1 = {
//     array1: [2,3,19,2,-1,-9,10,33],
//     array2: [03,57,-8,2,-21,-10,11,32],
//     array3: [100, -100, 200, -200, 10],
//     };

    
//     // console.log(Math.sqrt(varians(arrays1.array1)))






//     let anoyingFunc = (arrays) =>{
//     let highestAvgArray = 0
//     let highestArrayId = "0"
//     let lowestVariansArray = 0
//     let lowestVariansArrayId = "" 
//     let i = 0
//     for(let key in arrays){      
    
//      if(avgNum(arrays[key]) > highestAvgArray){
//         highestAvgArray = avgNum(arrays[key])
//         highestArrayId = key
//      }
//      if(i == 0){
//          lowestVariansArray = varians(arrays[key])
//          lowestVariansArrayId = key
//      }
//      if(varians(arrays[key]) < lowestVariansArray){
//         lowestVariansArray = varians(arrays[key])
//         lowestVariansArrayId = key
//      }
//       i++
//     }
    
//     console.log(result)
//     return result = {
//         highestAvg: highestArrayId,
//         lowestVarians: lowestVariansArrayId
//      }
     
// }
// console.log(anoyingFunc(arrays1))
