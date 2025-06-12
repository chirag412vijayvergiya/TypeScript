// Type Alias
type StringorNumber = string | number;

type StringorNumberArray = (string | number)[];

type Guitariest = {
    name?: string,
    active: boolean,
    albums: StringorNumberArray
}

type userId = StringorNumber

// Literal Types

let myName: 'chirag'

let userName: 'chirag' | 'vijay' | 'vergiya'

userName = 'vergiya'
// userName = 'dfn'

const add = (a: number, b: number) => {
    return a + b;
}

const logMsg = (message: any): void => {
    console.log(message);
}

logMsg("Hello!");
logMsg(add(2, 3));
// logMsg(add('2', 3));

let subtract = function(a: number, b: number) {
    return a - b;
}

type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = function(c, d) {
    return c * d;
}

logMsg(multiply(2, 3))

// Optional Parameters 
const addAll = (a: number, b: number, c?: number) => {
    if(typeof c !== 'undefined'){
        return a + b + c;
    }

    return a + b;
}

// default
const sumAll = (a: number = 10, b: number, c: number = 2) => {

    return a + b + c;
}

logMsg(sumAll(undefined, 3));
logMsg(sumAll(4, 3));

//Rest Parameters
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr);
}

logMsg(total(1, 2, 3, 4, 5, 6));

const total1 = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
}

logMsg(total(10, 2, 5));

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

const infinite = () => {
    let i: number = 1;
    while (true){
        i++;
        if(i > 100) break;
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false;
}

// use of never type
const numberOrString = (value: number | string): string => {
    if(typeof value === 'string') return 'string';
    if(isNumber(value)) return 'number';
    return createError('This should never happen!')
} 


