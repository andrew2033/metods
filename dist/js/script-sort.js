let numsSort = [5, 2, 1, 4, 3];

numsSort.__proto__.sort2 = function(callback) {
    let len = this.length;
    for (let i = len-1; i>=0; i--){
      for(let j = 1; j<=i; j++){
        if(callback(this[j-1],this[j]) > 0){
            let temp = this[j-1];
            this[j-1] = this[j];
            this[j] = temp;
         }
      }
    }
    return this;
};
numsSort.sort2((a, b) => a - b);
console.log('sort', numsSort);
