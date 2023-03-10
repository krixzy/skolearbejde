//måske find på noget andet når der kun er bomber tilbage



let bordArray = []
let bombArray = []
let bord = document.getElementById("bord")

let pickedNumbers = []
let shotBordArray = []
let shotBombArray = []
let counter = 0
let bombsLeft = 0
let gameOver = false
let firstClick = true
let row = 30
let col = 30







class Bomb{
    constructor(id, bomb){
        this.id = id
        this.bomb = bomb || false
        this.checked = false
        this.flaged = false
    }
    createBord(div){
        
        let p = document.createElement("p")
        div.appendChild(p)
        document.getElementById("bord").appendChild(div)

            p.addEventListener("click", ()=>{
                if(firstClick){
                    let i = 0
                    while (bombArray[0][i].bomb == true) {
                        i++
                    }
                    bombArray[0][i].bomb = true
                    firstClick = false
                    this.bomb = false
                    console.log(bombArray)
                }
                if(gameOver == true){
                    window.location.reload()
                }else{
            this.checkForBomb(p)
                }
            })
            p.addEventListener("auxclick", ()=>{
                if(this.flaged == false){
                    p.innerHTML = `	&#128681`
                    this.flaged = true
                    bombsLeft --
                    document.getElementById("bombsCounter").textContent = `Bombs left: ${bombsLeft}`
                }else{
                    this.flaged = false
                    p.innerHTML = ""
                    bombsLeft ++
                    document.getElementById("bombsCounter").textContent = `Bombs left: ${bombsLeft}`
                }
             
            })
            return p

    }
    checkForBomb(p){
        if(this.bomb == true){

             alert("der var detsvære en bombe BOOM!")
             allBombs()
            gameOver = true
      
        }else{
            for (let i = 0; i < bombArray.length; i++) {
                for (let x = 0; x < bombArray[i].length; x++) {
                 if(this.id == bombArray[i][x].id){
                    
                 let count =  this.bombsAround(i, x)
                   if(count == 0){
                    bordArray[i][x].style.backgroundColor = "white"
                    this.checked = true
                    blank(i, x)
                    
                    
                  }
                  else{
                    bordArray[i][x].style.backgroundColor = "white"
                    bordArray[i][x].textContent = count
                    this.checked = true
                  }

                 }

                }
                
            }
        }
        
    }
    bombsAround(i, x){
        let count = 0
        if(i == 0){
        
            if(bombArray[i + 1][x].bomb == true){
                count++
            }
            if(x != row - 1){
                if(bombArray[i][x + 1].bomb == true){
                    count++
                }
                if(bombArray[i + 1][x + 1].bomb == true){
                    count++
                }
            }
            if(x != 0){
                if(bombArray[i][x - 1].bomb == true){
                    count++
                }
                if(bombArray[i + 1][x - 1].bomb == true){
                    count++
                }
            }
            
        }else if(i ==  - 1){
            if (x != 0) {
                if(bombArray[i][x - 1].bomb == true){
                    count++
                }  
                if(bombArray[i - 1][x - 1].bomb == true){
                    count++
                }
            } 
            if(x != row - 1){
                if(bombArray[i][x + 1].bomb == true){
                    count++
                }
              
                if(bombArray[i - 1][x + 1].bomb == true){
                    count++
                }
            }
          
             if(bombArray[i - 1][x].bomb == true){
                count++
             }
            
        }else{
            if(x != 0){
                if(bombArray[i][x - 1].bomb == true){
                    count++
                }
                if(bombArray[i - 1][x - 1].bomb == true){
                    count++
                }
                if(bombArray[i + 1][x - 1].bomb == true){
                    count++
                }
            }
            if(x != row - 1){
                if(bombArray[i][x + 1].bomb == true){
                    count++
                }
                if(bombArray[i - 1][x + 1].bomb == true){
                    count++
                }
                if(bombArray[i + 1][x + 1].bomb == true){
                    count++
                }
            }
            
            if(bombArray[i - 1][x].bomb == true){
                count++
            }
            if(bombArray[i + 1][x].bomb == true){
                count++
            }
            
        }
       return count
    }

}

