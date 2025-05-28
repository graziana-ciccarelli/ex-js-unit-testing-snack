function findPostById(posts, id) {
  if (typeof id !== "number" || isNaN(id)) {
    throw new Error(`${id} non è un id valido`);
  }

  posts.forEach(post => {
    if (
      post.id === undefined ||
      post.title === undefined ||
      post.slug === undefined
    ) {
      throw new Error("Ogni post deve avere id, title e slug");
    }
  });

  return posts.find(post => post.id === id);
}

module.exports = { findPostById };
