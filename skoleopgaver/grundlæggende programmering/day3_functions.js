//opgave 1
let opgaveNummer = 1
console.log(`opgavenummer ${opgaveNummer++}`)
let helloWorld = () =>{
    console.log("Hello World")
}

//opgave 2
console.log(`opgavenummer ${opgaveNummer++}`)
let adding = (a, b)=>{
    return Number(a) + Number(b)

}
document.getElementById("multi").addEventListener("click", () =>{
    let returnValue = adding(document.getElementById("tal1").value, document.getElementById("tal2").value)
          document.getElementById("multiResult").textContent = returnValue
  
})


//opgave 3
console.log(`opgavenummer ${opgaveNummer++}`)
let checkJa = () =>{
    String(document.getElementById("jaCheck").value).toUpperCase() == "JA" ? document.getElementById("jaSvar").textContent = true : document.getElementById("jaSvar").textContent = false
       
   
}

//opgave 4
console.log(`opgavenummer ${opgaveNummer++}`)
let passwords = ["Password1", "Password2", "Password3"]
let passwordCheck = ()=>{
  document.getElementById("passwordText").textContent = passwords.includes(document.getElementById("password").value)
}



//opgave 5
console.log(`opgavenummer ${opgaveNummer++}`)
let user = ["user3", "user2", "user1"]
let userCheck = ()=>{
    let userNameText = document.createElement("p")
    userNameText.textContent = user.includes(String(document.getElementById("userName").value).toLowerCase())
    //if(String(document.getElementById("user").lastChild.textContent) != "false" && String(document.getElementById("user").lastChild.textContent != "false")){
    document.getElementById("user").appendChild(userNameText)
   // }
}
