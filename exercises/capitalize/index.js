// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   let strMid = str.split(" "),
//     strReturn = [];
//   for (let i = 0; i < strMid.length; i++) {
//     strReturn.push(strMid[i][0].toUpperCase());
//     for (let k = 1; k < strMid[i].length; k++) {
//       strReturn.push(strMid[i][k]);
//     }
//     if (i < strMid.length - 1) {
//       strReturn.push(" ");
//     }
//   }
//   return strReturn.join("");
// }

function capitalize(str) {
  let fra = str.split('');
  fra[0] = fra[0].toUpperCase()
  for (let i = 1; i < fra.length; i++){
      if (fra[i-1] == ' '){
          fra[i] = fra[i].toUpperCase()
      }
  }
  return fra.join('')
}

module.exports = capitalize;

