const sum = require('./sum');

test('adds 1 + 2 to equal 3', function() {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', function() {
  expect(sum(2, 2)).toBe(4);
});