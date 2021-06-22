const keys = document.querySelector('.keypad');
// console.log(keys);

const inputdisplay = document.querySelector('.inputdisplay');
// console.log('input class note type is a ', input.nodeName);

// const keyp = document.querySelector('.keypad');
// console.log(keyp.children); check for child elements

// const btns = document.querySelector('.btns');
// console.log('btns next sibling is',btns.nextElementSibling);

// Testing button zero to the console
// const btn0 = document.querySelector('.btns')
// btn0.addEventListener('click', function(click){
//   console.log(click.target); //logs the target of the click
//   console.log(click); //logs the click event
// });


const btns = document.querySelectorAll('.btns');
const input = document.querySelector('.input');
const output = document.querySelector('.output');

Array.from(btns).forEach(function(btn){ //turns the button class into an array and for every button adds an eventlister.
  btn.addEventListener('click', function (click){
    // console.log(click.target.textContent); //logs the target of the click
    input.innerHTML += click.target.textContent;
  })
}); 

const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');

clear.addEventListener('click', function (click){
  input.innerHTML = "";
  output.innerHTML = "0.";
})

// function calculateString (input) {
//  need to formulate function that takes input.innerHTML 
//  converts it to a format thats usable to do math.
// }

equals.addEventListener('click', function (click){
  console.log(typeof input.innerHTML);
  // output.innerHTML = calculateString(input.innerHTML);
  // output.innerHTML = Math.random();
  // output.innerHTML = eval(input.innerHTML);
  input.innerHTML = "";
})

// when i click an operator store current number as a variable
//