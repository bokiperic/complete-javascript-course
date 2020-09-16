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
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge); 

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// // More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);