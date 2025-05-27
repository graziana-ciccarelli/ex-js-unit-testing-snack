const { createSlug} = require('./snack-4.js');

test('La funzione createSlug sostituisce gli spazi con -.', () => {
  expect(createSlug('HTML è un linguaggio di markup')).toBe('html-è-un-linguaggio-di-markup')
});