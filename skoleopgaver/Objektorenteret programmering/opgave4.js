//opgave 4

let div = document.getElementById("cars")
let inputArray = []
let inputDiv = document.getElementById("inputs")
let typesDiv = document.getElementById("types")

let arrayOfCars = []
let arrayOfGokart = []
let showCarsOnly = false
let showBikesOnly = false
let showGokartsOnly = false
let showAllOnly = true







let types = `  <div id="inputs" >
<div id="types" class="buttons">
    <div class="types">
    <button id="car" onclick="carCreate()">Tilføj bil</button>
    <button id="bike" onclick="bikeCreate()">Tilføj cykel</button>
    <button id="gokart" onclick="gokartCreate()">Tilføj gokart</button>
    </div>
    <div class="show">
    <button id="showCars" onclick="showCars(), displayColor()">vis kun biler</button>
    <button id="showBikes" onclick="showBikes(), displayColor()">vis kun cykler</button>
    <button id="showGokart" onclick="showGokarts(), displayColor()">vis kun gokarts</button>
    <button id="showAll" onclick="showAll(), displayColor()">Vis alle</button>
    </div>
   </div>
</div>`





class Car {
    #model
    #age
    #color
    #price
    #km
    #photo
    constructor(model, age, color, price, km, photo){
        this.#model = model,
        this.#age = age,
        this.#color = color,
        this.#price = price,
        this.#km = km,
        this.#photo = photo
    }


    createCar (){
        let car = document.createElement("div")
        car.className = "carClass"
        div.appendChild(car)

        let textDiv = document.createElement("div")
        textDiv.className = "textDiv"
        car.appendChild(textDiv)

        let p2 = document.createElement("p")
        p2.textContent = `${this.#price}kr`
        p2.className = "pris"
        textDiv.appendChild(p2)

        let img = document.createElement("img")
        img.src = this.#photo
        textDiv.appendChild(img)

        let p = document.createElement("p")
        p.textContent = `Model: ${this.#model}`
        textDiv.appendChild(p)

        let p3 = document.createElement("p")
        p3.textContent = (`Modelår: ${this.#age}`)
        textDiv.appendChild(p3)

        let p4 = document.createElement("p")
        p4.textContent = (`Farve: ${this.#color}`)
        textDiv.appendChild(p4)

        let p5 = document.createElement("p")
        p5.textContent = (`Kilometer: ${this.#km}km`)
        p5.id = "kmText"
        textDiv.appendChild(p5)

        let buttomDiv = document.createElement("div")
        buttomDiv.className = "textDiv"
        car.appendChild(buttomDiv)

        let buttom = document.createElement("button")
        buttom.textContent = "Slet bil"
        buttom.addEventListener("click", ()=>{this.removeCar(car)})
        buttomDiv.appendChild(buttom)
        
        return [textDiv, p5, car, buttom]
       
        

    }
    removeCar(x){
       x.remove()
    }
    drive(){
        console.log("drive")
    }

}






class Gokart extends Car{
    #hp
    #gear
    constructor(model, age, color, price, photo, hp, gears){
        super(model, age, color, price, 0, photo)
        this.#hp = hp
        this.#gear = gears
    }
    createGokart(){
        super.drive()
       let textDiv = super.createCar();
        textDiv[2].className = "gokartClass"
        textDiv[1].remove()
        textDiv[3].textContent = "Slet gokart"

        let p4 = document.createElement("p")
        p4.textContent = (`Hæstekræfter: ${this.#hp}`)
        textDiv[0].appendChild(p4)

        let p5 = document.createElement("p")
        p5.textContent = (`Antal gear: ${this.#gear}`)
        textDiv[0].appendChild(p5)
    }

}



class Bike extends Car{
#gear
#power
constructor(model, age, color, price, photo, power, gear){
    super(model, age, color, price, 0, photo)
    this.#gear = gear
    this.#power = power
}
createBike(){
    super.drive()
    let textDiv = super.createCar()
    textDiv[2].className = "bikeClass"
    textDiv[1].remove()
    textDiv[3].textContent = "Slet cykel"

    let p4 = document.createElement("p")
    p4.textContent = (`Antal gear: ${this.#power}`)
    textDiv[0].appendChild(p4)

    let p5 = document.createElement("p")
    p5.textContent = (`Med el-motor: ${this.#gear}`)
    textDiv[0].appendChild(p5)
}

}



