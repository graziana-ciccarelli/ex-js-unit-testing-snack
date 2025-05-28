const { findPostById } = require('./snack-7.js');

const posts = [
  { id: 1, title: 'Introduzione a React', slug: 'introduzione-a-react' },
  { id: 2, title: 'Guida a Node.js', slug: 'guida-a-node-js' }
];

test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
  expect(findPostById(posts, 2)).toEqual(posts[1]);
  expect(findPostById(posts, 4)).toBeUndefined();
});
