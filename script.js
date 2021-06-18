//input display
const inputdisplay = document.getElementById('input');

//output display
const outputdisplay = document.getElementById('output');

console.log(inputdisplay.innerText);
console.log(outputdisplay.innerText);

//buttons with events
const one = document.getElementById('one');
one.addEventListener('click', function(e){
  console.log(e);
})

const buttons = document.querySelectorAll('container');

Array.from(buttons).forEach(function(btn){
  btn.addEventListener('click', function(e){
  });
});