let newCar = ()=>{
    inputArray = Array.from(document.getElementsByClassName("inp"))
    new Car(inputArray[0].value, inputArray[1].value, inputArray[2].value, inputArray[3].value, inputArray[4].value, inputArray[5].value).createCar()
    document.getElementById("newCar").remove()
    inputDiv.innerHTML = types
}




let newGokart = ()=>{
    inputArray = Array.from(document.getElementsByClassName("inp"))
   new Gokart(inputArray[0].value, inputArray[1].value, inputArray[2].value, inputArray[3].value, inputArray[4].value, inputArray[5].value, inputArray[6].value).createGokart()
   document.getElementById("newCar").remove()
   inputDiv.innerHTML = types
}



let newBike = ()=>{
    inputArray = Array.from(document.getElementsByClassName("inp"))
    new Bike(inputACarray[0].value, inputArray[1].value, inputArray[2].value, inputArray[3].value, inputArray[4].value, inputArray[5].value, inputArray[6].value).createBike()
    document.getElementById("newCar").remove()
    inputDiv.innerHTML = types


}



let back = ()=>{
    document.getElementById("newCar").remove()
    inputDiv.innerHTML = types
}








let carCreate = () =>{
    typesDiv.remove()
    let html = 
    `<div id="newCar" class="newCar">
    <div class="inputs">
    <p>Model:</p>
    <input class="inp" type="text" placeholder="Model">
    </div>
    <div class="inputs">
        <p>Model år:</p>
    <input class="inp" type="number" placeholder="Model år">
    </div>
    <div class="inputs">
    <p>Farve:</p>
    <input class="inp" type="text" placeholder="Farve">
    </div>
    <div class="inputs">
    <p>Prisen:</p>
    <input class="inp" type="text" placeholder="Prisen">
    </div>
    <div class="inputs">
    <p>Antal km</p>
    <input class="inp" type="text" placeholder="Antal km">
    </div>
    <div class="inputs">
    <p>billed</p>
    <input class="inp" type="text" id="photo" placeholder="imgurl">
    </div>
    <button onclick="newCar()" style="width: 10em; height: 3em;">Opret</button>
    <button onclick="back()" style="width: 10em; height: 3em;">Tilbage</button>
    </div>
    `
    inputDiv.innerHTML = html
}



let bikeCreate = () =>{
    typesDiv.remove()

    let html = 
    `<div id="newCar" class="newCar">
    <div class="inputs">
    <p>Model:</p>
    <input class="inp" type="text" placeholder="Model">
    </div>
    <div class="inputs">
        <p>Model år:</p>
    <input class="inp" type="number" placeholder="Model år">
    </div>
    <div class="inputs">
    <p>Farve:</p>
    <input class="inp" type="text" placeholder="Farve">
    </div>
    <div class="inputs">
    <p>Prisen:</p>
    <input class="inp" type="text" placeholder="Prisen">
    </div>
    <div class="inputs">
    <p>billed</p>
    <input class="inp" type="text" id="photo" placeholder="imgurl">
    </div>
    <div class="inputs">
    <p>Antal gear:</p>
    <input class="inp" type="text" placeholder="gear">
    </div>
    <div class="inputs">
    <p>Med batterie?:</p>
    <select class="inp" name="power" id="power">
        <option value="nej">nej</option>
        <option value="ja">ja</option>

    </select>
    </div>
    <button onclick="newBike()" style="width: 10em; height: 3em;">Opret</button>
    <button onclick="back()" style="width: 10em; height: 3em;">Tilbage</button>
    </div>
    `
    inputDiv.innerHTML = html
}



