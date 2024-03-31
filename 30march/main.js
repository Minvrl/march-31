let passInput = document.getElementById("passInput");
let passInput2 = document.getElementById("passInput2");
let email = document.getElementById("username")
let isEqual = true;
let validEmail = true;

document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();
    validEmail = checkEmail();
    isEqual = checkPass();

    if (validEmail && isEqual) {
        document.getElementById("myToast").style.display = "block"; 

        setTimeout(function() {
            document.getElementById("myToast").style.display = "none";
        }, 5000);
    }
});


function checkPass(){
    passInput.parentElement.querySelectorAll("span").forEach(elem=>{
        elem.remove();
    })
    passInput.style.borderColor = "black"
    passInput2.style.borderColor = "black"
    passInput2.parentElement.querySelectorAll("span").forEach(elem=>{
        elem.remove();
    })

    let check = true;
    if(passInput.value != passInput2.value){
        let span = createError("Passwords are not equal !")
        passInput2.parentElement.appendChild(span)
        passInput2.style.borderColor = "red"
        check = false;

    }
    if(!hasDigit(passInput.value )){
        let span = createError("Password should have digits !")
        passInput.parentElement.appendChild(span)
        passInput.style.borderColor = "red"
        check = false;
    }

    return check;
}

function createError(msg){
    let span = document.createElement("span")
    span.innerText = msg;
    span.style.color = "red"
    return span;
}

function hasDigit(pass) {
    for (let i = 0; i < pass.length; i++) {
        if (!isNaN(pass[i])) {
            return true;
        }
    }
    return false;
}

function checkEmail() {
    email.parentElement.querySelectorAll("span").forEach(elem => {
        elem.remove();
    });
    email.style.borderColor = "black";

    if (!email.value.includes('@')) {
        let span = createError("Email not in correct format");
        email.parentElement.appendChild(span);
        email.style.borderColor = "red";
        return false;
    }
    return true;
}


email.addEventListener("input",function(){
    if(!validEmail){
        checkEmail();
    }
})

passInput.addEventListener("input",function(){
    if(!isEqual){
        checkPass();
    }

})

