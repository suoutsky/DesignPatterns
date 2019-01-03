##1.3 封装
```js
var myObj = (function(){
    var _name = 'senven';
    return { 
        getName: function () {
          console.log(_name);
        }
    } 
}());

myObj.getName();

// 返回的方法；
var myobj = (function() {
    var _name = "senven 鬼神";
    return function getName() {
        console.log(_name);
        return _name;
    }
})();

console.log(myobj());
```

##3.1.2 变量的生命周期
```js

var func = function(){ 
    var a = 1; 
    return function(){ a + +; alert ( a ); }
}; 
var f = func(); 
f(); // 输 出： 2 
f(); // 输 出： 3 
f(); // 输 出： 4 
f(); // 输 出： 5
```

