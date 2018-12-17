let filter = function(arr, callback, thisArg) {
   let i; 
   let length = arr.length;
   let results = [];
   for (i = 0; i < length; i++) {
     if (callback.call(thisArg, arr[i], i, arr)) {
       results.push(arr[i]);
     }
   }
   return results;
 };
let strs = ['Andrew', '', 'Misha', 'Roma', '5', '9321'];

let data = filter(strs, function(str) {
  return str.toLowerCase() !== str;
});

console.log(data);