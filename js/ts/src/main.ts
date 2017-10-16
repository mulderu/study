class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");


let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`

console.log (sentence);


let xlist: Array<number> = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;

enum xColor {Red = 1, Green = 2, Blue = 4};
let xc: xColor = xColor.Green;

console.log ('c, xc', c, xc);

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

//notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure = 10.1;
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

let ylist: any[] = [1, true, "free"];

ylist[1] = 100;

console.log ('ylist', ylist);

function warnUser(): void {
    console.log("This is my warning message");
}
let unusable: void = undefined;

console.log ('warnUser', warnUser(), 'unusable', unusable);

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

let xsomeValue: any = "this is a string";

let xstrLength: number = (xsomeValue as string).length;