let  blank = (i, x) => {
    
    if(i == 0){
        
        if(bombArray[i + 1][x].checked == false){
            bombArray[i + 1][x].checkForBomb()
        }

        if(x != row - 1){
            if(bombArray[i][x + 1].checked == false){
                bombArray[i][x + 1].checkForBomb()
            }
            if(bombArray[i + 1][x + 1].checked == false){
                bombArray[i + 1][x + 1].checkForBomb()
            }
        }

        if(x != 0){
             if(bombArray[i][x - 1].checked == false){
                bombArray[i][x - 1].checkForBomb()
            }
            if(bombArray[i + 1][x - 1].checked == false){
                bombArray[i + 1][x - 1].checkForBomb()
            }
        }
    }
    else if(i ==  - 1){
        if (x != 0) {
            if(bombArray[i][x - 1].checked == false){
                bombArray[i][x - 1].checkForBomb()
            }
            if(bombArray[i - 1][x - 1].checked == false){
                bombArray[i - 1][x - 1].checkForBomb()
            }
        } 

        if(x != row - 1){
            if(bombArray[i][x + 1].checked == false){
                bombArray[i][x + 1].checkForBomb()
            }
            if(bombArray[i - 1][x + 1].checked == false){
                bombArray[i - 1][x + 1].checkForBomb()
            }
        }

         bombArray[i - 1][x].checkForBomb()
        
    }
    else{
        if(x != 0){
            if(bombArray[i][x - 1].checked == false){
                bombArray[i][x - 1].checkForBomb()
            }
            if(bombArray[i - 1][x - 1].checked == false){
                bombArray[i - 1][x - 1].checkForBomb()
            }
            if(bombArray[i +1][x - 1].checked == false){
                bombArray[i + 1][x - 1].checkForBomb()
            }
        }
        if(x != row - 1){
            if(bombArray[i][x + 1].checked == false){
                bombArray[i][x + 1].checkForBomb()
            }
            if(bombArray[i - 1][x + 1].checked == false){
                bombArray[i - 1][x + 1].checkForBomb()
            }
            if(bombArray[i + 1][x + 1].checked == false){
                bombArray[i + 1][x + 1].checkForBomb()
            }
            
        }

        if(bombArray[i - 1][x].checked == false){
            bombArray[i - 1][x].checkForBomb()
        }
        if(bombArray[i + 1][x].checked == false){
            bombArray[i + 1][x].checkForBomb()
        }
    }

        
    } 





let randomNum = () =>{
  let num = Math.ceil(Math.random() * (row * col))
    return num
}


    for (let i = 0; i < col; i++) {
        shotBombArray = []
        shotBordArray = []
        let div = document.createElement("div")
        for (let x = 0; x < row; x++) {
          let num = randomNum()
          
          while(pickedNumbers.indexOf(num) != -1){
            num = randomNum()
          }
          pickedNumbers.push(num)
            let bomb;
          if(num % 6 == 0){
            bomb = new Bomb(counter, true)
            bombsLeft ++
          }else{
             bomb = new Bomb(counter)
          }
            let p = bomb.createBord(div)
            shotBordArray.push(p)
             shotBombArray.push(bomb)

            //  bord.appendChild(p)
             counter ++
          
        }
        bombArray.push(shotBombArray)
        bordArray.push(shotBordArray)
        
    
    }


let allBombs = ()=>{
    for (let i = 0; i < bombArray.length; i++) {
        for (let x = 0; x < bombArray[i].length; x++) {
            if(bombArray[i][x].bomb == true){
                bordArray[i][x].innerHTML = "&#128163"
                bordArray[i][x].style.backgroundColor = "black"
               
            }
            
        }
        
    }
}
let allClear = ()=>{
    for (let i = 0; i < bombArray.length; i++) {
        for (let x = 0; x < bombArray[i].length; x++) {
            if(bombArray[i][x].bomb == false){
                if(bombArray[i][x].flaged == true){
                    bombsLeft ++
                    bombArray[i][x].flaged = false
                }
                bordArray[i][x]. innerHTML = ""
                bordArray[i][x].style.backgroundColor = "white"
                document.getElementById("bombsCounter").textContent = `Bombs left: ${bombsLeft}`
               
            }
            
        }
        
    }
    if(bombsLeft == 0){
        alert("Du har fundet alle bomberne TILLYKKE!")
    }else{
        alert("Du har detsvære ikke fundet alle bomberne prøv ingen")
    }
    gameOver = true
}
    

console.log(bombArray)
console.log(bordArray)
document.getElementById("bombsCounter").textContent = `Bombs left: ${bombsLeft}`