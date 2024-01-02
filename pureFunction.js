/**
 *  function that returns same output for same input and contains no side effect is a pure function.
 */

let globalVar = 4

// output will always be same for same input becoz it doesnt depend on external factors
const pureFunc = (x) => {
  return x * 2
}

//here value of globalVar will change everytime the func is called hence its output value chnages for the same input
const impureFunc = (x) => {
  return (globalVar *= x)
}

console.log(pureFunc(2))
console.log(pureFunc(2))
console.log(impureFunc(2))
console.log(impureFunc(2))
