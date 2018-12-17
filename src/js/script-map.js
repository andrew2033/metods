let arr = [1, 2, 3];
arr.map2 = function(callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = callback(arr[i], i, arr);
  }
  return result;
};
let newArr = arr.map2(
  function(item, index) {
    return item + index;
  }
);
console.log('map', newArr);