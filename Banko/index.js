
   
   //laver en bankoplade opjeckt
class bankoPlade{
    constructor(id, r1, r2, r3){
        this.id = id
        this.row1 = r1
        this.row2 = r2
        this.row3 = r3
        this.rowArray = [this.row1, this.row2, this.row3]
        this.oneRow = false
        this.twoRow = false
    }
        //checker om det trukket tal er i en af rækkerne
    checkRow(num){
        this.rowArray.forEach((x) =>{
           if(x.indexOf(num) != -1){
            x.splice(x.indexOf(num), 1)
           }

           //hvis den ene række er tom og der ikke er en anden plade der har binko så er der binko
           if(x.length == 0 && oneRowCalled == false){
            console.log(("plade " + this.id + " har bingo 1 række"))
            alert("plade " + this.id + " har bingo 1 række")
            oneRowCalled = true
            this.oneRow = true
            this.rowArray.splice(this.rowArray.indexOf(x), 1)


                //hvis en række er tom og du allarede har half binko på 2 rækker
           }else if (x.length == 0) {
                if((this.twoRow && this.oneRow) == true && banko == false){
                    alert("plade " + this.id + " har banko!")
                    console.log("plade " + this.id + " har banko!")
                    banko = true
                }
                //hvis du har haft 1 række fuld og du får 1 række mere har du bingo på 2 rækker
                if(this.oneRow == true && twoRowCalled == false){
                    alert("plade " + this.id + " har bingo 2 rækker")
                    console.log("plade " + this.id + " har banko!")
                    twoRowCalled = true
                    this.twoRow = true
                    this.rowArray.splice(this.rowArray.indexOf(x), 1)


                    //hvis du får en række fuld men der er kald bingo på 1 række
                }else if(this.oneRow == false){
                    this.oneRow = true
                    this.rowArray.splice(this.rowArray.indexOf(x), 1)
                    
                    
                    //hvis du får 2 rækker fuld men der er kald bingo på 2 rækker
                }else if(this.twoRow == false){
                    this.twoRow = true
                    this.rowArray.splice(this.rowArray.indexOf(x), 1)
                }
        
           }
        })  
    }

        //laver de fysiske plader i htmlen
        pladesGenerator(){
            let newDiv = document.createElement("div")
            newDiv.className = "plade"
            let div1 = document.createElement("div")
            div1.className = "række1"
            this.boxGenerator(div1, this.row1)
            let div2 = document.createElement("div")
            div2.className = "række2"
            this.boxGenerator(div2, this.row2)
            let div3 = document.createElement("div")
            div3.className = "række3"
            this.boxGenerator(div3, this.row3)
            let idNum = document.createElement("p")
            idNum.className = "id"
            idNum.textContent = `Plade id: ${this.id}`
            let pladeDiv = document.createElement("div")
            pladeDiv.className = "border"
            
            newDiv.appendChild(idNum)
            newDiv.appendChild(pladeDiv)
            pladeDiv.appendChild(div1)
            pladeDiv.appendChild(div2)
            pladeDiv.appendChild(div3)
            pladerDiv.appendChild(newDiv)
        }
          //laver være kasse med 1 tal i
        boxGenerator(boxRown, array){
            let newArray = Array.from(array)
             for (let i = 0; i < 90; i += 10) {
              let newP = document.createElement("p")   
                 if(newArray[0] >= 1*i && newArray[0] <= 9 + i || newArray[0] == 90 && i == 80){
                     newP.textContent = newArray[0]
                     newArray.shift()
                     pArray.push(newP)
                 }else{
                     newP.textContent = ""
                    
                    
                 }
              boxRown.appendChild(newP)  
             }
         
         }
    
}



//laver variabler
let pArray = []
let pickedNumber = []
let randomNum = 0
let oneRowCalled = false
let twoRowCalled = false
let banko = false
let pladerDiv = document.getElementById("pladerDiv")
let pladesArray = []


//generar 1 tilfældig tal
let numberGenerator = ()=>  {
    return  Math.ceil(Math.random() * 90)

}



//checker om talet allarede blivet trukket og hvis det ikke er køre den de forskældige funcktioner
let numberCheck = () =>{
    
   randomNum = numberGenerator()

    while (pickedNumber.indexOf(randomNum) != -1) {
        randomNum = numberGenerator()
     
    }
    
        pladeCheck(randomNum)
        pickedNumber.push(randomNum)
        pladesArray.forEach(e =>{
            
            e.checkRow(randomNum)
        })
        pladeCheck()
       document.getElementById("trukkettal").textContent = randomNum

    
}


//går i gennem være firkant og ser om det nummer der er i den passer med det nummer der er trukket
let pladeCheck = (ele) =>{
pArray.forEach((x) =>{
    if(x.textContent == ele){
        x.style.backgroundColor = "#FFCB5B"
    }
})
}




//henter pladerne ind fra siden og laver dem til vært sit objeckt
let plateCreator = () =>{
let plates = (sessionStorage.getItem("plateIdAndNumbers").split(","))
while (plates.length > 0) {
    pladesArray.push(new bankoPlade(Number(plates[0]), [Number(plates[1]), Number(plates[2]), Number(plates[3]), Number(plates[4]), Number(plates[5])], [Number(plates[6]), Number(plates[7]), Number(plates[8]), Number(plates[9]), Number(plates[10])], [Number(plates[11]), Number(plates[12]), Number(plates[13]), Number(plates[14]), Number(plates[15])]))
    for (let i = 0; i <= 15; i++) {
        plates.shift()   
    }
}
pladesArray.forEach(x =>{
    x.pladesGenerator()
})
}


//gemmer det antal du har valgt og hopper over til banko siden for at hente dem
let amountGenerater = ()=>{
    sessionStorage.setItem("amount", document.getElementById("amount").value)
    window.location.href =" bankoSide/index.html"

}
//køre være gang siden bliver åbent for at se om du har hentet plader hvis ja laver den dem
let checkForPlates = () =>{
if(sessionStorage.getItem("plateIdAndNumbers")){
    plateCreator()
}else{
    console.log("ingen plader hentet")
}
}

checkForPlates() 