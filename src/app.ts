//Basic data types
let id: number = 5
let company: string = "sri"
let isTrue: boolean = true

//any type can hold any value
let x: any

//Arrays
let ids: number[] = [1,2,3]
let arr: any[] = [1, true, 'hi']

//Tuples
let tup: [number, string, boolean] = [1, 'hello', true]

//Tuple Array
let employee: [number, string][]
employee = [
    [1, 'sri'],
    [2, 'kumar']
]

//Union
let pid: string|number

//Enum
//By default values will start from 0
enum directions{
    up,
    down,
    left,
    right
}

//If we set the first value 1 then it will start from 1
enum directions1{
    up=1,
    down,
    left,
    right
}

//String enums
enum directions2{
    up='up',
    down='down'
}

//Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'sri'
}

//Type Assertion
let cid: any = 1
//let customerId = <number>cid
let customerId = cid as number

//Functions
function addNum(x: number, y: number): number{
    return x + y
}

//console.log(addNum(1, 2))

//void function
function log(message: string | number): void{
    console.log(message);
}

//Interface
//We cant use interface with unions or primitives
//Similar to types
interface UserInterface {
    readonly id: number, //avoid modifications
    name: string,
    age?: number //optional parameter ?
}

const user1: UserInterface = {
    id: 1,
    name: 'sri'
}

//Interface Functions
interface MathFunc{
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

//Classes
class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

const sri = new Person(1, 'sri')
//console.log(sri.name)

//Data/Access Modifiers
//Public by default
//3 types - public, private or protected

class Person1 {
    private id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}

const sri1 = new Person1(1, 'sri')

//console.log(sri1.register()) 

//Implement Interface with Class
interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

class Person2 implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}

//Extend Class
//Employee class is called sub-class
class Employee extends Person1{
    position: string
    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'ram', 'Dev')

//Generics - Reusable components
function getArray(items: any[]): any[]{
    return new Array().concat(items)
}

let numArray = getArray([1,2,3])
let strArray = getArray(['s','k','m'])

numArray.push('hello') //Here without generics we will be able to push string to number array

function getArray1<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray1 = getArray1<number>([1,2,3])
let strArray1 = getArray1<string>(['s','k','m'])

//numArray1.push('hello') //We wont be able to push string to numArray1 since we used generics


//Loops
let someArr = [1, 'sri', true]

for(let entry of someArr){
    //console.log(entry)
}

var numbers = [1,2,3,4]
for(var i=0;i<numbers.length;i++){
    if(numbers[i] % 2 == 0){
        //console.log(numbers[i])
    }
}

//Import class from another file
import {student} from './index'

let obj = new student()
console.log(obj.add(1, 5))