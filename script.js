// var n = document.getElementById('container');
// n.innerHTML = Math.floor(Math.random()*6 + 1);
// console.log(n);

var input1 = document.getElementById('contenta');
var input2 = document.getElementById('contentb');
var container = document.getElementById('container');

function submitEvent(){
    var content1 = input1.value;
    var content2 = input2.value;

    var output = content1 + " " + 'Love' + " " + content2 +  " " + Math.floor(Math.random() * 60 + 1) + '%';

    var pTag = document.createElement('p');
    pTag.textContent = output;

    container.appendChild(pTag);
}                                                                 