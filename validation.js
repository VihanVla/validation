let form     = document.querySelector(".form");
let username = document.querySelector("#username")
let password = document.querySelector("#pasword")
let seepassword = document.querySelector("#see-pasword")

form.addEventListener("submit", e=>{
    e.preventDefault()  
})

form.username.addEventListener("keyup", e=>{
    username.textContent = e.target.value
})
form.pasword.addEventListener("keyup" , e=>{

    password.textContent = "*".repeat(e.target.value.length)
})

form.pasword.addEventListener("keyup", e=>{
    seepassword.textContent = e.target.value
})