// Contact 
var fname = document.getElementById("fname")
var email = document.getElementById("email")
var pass = document.getElementById("pass")
var submitBtn = document.getElementById("submitBtn")
var invalidInput1 = document.querySelector("#invalidInput1")
var invalidInput2 = document.querySelector("#invalidInput2")
var invalidInput3 = document.querySelector("#invalidInput3")


// 1-Name
fname.addEventListener("blur", function validName (e){
    e.preventDefault()
    if (e.target.value.length <3 ){
    fname.style.border="2px solid red"
    invalidInput1.style.display= "block"
    fname.classList.add("is-invalid")
    }else{
    fname.style.border="2px solid green"
    invalidInput1.style.display= "none"
    fname.classList.remove("is-invalid")
    fname.classList.add("is-valid")
    }
});

// 2- Email
function validateEmail(email){
    var emailRegex = /^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]{3,}.com$/gm
    return emailRegex.test(email)
}

email.addEventListener("blur" , function validEmail(e){
    e.preventDefault()
if (validateEmail(e.target.value) == false){
    email.style.border="2px solid red"
    invalidInput2.style.display= "block"
    email.classList.add("is-invalid")
}else{
    email.style.border="2px solid green"
    invalidInput2.style.display= "none"
    email.classList.remove("is-invalid")
    email.classList.add("is-valid")
}

})

// 3- Password
pass.addEventListener("blur", function validName (e){
    e.preventDefault()
    if (e.target.value.length <8 ){
    pass.style.border="2px solid red"
    invalidInput3.style.display= "block"
    pass.classList.add("is-invalid")
    }else{
    pass.style.border="2px solid green"
    invalidInput3.style.display= "none"
    pass.classList.remove("is-invalid")
    pass.classList.add("is-valid")

    }
});
