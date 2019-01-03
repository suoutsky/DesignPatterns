// 1.作 为 对 象 的 方 法 调 用。
var obj = {
  name: "nemo",
  getName: function() {
    console.log(this === obj); // true
    console.log(this.name === "name"); // true
    return this.name;
  }
};
obj.getName();

// 2.作为普通对象调用
window.name = "globalName";
var getName = function() {
  return this.name;
};
console.log(getName()); // 输 出： globalName
// 或 者：
window.name = "globalName";
var myObject = {
  name: "sven",
  getName: function() {
    return this.name;
  }
};
var getName = myObject.getName;
console.log(getName()); // globalName

// 3.构 造 器 调 用。this.指向返回的对象

var MyClass = function() {
  this.name = "sven";
};
var obj = new MyClass();
alert(obj.name); // sven

var MyClass = function() {
  this.name = "sven";
  return {
    name: "nemo"
  };
};
var obj = new MyClass();
alert(obj.name); // nemo

// 4.Function.prototype.call 或 Function.prototype.apply 调 用。
var obj1 = {
  name: "sven",
  getName: function() {
    return this.name;
  }
};
var obj2 = { name: "anne" };
console.log(obj1.getName()); // 输 出: sven 
console.log( obj1. getName.call( obj2 ) ); // 输 出: anne
