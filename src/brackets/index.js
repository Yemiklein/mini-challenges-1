/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {}

module.exports = isValid;
alid;

const confirm = (str) => {
  let map = {")":"(","}":"{","]":"["}
  let arr =[]
  for(let i = 0; i < str.length; i++) {
    if(Object.keys(map).includes(str[0])) {
      return false
    }
    if(Object.values(map).includes(str[i])){
      arr.push(str[i])
    }
    else if(Object.keys(map).includes(str[i])){
      if(arr[arr.length-1]===map[str[i]]){
        arr.pop()
      }
    }
  }
  return !arr.length

}
console.log(confirm("[{()}[]]"))
