let reduce2 = function(arr, callback, startValue) {
let length = arr.length;
let result = startValue;
  for (let i = 0; i < length; i++) {
    result = callback.call(null, result, arr[i], i, arr);
  }
  return result;
};

let arrs = [[1, 2, 3], [4, 5], [6], [7, 8], [9, 10, 11]];
let arrResults = reduce2(arrs, function(result, current) {
  return result.concat(current);
}, []);
console.log('reduse', arrResults);