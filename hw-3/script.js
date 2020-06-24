const array = [1, 2, 3];

function customFilter(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
}

Array.prototype.customFilter = customFilter;

let arrFilter = array.filter((value, index, arr) => {
  return value > 2;
});
console.log(arrFilter);

let arrCustomFilter = array.customFilter((value, index, arr) => {
  return value > 2;
});
console.log(arrCustomFilter);
