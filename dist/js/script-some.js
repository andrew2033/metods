let some = function(arr, callback, thisArg) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};
let nums = [1, 2, 3, 4, 5];
let dataSome = some(nums, function(num) {
  return num > 3;
});

console.log(dataSome);