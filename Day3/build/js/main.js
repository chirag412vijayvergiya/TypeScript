"use strict";
// Literal Types
let myName;
let userName;
userName = 'vergiya';
// userName = 'dfn'
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
// logMsg(add('2', 3));
let subtract = function (a, b) {
    return a - b;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 3));
// Optional Parameters 
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(undefined, 3));
logMsg(sumAll(4, 3));
//Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5, 6));
const total1 = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 5));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
