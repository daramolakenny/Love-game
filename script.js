// var n = document.getElementById('container');
// n.innerHTML = Math.floor(Math.random()*6 + 1);
// console.log(n);

var input1 = document.getElementById('contenta');
var input2 = document.getElementById('contentb');
var message = document.getElementById('errormessage');
var inputValue = document.getElementById('resultmessage');

function submitEvent(){
    resultMessage();
}


function resultMessage(){
    var content1 = input1.value;
    var content2 = input2.value;
    var output;
    
    if(content1 === '' && content2 === ''){
        errorMessage();
    } else{
        output = content1.toUpperCase() + " " + 'Love' + " " + content2.toUpperCase() +  " " + Math.floor(Math.random() * 60 + 1) + '%';
    }
    var resultTag = document.createElement('p');
    resultTag.textContent = output;
    
    inputValue.appendChild(resultTag);
}

function errorMessage(){
    var errorTag = document.createElement('p');
    errorTag.textContent = "Please supply the names of the lovers."; 

    message.appendChild(errorTag); 
}