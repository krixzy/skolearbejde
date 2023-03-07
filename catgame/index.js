
        //variable creations
let startbox = 0
let getAmount = document.getElementById("amount")
let buttons = document.getElementById("buttons")
let boxArray = []
let gameStarted = false
let resultText = document.getElementById("resultText")




//botton creater
let buttomMaker = (x) =>{
    if(gameStarted == false){
        gameStarted = true
    startbox = Math.ceil(Math.random() * getAmount.value)
 for (let i = 1; i <= getAmount.value; i++) {



            //laver kasser
    let newBox = document.createElement("button")
        newBox.textContent = i
        newBox.className = "boxClass"
    boxArray.push(newBox)
    buttons.appendChild(newBox)




        // sætter pile ind mellem kasserne
    let newText = document.createElement("text")
    newText.textContent = `\u{02194}`;
    buttons.appendChild(newText)

 }


    //fjerne den sidste pil
 buttons.removeChild(buttons.lastChild)



    //checker om du clicker på en af kasserne
  
boxArray.forEach((x) =>{
    x.addEventListener("click", () =>{  
        if(document.getElementById("catPop").hidden == true){  
            
            
            //hvis du rammer katen
        if(startbox === Number(x.textContent)){
            resultText.textContent = "You found the Cat"
            document.getElementById("catPop").hidden = false
            catFound = true
          
          
            //hvis du rammer ved siden af
        }else{
            resultText.textContent = ""
            setTimeout(() =>{
                resultText.textContent = "No cat here try again"
            }, 60)
             if(startbox > 1 && startbox < boxArray.length){
             Math.floor(Math.random() * 2) == 1? startbox ++ : startbox -- 
             }else if(startbox == 1){
                startbox ++
             }else if(startbox == boxArray.length){
                startbox --
             }else{
                console.log("Error somthing went worng you dumbass try again")
             }
              console.log(startbox)
            //  console.log(boxArray.length)
        }

}})
    })

        
    
    //hover fave skift
boxArray.forEach((x) =>{
    x.addEventListener("mouseover",()=>{
   x.style.backgroundColor = "orangered"
    })
})
boxArray.forEach((x) =>{
    x.addEventListener("mouseout",()=>{
   x.style.backgroundColor = "orange"
    })
})


}
console.log(startbox)
}