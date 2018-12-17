let every2 = function(arr, callback, thisArg) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (!callback.call(thisArg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

let fives = [5, 2, 5, 5, 5, 5];
let dataEvery = every2(fives, function(five) {
  return five === 5;
});

console.log('every', dataEvery);