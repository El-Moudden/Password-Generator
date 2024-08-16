let passRange = document.getElementById("passRange") ;
let passLength = document.getElementById("pass-length")

let lowercase = document.getElementById("lowercase")
let uppercase = document.getElementById("uppercase")
let numbersP = document.getElementById("numbers")
let specialCharacters = document.getElementById("specialCharacters")


let passbox = document.querySelector(".pass-box")
let genBtn = document.getElementById("genBtn")

let passstrengthT = document.getElementById("passStrength")

let copyBtn = document.querySelector(".copyBtn");



passRange.addEventListener("input" , ()=>{
    passLength.textContent = passRange.value

    generatePass() ;
    strengthIndicator();
})

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";


function generatePass(){
    let sliderLength =  passRange.value;
    let  passCharacters = "";
    let pass = "";


    passCharacters += lowercase.checked ? lowercaseLetters : "" ;
    passCharacters += uppercase.checked ? uppercaseLetters: "" ;
    passCharacters += numbersP.checked ? numbers : "" ;
    passCharacters += specialCharacters.checked ? symbols : "" ;
    

    for(let i=0 ; i<sliderLength ; i++ ){
        pass += passCharacters.charAt(Math.floor(Math.random() * passCharacters.length))
        
    }

    passbox.value = pass


}

genBtn.addEventListener("click" , ()=>{
    generatePass()
})
  

window.onload = generatePass()

function passstrength(pass){
    if (pass.length <=8){

        passstrengthT.innerHTML = "weak"
        passstrengthT.style.color = "red"

    }else if (pass.length <=16){

        passstrengthT.innerHTML = "middle"
        passstrengthT.style.color = "#a5a50a "

    }else {
        passstrengthT.innerHTML = "strong"
        passstrengthT.style.color = "green"
    }
        
    
}

function strengthIndicator(){
    strength = passstrength(passbox.value)
}
strengthIndicator();


copyBtn.addEventListener("click", ()=>{
    if(passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value)
        document.querySelector(".fa-copy").style.color = "black"
      
        

        setTimeout(()=>{

            document.querySelector(".fa-copy").style.color = "white"





        },2000)
    }
})