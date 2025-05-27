function createSlug (stringa) {
  const minuscolo = stringa.toLowerCase();
  return minuscolo.replace(/ /g, '-');
}

module.exports = {createSlug};