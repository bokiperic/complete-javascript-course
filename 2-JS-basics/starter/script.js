/****************************
* Variables and data tyoes
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var  3years = 3;
var  John/Mike =  'John and Mike';
var function = 23;
*/

/*******************************************
* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age); // age is automaticallly changed to String type. Thats because 'type coercion'.

// When declaring many variables - first declaration,  after that definition of every one of them.
var job, isMarried;
job = 'Teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? '  + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'Driver';
alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? '  + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*********************
 * Basic operators
 */
/*
var now, ageJohn, ageMark;
ageJohn = 28;
ageMark = 33;
now  =  2020

 // Math operators
var yearJohn = now - yearJohn;
var yearMark = now - yearMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now - 2);
console.log(now / 10 );

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*************************
 * Operator precedence
 * (which operator is executed  first)
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge); 

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
*/

/********************* 
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus ===  'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married!');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married!');
}
*/

/*****************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
}  else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 || age < 30) {
    console.log(firstName + ' is a young man.')
} else {
    console.log(firstName + ' is a man.');
}
*/

/***********************************
* The Ternary Operator and Switch Statements
*/
// Ternary  operator
/*
var firstName = 'John';
age = 18;
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch statement
var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an Uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

// Below if-else statement switched  to switch statement :)
switch (true)  {
    case age  < 13:
        console.log(firstName + ' is  a boy.');
        break;
    case age >=13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 || age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/
/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
}  else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 || age < 30) {
    console.log(firstName + ' is a young man.')
} else {
    console.log(firstName + ' is a man.');
}
*/

/*****************
* Thruthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN - will be converted to FALSE if a part of True/False condition
// thruty values: all the values that are NOT falsy
/*
var height;
height = 23;
if (height || height === 0) {
    console.log("The variable is defined!");
} else {
    console.log("The variable is NOT defined!");
}

// Equality operators

if (height == '23') {
    console.log("The == operator does  type coercion!")
}
*/