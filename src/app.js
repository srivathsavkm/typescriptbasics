"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//Basic data types
var id = 5;
var company = "sri";
var isTrue = true;
//any type can hold any value
var x;
//Arrays
var ids = [1, 2, 3];
var arr = [1, true, 'hi'];
//Tuples
var tup = [1, 'hello', true];
//Tuple Array
var employee;
employee = [
    [1, 'sri'],
    [2, 'kumar']
];
//Union
var pid;
//Enum
//By default values will start from 0
var directions;
(function (directions) {
    directions[directions["up"] = 0] = "up";
    directions[directions["down"] = 1] = "down";
    directions[directions["left"] = 2] = "left";
    directions[directions["right"] = 3] = "right";
})(directions || (directions = {}));
//If we set the first value 1 then it will start from 1
var directions1;
(function (directions1) {
    directions1[directions1["up"] = 1] = "up";
    directions1[directions1["down"] = 2] = "down";
    directions1[directions1["left"] = 3] = "left";
    directions1[directions1["right"] = 4] = "right";
})(directions1 || (directions1 = {}));
//String enums
var directions2;
(function (directions2) {
    directions2["up"] = "up";
    directions2["down"] = "down";
})(directions2 || (directions2 = {}));
var user = {
    id: 1,
    name: 'sri'
};
//Type Assertion
var cid = 1;
//let customerId = <number>cid
var customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
//console.log(addNum(1, 2))
//void function
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: 'sri'
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
//Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    return Person;
}());
var sri = new Person(1, 'sri');
//console.log(sri.name)
//Data/Access Modifiers
//Public by default
//3 types - public, private or protected
var Person1 = /** @class */ (function () {
    function Person1(id, name) {
        this.id = id;
        this.name = name;
    }
    Person1.prototype.register = function () {
        return this.name + " is now registered";
    };
    return Person1;
}());
var sri1 = new Person1(1, 'sri');
var Person2 = /** @class */ (function () {
    function Person2(id, name) {
        this.id = id;
        this.name = name;
    }
    Person2.prototype.register = function () {
        return this.name + " is now registered";
    };
    return Person2;
}());
//Extend Class
//Employee class is called sub-class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person1));
var emp = new Employee(3, 'ram', 'Dev');
//Generics - Reusable components
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3]);
var strArray = getArray(['s', 'k', 'm']);
numArray.push('hello'); //Here without generics we will be able to push string to number array
function getArray1(items) {
    return new Array().concat(items);
}
var numArray1 = getArray1([1, 2, 3]);
var strArray1 = getArray1(['s', 'k', 'm']);
//numArray1.push('hello') //We wont be able to push string to numArray1 since we used generics
//Loops
var someArr = [1, 'sri', true];
for (var _i = 0, someArr_1 = someArr; _i < someArr_1.length; _i++) {
    var entry = someArr_1[_i];
    //console.log(entry)
}
var numbers = [1, 2, 3, 4];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        //console.log(numbers[i])
    }
}
//Import class from another file
var index_1 = require("./index");
var obj = new index_1.student();
console.log(obj.add(1, 5));
