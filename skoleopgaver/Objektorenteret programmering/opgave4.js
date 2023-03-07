//opgave 4

let div = document.getElementById("cars")
let inputArray = Array.from(document.getElementsByClassName("inp"))
let photo = document.getElementById("photo")


let arrayOfCars = []
class car {
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
        let p2 = document.createElement("p")
        p2.textContent = `${this.#price}kr`
        p2.className = "pris"
        car.appendChild(p2)
        let img = document.createElement("img")
        img.src = this.#photo
        car.appendChild(img)
        let p = document.createElement("p")
        p.textContent = `Model: ${this.#model}`
        car.appendChild(p)
        let p3 = document.createElement("p")
        p3.textContent = (`Modelår: ${this.#age}`)
        car.appendChild(p3)
        let p4 = document.createElement("p")
        p4.textContent = (`Farve: ${this.#color}`)
        car.appendChild(p4)
        let p5 = document.createElement("p")
        p5.textContent = (`Kilometer: ${this.#km}km`)
        car.appendChild(p5)
        let buttom = document.createElement("button")
        buttom.textContent = "Remove car"
        buttom.addEventListener("click", ()=>{this.removeCar(car)})
        // buttom.setAttribute("onClick", this.removeCar())
        car.appendChild(buttom)

        

        

    }
    removeCar(x){
       x.remove()
    }
}
let tesla = new car("Tesla 3", 2022, "matsort", 400000, 10000, "Tesla.png")
let tesla2 = new car("Tesla Y", 2023, "sort", 300000, 20000, "Tesla.png")


tesla.createCar(tesla)
tesla2.createCar(tesla2)
let newCar = (x, y)=>{
arrayOfCars.push(new car(inputArray[0].value, inputArray[1].value, inputArray[2].value, inputArray[3].value, inputArray[4].value, inputArray[5].value))
arrayOfCars[arrayOfCars.length - 1].createCar()

}



