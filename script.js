//your code here
let textbox = document.getElementById('evaluatedText');
let count = document.getElementById('wordCount');

function changecount(){

 let calculate = textbox.value;
 count.innerText = calculate.length;
console.log(count);
}


textbox.addEventListener('keyup',changecount);



