let form     = document.querySelector(".form");
let username = document.querySelector("#username")
let password = document.querySelector("#pasword")
let seepassword = document.querySelector("#see-pasword")

form.addEventListener("submit", e=>{
    e.preventDefault()  
})

form.username.addEventListener("keyup", e=>{
    if (e.target.value){
    username.textContent = e.target.value
}
else{
    username.textContent = "please enter your username"
}})
form.pasword.addEventListener("keyup" , e=>{
    if (e.target.value){
    password.textContent = "*".repeat(e.target.value.length)} else {
        password.textContent = "please enter your pasword"
    }
})

form.pasword.addEventListener("keyup", e=>{
    seepassword.textContent = e.target.value
})