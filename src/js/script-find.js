let arr2 = [10, 12, 34, 43, 15];
arr2.find2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === callback) return i+1;
  }
  return undefined;
}
console.log('find2', arr2.find2(12));