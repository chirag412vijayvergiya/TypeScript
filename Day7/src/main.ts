const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg != null);
}

console.log(isObj(true));
console.log(isObj({name: 'chirag'}))
console.log(isObj([1, 2, 4]))

const isTrue = <T>(arg: T): {arg: T, is: boolean} => {

    if(Array.isArray(arg) && !arg.length){
        return {arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg, is: false}
    }

    return {arg, is: !!arg}
}

console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue({}));
console.log(isTrue({ name: "Chirag" }));
console.log(isTrue(""));
console.log(isTrue("hello"));
console.log(isTrue(0));
console.log(isTrue(42));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue(true));
console.log(isTrue(false));

interface BoolCheck<T> {
    value: T,
    is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {

    if(Array.isArray(arg) && !arg.length){
        return {value: arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {value: arg, is: false}
    }

    return {value: arg, is: !!arg}
}

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {

    return user
}

console.log(processUser({id: 1, name: 'Chirag'}))
// console.log(processUser({name: 'Chirag'}))

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const users = [
    {
        id: 1,
        name: "Chirag Vijayvergiya",
        email: "chirag@example.com",
        phone: "1234567890",
        role: "Developer",
        active: true
    },
    {
        id: 2,
        name: "John Doe",
        email: "john@example.com",
        phone: "9876543210",
        role: "Designer",
        active: false
    },
    {
        id: 3,
        name: "Alice Smith",
        email: "alice@example.com",
        phone: "5551234567",
        role: "Manager",
        active: true
    }
];

console.log(getUsersProperty(users, "email"))
console.log(getUsersProperty(users, "name"))

class StateObject<T> {
    private data: T

    constructor(value: T){
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T){
        this.data = value
    }
}

const store = new StateObject("Chirag")
console.log(store.state)
store.state = "vijay"

const myState = new StateObject<(String | number | boolean)[]>([15])
myState.state = (['chirag', 32, true])
console.log(myState.state)