const {isPalindrome} = require('./snack-5.js');

test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
  expect(isPalindrome('radar')).toBe(true);
  expect(isPalindrome('hello')).toBe(false);

})