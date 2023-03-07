




let startbox = Math.ceil(Math.random() *5)
console.log(startbox)



//declerations of variables
let box1 = document.getElementById("buttom1")
let box2 = document.getElementById("buttom2")
let box3 = document.getElementById("buttom3")
let box4 = document.getElementById("buttom4")
let box5 = document.getElementById("buttom5")
let boxArray = [box1, box2, box3, box4, box5]





// let textButton = document.createElement("text")
// textButton.textContent = "i am a big button"
// document.body.appendChild(textButton)
//loop that checks if you click right or worng
boxArray.forEach((arr) =>{
    arr.addEventListener("click", ()=>{
        if(Number(arr.textContent) === startbox){
            document.getElementById("resultText").textContent = "You found the Cat congratulation"

        }else{
            document.getElementById("resultText").textContent = "No cat here try again"
            newNumber(startbox)
        }
    })
})


let newNumber = (arr)=>{
    let randomNumber = Math.floor(Math.random() * 2)
    switch(arr){
        case 1:
            startbox = 2
        break;
        case 2:
            startbox = randomNumber == 0 ? 1 : 3
        break;
        case 3:
            startbox = randomNumber == 0 ? 2 : 4
        break;
        case 4:
            startbox = randomNumber == 0 ? 3 : 5
        break;
        case 5:
            startbox = 4
        break;
    }
    // console.log(randomNumber)
    console.log(startbox)
}