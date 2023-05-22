let form     = document.querySelector(".form");
let username = document.querySelector("#username")
let password = document.querySelector("#pasword")
let seepassword = document.querySelector("#see-pasword")
// userpattern => up
let up = /^[a-zA-Z][\w_.]{6,24}$/
//evaluatepassword => ep
let ep = 0

form.addEventListener("submit", e=>{
    e.preventDefault()  
})

form.username.addEventListener("keyup", e=>{
    if (e.target.value){
        username.textContent = e.target.value
        if (up.test(e.target.value)) {

            e.target.classList.add("is-valid")
            e.target.classList.remove("is-invalid")
        }
        else {
            e.target.classList.add("is-invalid")
        }
}
else{
    username.textContent = "please enter your username"
}})
form.pasword.addEventListener("keyup" , e=>{
    if (e.target.value){
    password.textContent = "*".repeat(e.target.value.length)
        ep = 0
        ep += /[A-Z]/.test(e.target.value) ? 1 : 0;
        ep += /[a-z]/.test(e.target.value) ? 1 : 0;
        ep += /[\W]/.test(e.target.value)  ? 1 : 0;
        ep += /[0-9]/.test(e.target.value) ? 1 : 0;
        ep += e.target.value.length >= 8 ? 1 : 0;

        if (ep === 5){
            e.target.classList.add("is-valid")
            e.target.classList.remove("is-invalid")
        }else{
            e.target.classList.add("is-invalid")
        }


} 
    
    else {
        password.textContent = "please enter your pasword"
    }
})

form.pasword.addEventListener("keyup", e=>{
    seepassword.textContent = e.target.value
})