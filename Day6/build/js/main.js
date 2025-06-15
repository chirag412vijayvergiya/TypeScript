"use strict";
// Index Signatures
const todayTransactions = {
    Pizza: -1,
    Books: 10,
    Job: 50
};
console.log(todayTransactions.Pizza);
console.log(todayTransactions['Pizza']);
let prop = 'Pizza';
console.log(todayTransactions[prop]);
const todayNet = (trans) => {
    let total = 0;
    for (const i in trans) {
        total += trans[i];
    }
    return total;
};
console.log(todayNet(todayTransactions));
// todayTransactions.Pizza = 40 // If readonly index signature will not able to assign
console.log(todayTransactions['chirag']); // will retrun unefined if it is not a property
const student = {
    name: "Chirag",
    GPA: 3.64,
    classes: [100, 200]
};
console.log(student);
for (const key in student) {
    console.log(`${key} : ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: "dkf",
    bonus: 100,
    sidehustle: 300
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
