const {average} = require('./snack-3.js');

test('La funzione average calcola la media aritmetica di un array di numeri.',() => {
  expect(average([1, 2, 3, 4, 5])).toBe(3);
  expect(average([10, 20 , 30])).toBe(20);


})