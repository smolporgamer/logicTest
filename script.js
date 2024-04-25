let p1 = document.getElementById("p1-el")
let p2 = document.getElementById("p2-el")

const A = "rock"
const B = "paper"
const C = "scissor"

function generate(){
    
    const length = document.getElementById("input-el").value

    let checkLower = document.getElementById("restrictions-el-two")
    let checkUpper = document.getElementById("restrictions-el-one")
    let checkNumber = document.getElementById("restrictions-el-three")
    let checkSpecial = document.getElementById("restrictions-el-four")

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = lowerCase.toUpperCase();
    const numeric = '0123456789';
    const punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    let concatenatedString = "";

    if(length == 0){
        alert("input a value")
    }

    if(checkLower.checked){
        concatenatedString += lowerCase
    }
    if(checkUpper.checked){
        concatenatedString += upperCase
    }
    if(checkNumber.checked){
        concatenatedString += numeric
    }
    if(checkSpecial.checked){
        concatenatedString += punctuation
    }

    let newString = ""
    const concatenatedArray = concatenatedString.split()
    for(i = 0; i < length; i++){
        let randomNumber = Math.floor(Math.random() * concatenatedString.length)
        newString += concatenatedString[randomNumber]
    }
    alert(newString)
}

function fizzbuzz(){
    const charLength = 100
    for (let i = 1; i <= charLength; i++){
        if(i % 5 === 0 && i % 3 === 0){
            console.log("fizzbuzz")
        }else if(i % 3 === 0){
            console.log("fizz")
        }else if(i % 5 === 0){
            console.log("buzz")
        }else{
            console.log(i)
        }
    }   
}

function palindromeChecker(palindromeString){
    let newString = ""
        for (let i = palindromeString.length - 1; i >= 0 ; i--){
            newString += palindromeString[i]
            console.log(newString)
        }
        if(newString === palindromeString){
            console.log("palindrome word")
        }else {
            console.log("not palindrome word")
        }
    
}

function checkWinner(){
    if(A && B){
        console.log("paper wins")
    }else if(B && C){
        console.log("scissor wins")
    }else if(p2){
        
    }
    
    if(p1){

    }
}

function rockMove(){
    console.log("rock")

    return "rock"
}

function paperMove(){
    console.log("paper")

    return "paper"
}

function scissorMove(){
    console.log("scissor")

    return "scissor"
}

$(document).ready(function() {
    $("#reset-btn").click(function() {
      console.log("clicked");
    });
  });

  $(document).ready(function(){
    $("#start-btn").click(function(){
        console.log("clicked")
    })
  })