type One = string;
type two = string | number
type three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as two // less specific
let c = a as three // more specific

let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if(c === 'add') return a + b;
    return '' + a + b;
}

let myVal: string = addOrConcat(2, 2, 'concat') as string

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

// 10 as string 
(10 as unknown) as string

// The DOM

const img = document.querySelector('img') as HTMLImageElement
const myImg = document.getElementById('#img') as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById('#img') 
img.src
myImg.src