const { createSlug } = require('./snack-6.js');

test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
  expect(() => createSlug('')).toThrow('Il titolo non è valido');
  expect(() => createSlug(null)).toThrow('Il titolo non è valido');
  expect(() => createSlug(undefined)).toThrow('Il titolo non è valido');
});
