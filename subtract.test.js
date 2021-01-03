const subtract = require('./subtract')

// 1 + 2 === 3

test('Subtraction of two numbers', () => {
  expect(subtract(1,2)).toBe(-1)
  expect(subtract(-1,1)).toBe(-2)
  expect(subtract(-1,-1)).toBe(0)
})

