"use strict";
// let myName = 'Chirag';
let myName = 'Vijay';
let Age = 21;
let isLoading;
let album; // Any mean any data types we can assign again
let x1;
// myName = 43
myName = 'chirru';
Age = 22;
isLoading = false;
album = 323;
console.log("My name is :- ", myName);
console.log("My Age is :- ", Age);
console.log("Is Loading ? :- ", isLoading);
console.log("Album means :- ", album);
const sum = (a, b) => {
    return a + b;
};
let postId;
let isActive;
let re = /\w+/g;
let x = sum(5, '6');
console.log(x);
let stringArr = ['One', 'chirag', 'vijay'];
let guitars = ['strat', 'something', 1243];
let mixedData = ['EVH', 231, true];
// stringArr.push(32); It will give error
guitars.push(32);
let test = [];
let bands = [];
bands.push('1');
let myTuple = ['chirag', 42, true];
let mixed = ['chirag1', 432, false];
mixed = myTuple;
console.log(mixed);
// myTuple = mixed;
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
let exampleObj = {
    prop1: 'chirag',
    prop2: true
};
console.log(exampleObj);
exampleObj.prop1 = 'vijay';
let evh = {
    name: 'chirag',
    active: false,
    albums: ['vijay', 23]
};
let evh1 = {
    // name: 'chirag',
    active: false,
    albums: ['vijay', 23]
};
console.log(evh);
console.log(evh1);
let wantname = (gt) => {
    var _a;
    if (gt.name)
        return `Hello ${(_a = gt.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}! with active ${gt.active.valueOf()}`;
    else
        return `Hello with active ${gt.active.valueOf()}`;
};
console.log(wantname(evh1));
console.log(wantname(evh));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.A);
