"use strict";
// Utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "dskfh124",
    title: "Capstone project",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
const recordAssignment = (assign) => {
    // send to database, etc:
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assign1), { verified: true });
// assignVerified.grade = 45
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    red: "dsfsdf",
    green: "sfdsfs",
    blue: "sdaasd"
};
const finalGrades = {
    Chirag: "A",
    Vijay: "B"
};
const GradesA = {
    Chirag: { assign1: 90, assign2: 76 },
    Vijay: { assign1: 69, assign2: 55 }
};
const score = {
    studentId: "f123",
    grade: 89
};
const preview = {
    studentId: "K234",
    title: "Caps Project"
};
// ReturnType
// type newAssign = {title: string, points: number}
// const createnewAssign = (title: string, points: number): newAssign => {
//     return {title, points}
// }
// type newAssign = {title: string, points: number}
const createnewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createnewAssign("Utility types", 89);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createnewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
// const x: FetchUsersReturnType = await fetchUsers();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const x = yield fetchUsers();
        console.log("Using async/await:", x);
    });
}
main();
