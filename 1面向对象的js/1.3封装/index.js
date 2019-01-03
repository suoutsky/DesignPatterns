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
