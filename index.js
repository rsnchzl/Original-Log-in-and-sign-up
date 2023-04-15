const textBoxSlider = document.querySelector("h1")
const boxSlider = document.querySelector(".boxSlider")
const input1boxSlider = document.querySelector(".fullname")
const input2boxSlider = document.querySelector(".email")
const input3boxSlider = document.querySelector(".password")
const forgetPassword = document.querySelector(".aDiv")
const buttonBoxSlider = document.querySelector(".boxSlider button")

function logIn()
{
    boxSlider.style.left = "850px"
    textBoxSlider.textContent = "LOG IN"
    input1boxSlider.placeholder = "EMAIL"
    input1boxSlider.type = "EMAIL"
    input2boxSlider.placeholder = "PASSWORD"
    input2boxSlider.type = "password"
    input3boxSlider.style.display = "none"
    forgetPassword.style.display = "block"
    buttonBoxSlider.textContent = "LOG IN"
    buttonBoxSlider.style.top = "70px"
}

function signUp()
{
    boxSlider.style.left = "346px"
    textBoxSlider.textContent = "SIGN UP"
    input1boxSlider.placeholder = "FULL NAME"
    input2boxSlider.placeholder = "EMAIL"
    input2boxSlider.type = "EMAIL"
    input3boxSlider.style.display = "block"
    forgetPassword.style.display = "none"
    buttonBoxSlider.textContent = "SIGN UP"
    buttonBoxSlider.style.top = "50px"
}