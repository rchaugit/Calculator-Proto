//functions for the calculator and operators

//When you press + - * /
//store what is in input as a variable
//then take a new variable which is to be input
//and base on what you pressed execute that 
//and print to output

//buttons to put number into input window
//operators to take that input and store into a variable

//array reduce method
//btns add value into input.innerhtml = input
//operator buttons take innerhtml -> and push to an array
//btns will add another value into inner.html  = input
//equals will reduce the array based on the operator it detects.

// start with a string of 8742+3834
// split it by (+-/*)
// result is "8742" "+" "3834"
// if index[1] = "+"
// then index[0] + index[1];

//click, adds text content to innerHTML of input

// Calculation function
// const algo = input.innerHTML.split(+-*/); should be the algorithm split by operator
// const plus = algo.indexof("+")
// const mins = algo.indexof("-")
// const multi = algo.indexof("*")
// const divi = algo.indexof("/")

const input = document.querySelector('.input');

// export const split = (str) => {
//   const arr = input.innerHTML.split(/([+*-/])/);
//   return arr;
// }

export const calculate = (arr) => {
  const algo = input.innerHTML.split(/([+*-/])/);
  //Index of operators returned.
  // const plus = algo.indexOf("+");
  // const minus = algo.indexOf("-");
  // const multi = algo.indexOf("*");
  // const divi = algo.indexOf("/");
  //concept was to find the index of operators in order of operation, and do an array[index-1] * array[index+1]

  // WORKING IF LOOP
  if (algo.includes("+")) {
    return parseFloat(algo[0]) + parseFloat(algo[2]);
  }
  else if (algo.includes("-")) {
    return parseFloat(algo[0]) - parseFloat(algo[2]);
  }
  else if (algo.includes("*")) {
    return parseFloat(algo[0]) * parseFloat(algo[2]);
  }
  else if (algo.includes("/")) {
    return parseFloat(algo[0]) / parseFloat(algo[2]);
  }
  else {
    return "ERROR"
  }

  // //TRYING INTERATORS
  // if (algo.includes("+")) {
  //   return algo.reduce((a, b,) => parseFloat(a) + parseFloat(b));
  // }
  // else if (algo.includes("-")) {
  //   return parseFloat(algo[0]) - parseFloat(algo[2]);
  // }
  // else if (algo.includes("*")) {
  //   return parseFloat(algo[0]) * parseFloat(algo[2]);
  // }
  // else if (algo.includes("/")) {
  //   return parseFloat(algo[0]) / parseFloat(algo[2]);
  // }
  // else {
  //   return "ERROR"
  // }
  
}