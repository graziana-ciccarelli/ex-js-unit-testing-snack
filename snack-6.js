function createSlug(titolo) {
  if(!titolo) {
    throw new Error('Il titolo non è valido');
  }
   return titolo.toLowerCase().replaceAll(" ", "-");
}

module.exports = {
  createSlug
}