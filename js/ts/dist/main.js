var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
var xlist = [1, 2, 3];
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var xColor;
(function (xColor) {
    xColor[xColor["Red"] = 1] = "Red";
    xColor[xColor["Green"] = 2] = "Green";
    xColor[xColor["Blue"] = 4] = "Blue";
})(xColor || (xColor = {}));
;
var xc = xColor.Green;
console.log('c, xc', c, xc);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
//notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure = 10.1;
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
var ylist = [1, true, "free"];
ylist[1] = 100;
console.log('ylist', ylist);
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
console.log('warnUser', warnUser(), 'unusable', unusable);
var someValue = "this is a string";
var strLength = someValue.length;
var xsomeValue = "this is a string";
var xstrLength = xsomeValue.length;
