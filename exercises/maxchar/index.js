// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1211311") === "1"

function maxChar(str) {
  let regcont = {};
  for (let i = 0; i < str.length; i++) {
    if (!regcont[str[i]]) {
      regcont[str[i]] = 1;
    } else {
      regcont[str[i]] += 1;
    }
  }
  let mais = [0,0];
  let i = 0;
  for (const key in regcont) {
    if (i == 0){
        mais = [key, regcont[key]]
        i = 1;
    }
    else if (regcont[key] > mais[1] ){
        mais = [key,regcont[key]]
    }
  }
  return mais[0];
}

console.log(maxChar("fvfvfvfvcvcvbvbv")); 

// module.exports = maxChar;
