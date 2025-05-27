function createSlug(stringa) {
  return stringa
    .toLowerCase()       
    .replace(/\s+/g, '-') 
    .trim();             
}

module.exports = {
  createSlug
};