let gokartCreate = () =>{
    typesDiv.remove()
    let html = 
    `<div id="newCar" class="newCar">
    <div class="inputs">
    <p>Model:</p>
    <input class="inp" type="text" placeholder="Model">
    </div>
    <div class="inputs">
        <p>Model år:</p>
    <input class="inp" type="number" placeholder="Model år">
    </div>
    <div class="inputs">
    <p>Farve:</p>
    <input class="inp" type="text" placeholder="Farve">
    </div>
    <div class="inputs">
    <p>Prisen:</p>
    <input class="inp" type="text" placeholder="Prisen">
    </div>
    <div class="inputs">
    <p>billed</p>
    <input class="inp" type="text" id="photo" placeholder="imgurl">
    </div>
    <div class="inputs">
    <p>Hæstekrafter:</p>
    <input class="inp" type="text" placeholder="HK">
    </div>
    <div class="inputs">
    <p>Gear:</p>
    <select class="inp" name="gear" id="gear">
        <option value="no gear">uden gear</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="auto">auto</option>
    </select>
    </div>
    <button onclick="newGokart()" style="width: 10em; height: 3em;">Opret</button>
    <button onclick="back()" style="width: 10em; height: 3em;">Tilbage</button>
    </div>
    `
    inputDiv.innerHTML = html
}







let showCars = () =>{
let allCars = Array.from(document.getElementsByClassName("carClass"))
let allBikes = Array.from(document.getElementsByClassName("bikeClass"))
let allGokarts = Array.from(document.getElementsByClassName("gokartClass"))
showCarsOnly = true
showBikesOnly = false
showGokartsOnly = false
showAllOnly = false
allCars.forEach((x) =>{
x.style.display = "flex"
})
allBikes.forEach((x) =>{
x.style.display = "none"
})
allGokarts.forEach((x) =>{
x.style.display = "none"
    })
}
let showBikes = () =>{
    let allCars = Array.from(document.getElementsByClassName("carClass"))
    let allBikes = Array.from(document.getElementsByClassName("bikeClass"))
    let allGokarts = Array.from(document.getElementsByClassName("gokartClass"))
    showCarsOnly = false
    showBikesOnly = true
    showGokartsOnly = false
    showAllOnly = false
    allCars.forEach((x) =>{
    x.style.display = "none"
    })
    allBikes.forEach((x) =>{
    x.style.display = "flex"
    })
    allGokarts.forEach((x) =>{
    x.style.display = "none"
        })
}
let showGokarts = () =>{
    showCarsOnly = false
    showBikesOnly = false
    showGokartsOnly = true
    showAllOnly = false
    let allCars = Array.from(document.getElementsByClassName("carClass"))
    let allBikes = Array.from(document.getElementsByClassName("bikeClass"))
    let allGokarts = Array.from(document.getElementsByClassName("gokartClass"))
    allCars.forEach((x) =>{
    x.style.display = "none"
    })
    allBikes.forEach((x) =>{
    x.style.display = "none"
    })
    allGokarts.forEach((x) =>{
    x.style.display = "flex"
        })
}
let showAll = () =>{
    showCarsOnly = false
    showBikesOnly = false
    showGokartsOnly = false
    showAllOnly = true
    let allCars = Array.from(document.getElementsByClassName("carClass"))
    let allBikes = Array.from(document.getElementsByClassName("bikeClass"))
    let allGokarts = Array.from(document.getElementsByClassName("gokartClass"))
    allCars.forEach((x) =>{
    x.style.display = "flex"
    })
    allBikes.forEach((x) =>{
    x.style.display = "flex"
    })
    allGokarts.forEach((x) =>{
    x.style.display = "flex"
        })
}

let displayColor = ()=>{
    console.log("test")
    let car = document.getElementById("showCars").style
    let bike = document.getElementById("showBikes").style
    let gokart = document.getElementById("showGokart").style
    let all = document.getElementById("showAll").style

    if (showCarsOnly) {
        car.color = "orange"
        bike.color = "white"
        gokart.color = "white"
        all.color = "white"
    }
    if (showBikesOnly) {
       
        car.color = "white"
        bike.color = "orange"
        gokart.color = "white"
        all.color = "white"
    }
    if (showGokartsOnly) {
        car.color = "white"
        bike.color = "white"
        gokart.color = "orange"
        all.color = "white"
    }
    if (showAllOnly) {
        car.color = "white"
        bike.color = "white"
        gokart.color = "white"
        all.color = "orange"
    }
}