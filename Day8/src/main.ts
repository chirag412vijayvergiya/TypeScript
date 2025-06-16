// Utility types

// partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified ?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>) : Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "dskfh124",
    title: "Capstone project",
    grade: 0
}

console.log(updateAssignment(assign1, {grade: 95}))
const assignGraded: Assignment = updateAssignment(assign1, {grade: 95})


// Required and Readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc:
    return assign
}

const assignVerified: Readonly<Assignment> = {...assign1, verified: true}

// assignVerified.grade = 45
recordAssignment({...assignGraded, verified: true})

// Record
const hexColorMap: Record<string, string> = {
    red: "dsfsdf",
    green: "sfdsfs",
    blue: "sdaasd"
}

type Students = "Chirag" | "Vijay"
type Grades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, Grades> = {
    Chirag : "A",
    Vijay : "B"
}

interface Grades2 {
    assign1: number,
    assign2: Number
}

const GradesA: Record<Students, Grades2> = {
    Chirag : {assign1: 90, assign2: 76},
    Vijay: {assign1: 69, assign2: 55}
}

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "f123",
    grade: 89
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId : "K234",
    title: "Caps Project"
}

// Exclude and Extract

type AdjustedGrade = Exclude<Grades, "U">

type highGrades = Extract<Grades, "A" | "B">

// Nonnullable
type AllPossibleGrades = 'chirag' | 'vijay' | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType

// type newAssign = {title: string, points: number}

// const createnewAssign = (title: string, points: number): newAssign => {
//     return {title, points}
// }

// type newAssign = {title: string, points: number}

const createnewAssign = (title: string, points: number) => {
    return {title, points}
}

type newAssign = ReturnType<typeof createnewAssign>

const tsAssign: newAssign = createnewAssign("Utility types", 89)
console.log(tsAssign)

// Parameters
type AssignParams = Parameters<typeof createnewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: newAssign = createnewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - help us with the ReturnType of a Promise

interface user {
    id: number,
    name: string,
    username:string,
    email: string
}

const fetchUsers = async(): Promise<user[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json()
    }).catch(err => {
        if(err instanceof Error) console.log(err.message);
    })

    return data
}

type FetchUsersReturnType =  Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users));

// const x: FetchUsersReturnType = await fetchUsers();

async function main() {
  const x: FetchUsersReturnType = await fetchUsers();
  console.log("Using async/await:", x);
}


main();