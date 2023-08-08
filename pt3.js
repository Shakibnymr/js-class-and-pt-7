// this function takes an array of strings and finds the string with largest length.
// It then returns that string as the 'best friend'
function bestFriend(array) {
  // get the length of the first string in the array
  const firstLength = array[0].length;
  // iterate through the array , starting from the second string.
  for (let i = 1; i < array.length; i++) {
    // get the first element
    const element = array[i];
    // get the element of the current element
    const indexLength = element.length;
    // if the length of the current element is greater than the length of the first elemen,
    // set the current element of the " best friend " and return it.
    if (indexLength > firstLength) {
      return element;
    }
  }
}
const friends = [ "sajjad", "mamun", "jubayer bin rashed", "rinku" ];
let result = bestFriend(friends);
console.log('my best friend is', result);