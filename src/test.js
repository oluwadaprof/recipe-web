var array = [6, 6, 5, 2, 1, 2, 4, 5, 3];

function getUnique(array) {
  var uniqueArray = [];
//   let i;
  for (i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
    return uniqueArray;
  }
  
}
getUnique(array);