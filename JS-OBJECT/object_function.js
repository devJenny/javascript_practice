let kim = { name: "kim", first: 10, second: 20 };
let lee = { name: "lee", first: 10, second: 10 };
function sum(prefix) {
  return prefix + (this.first + this.second);
}
// sum();
console.log("sum.call(kim)", sum.call(kim, "=> "));
console.log("sum.call(lee)", sum.call(lee, ": "));
//bind
let kimSum = sum.bind(kim, "-> ");
console.log("kimSum() ", kimSum());
