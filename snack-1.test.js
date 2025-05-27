// snack-1.test.js
const { getInitials } = require('./snack-1');

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
  expect(getInitials('John Doe')).toBe('J.D.');
});
