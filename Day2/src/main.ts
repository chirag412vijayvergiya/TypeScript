// let myName = 'Chirag';
let myName: string = 'Vijay';
let Age: number = 21;
let isLoading: boolean;
let album:  any; // Any mean any data types we can assign again
let x1: number | string;

// myName = 43
myName = 'chirru';
Age = 22;
isLoading = false;
album = 323


console.log("My name is :- ", myName);
console.log("My Age is :- ", Age);
console.log("Is Loading ? :- ", isLoading);
console.log("Album means :- ", album);

const sum = (a: number, b: string) => {
    return a + b;
}

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;

let x: string = sum(5, '6');

console.log(x);

let stringArr = ['One', 'chirag', 'vijay'];

let guitars = ['strat', 'something', 1243];

let mixedData = ['EVH', 231, true];

// stringArr.push(32); It will give error

guitars.push(32);

let test = [];
let bands: string[] = [];
bands.push('1');

let myTuple : [string, number, boolean] = ['chirag', 42, true];

let mixed = ['chirag1', 432, false];

mixed = myTuple;

console.log(mixed);

// myTuple = mixed;

let myObj:  object;
myObj = [];

console.log(typeof myObj);

myObj = bands;
myObj =  {};

let exampleObj = {
    prop1 : 'chirag',
    prop2 : true
}

console.log(exampleObj);

exampleObj.prop1 = 'vijay';

// type guitariest = {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }

interface guitariest{
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: guitariest = {
    name: 'chirag',
    active: false,
    albums: ['vijay', 23]
}

let evh1: guitariest = {
    // name: 'chirag',
    active: false,
    albums: ['vijay', 23]
}

console.log(evh);
console.log(evh1);

let wantname = (gt: guitariest) => {
    if(gt.name)
        return `Hello ${gt.name?.toUpperCase()}! with active ${gt.active.valueOf()}`
    else 
        return `Hello with active ${gt.active.valueOf()}`;
}

console.log(wantname(evh1));
console.log(wantname(evh))

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)
console.log(Grade.A)