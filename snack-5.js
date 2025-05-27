function isPalindrome(stringa) {
  const parolaInversa = stringa.toLowerCase().replace(/[^a-z0-9]/g, '');
  return parolaInversa === parolaInversa.split('').reverse().join('');

}

module.exports = {
  isPalindrome
};
