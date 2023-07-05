function charCount(str) {
  let result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumaric(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function isAlphaNumaric(char) {
  let code = char.charCodeAt();
  if (
    !(code > 47 && code < 58) && // numeric 0-9
    !(code > 64 && code < 91) && // upper alpha A-Z
    !(code > 96 && code < 123)
  ) {
    // lowe alpha a-z
    return false;
  }

  return true;
}

console.log(charCount("hello ! 232"));
