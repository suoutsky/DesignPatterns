function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
}

var objFact = function() {
    var obj = new Object();
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
}

var a =  objFact(Person, 'senven');
console.log(a.name);