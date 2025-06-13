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
class coder{
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'TypeScript',
    ){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge(){
        return `Hello! My Age is ${this.age}.`
    }
}


const chirag = new coder('Chirag', 'Rock', 21);
console.log(chirag.getAge());

class WebDev extends coder {
    constructor(
        public computer: string, 
        name: string,
        music: string,
        age: number
    ){
            super(name, music, age);
            this.computer = computer;
    }

    public getLang(){
        return `I am writing ${this.lang}`;
    }
}

const Chirru = new WebDev('Mac', 'Chirru', 'Rocky', 23)
console.log(Chirru.getLang())
console.log(Chirru.getAge());
// console.log(Chirru.age);
// console.log(Chirru.lang);

////////////////////////////////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitariest implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string){
        this.name = name,
        this.instrument = instrument
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}.`
    }
}

const Page = new Guitariest('Chirag', 'Guitar')
console.log(Page.play('strums'))

class Peeps {
    static count: number = 0; // Static applies directly to the class
    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string){
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const Cherry = new Peeps('Cherry')
const Chirag = new Peeps('Chirag')
const Shambhu = new Peeps('Shambhu')
const Ram = new Peeps('Ram')

console.log(Peeps.count);
console.log(Chirag.id)


////////////////////////////////////////

class Bands{
    private dataState: string[]

    constructor(){
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(e => typeof e === 'string')){
            this.dataState = value
            return
        }else{
            throw new Error('Param is not an array of strings')
        }
    }
}


const myBands = new Bands()
myBands.data = ['xyz', 'pqr']
console.log(myBands.data)

myBands.data = [...myBands.data, 'erdd']
console.log(myBands.data)


// myBands.data = 'cjknd' 