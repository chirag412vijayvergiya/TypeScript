// Index Signatures

// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }

interface TransactionObj {
    readonly [index: string] : number
}

const todayTransactions: TransactionObj = {
    Pizza: -1,
    Books: 10,
    Job: 50
}

console.log(todayTransactions.Pizza);
console.log(todayTransactions['Pizza']);

let prop: string = 'Pizza';
console.log(todayTransactions[prop]);


const todayNet = (trans: TransactionObj) : number => {
    let total = 0;

    for(const i in trans){
        total += trans[i];
    }

    return total;
}

console.log(todayNet(todayTransactions))

// todayTransactions.Pizza = 40 // If readonly index signature will not able to assign

console.log(todayTransactions['chirag']) // will retrun unefined if it is not a property

interface Student {
    [key: string]: string | number | number[] | undefined,
    name: string,
    GPA: number,
    classes ?: number[]
}

const student: Student = {
    name: "Chirag",
    GPA: 3.64,
    classes: [100, 200]
}

console.log(student)

for(const key in student){
    console.log(`${key} : ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'name');


///////////////////////////

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    salary: "dkf",
    bonus: 100,
    sidehustle: 300
}

for(const revenue in monthlyIncomes){
    console.log(monthlyIncomes[revenue as keyof Incomes])
}