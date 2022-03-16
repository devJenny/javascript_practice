function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

// 성능 절약, 메모리 절약
Person.prototype.sum = function () {
  return "prototype : " + (this.first + this.second);
};

let kim = new Person("kim", 10, 20);
// kim 만 sum을 다르게 출력하고 싶을 때
kim.sum = function () {
  return "this : " + (this.first + this.second);
};
let lee = new Person("lee", 10, 10);

console.log(`kim.sum() ${kim.sum()}`);
console.log(`lee.sum() ${lee.sum()}`);
