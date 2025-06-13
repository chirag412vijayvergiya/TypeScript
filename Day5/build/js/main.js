"use strict";
// class coder{
//     name: string
//     music: string
//     age: number
//     lang: string
//     constructor(
//         name: string,
//         music: string,
//         age: number,
//         lang: string,
//     ){
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
// }
// visibilty modifiers
class coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello! My Age is ${this.age}.`;
    }
}
const chirag = new coder('Chirag', 'Rock', 21);
console.log(chirag.getAge());
class WebDev extends coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I am writing ${this.lang}`;
    }
}
const Chirru = new WebDev('Mac', 'Chirru', 'Rocky', 23);
console.log(Chirru.getLang());
console.log(Chirru.getAge());
class Guitariest {
    constructor(name, instrument) {
        this.name = name,
            this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}.`;
    }
}
const Page = new Guitariest('Chirag', 'Guitar');
console.log(Page.play('strums'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0; // Static applies directly to the class
const Cherry = new Peeps('Cherry');
const Chirag = new Peeps('Chirag');
const Shambhu = new Peeps('Shambhu');
const Ram = new Peeps('Ram');
console.log(Peeps.count);
console.log(Chirag.id);
////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(e => typeof e === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const myBands = new Bands();
myBands.data = ['xyz', 'pqr'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'erdd'];
console.log(myBands.data);
// myBands.data = 'cjknd' 
