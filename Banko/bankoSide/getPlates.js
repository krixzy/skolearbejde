let storageArray = []


let creatingPlates = ()=>{
let amount = sessionStorage.getItem("amount")
let value = document.getElementById("tekstboks").value
console.time()
for (let i = 1; i <= amount; i++) {
    Math.seedrandom(String(i))
    update_plates() 
    storageArray.push(i, exportArray)
}
console.timeEnd()
sessionStorage.setItem("plateIdAndNumbers", storageArray)
window.location.href = "../index.html"
}


creatingPlates()