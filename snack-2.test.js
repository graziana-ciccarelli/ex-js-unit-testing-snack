const { createSlug } = require('./snack-2.js');

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
  expect(createSlug('Hello World')).toBe('hello-world');
});
