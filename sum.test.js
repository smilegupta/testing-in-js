const sum = require('./sum')

// 1 + 2 === 3

test('Addition of two numbers', () => {
  expect(sum(1,2)).toBe(3)
  expect(sum(-1,1)).toBe(0)
  expect(sum(-1,-1)).toBe(-2)
})


// Testing in plain JavaScript
// if(sum(1,2)=== 3){
//   console.log("Test Passed")
// } else{
//   console.log("Error")
// }