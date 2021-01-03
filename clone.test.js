const clone = require('./clone')

test('properly clones array', () => {
  const array = [1,2,3]
  expect(clone(array)).toEqual(array)
  expect(clone(array)).not.toBe(array)
})