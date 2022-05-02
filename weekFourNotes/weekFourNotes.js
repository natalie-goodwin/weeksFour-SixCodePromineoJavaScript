/* Var, Const, Let
ES6  came out in 2015, aka ES2015 

Var is replaced with Let and Const in ES6*/

/*Let can be declared only within a blocked scope; 
the variable no longer exists outside of the block.
This means you can use different values for the same
variable within different blocks; one block's value
will not be affected by another block's value, even if both 
blocks have the same variable*/

var x = 10;  /*here, x = 10; if we had used var 
inside the block, it would have just changed the 
variable's value*/
console.log(x);

{
    let x = 2;  /*in this block, x is reassigned to 2, 
    but only in this block scope*/
    console.log(x);
}
//here, x = 10

/*Const means we cannot change the variable's value
regardless of where it is located; the value 
always stays the same*/

const pi = 3.14159;

console.log(pi); /*this prints because 
above it was declared a constant*/

/* but with pi = 6, it will not print b/c you cannot 
re-declare constant values; this is useful when you don't 
want to accidentally change a variable's value, or
you don't want other developers accidentally changing values*/ 

/* Template Literals: enhance the way in which we work with 
strings; we wrap text in back-ticks instead of quotes; 
create mult-line strings so we don't have to concatenate strings
to create multi-line strings*/

/*ES6 way*/ 
let myString = `Hello
World
my name
is Natalie`;

console.log(myString);

/* below is the old way and is more difficult to read*/
let anotherString = 'Hello\nWorld\nmy name\nis Natalie';

console.log(anotherString);

/*So people would concatenate with the method below */

let anotherString2 = 'Hello' + 
'\nWorld' + 
'\nmy name' + 
'\nis Natalie';

console.log(anotherString2); /*Also complicated*/
 /*Template literals reduce time by putting multi-line strings 
 in back-ticks */

 /*Template literals allow interpolation; Interpolate: execute 
 code inside a string or in a different language */

/* Interpolation can be done by wrapping javascript we want 
to execute into curly braces, preceded by a dollar sign*/

 console.log(`Six times five = ${5 * 6}`); /*template will make 
 the code more dynamic*/

 /*Arrow (fat arrow) function; binds current scope to function*/

 let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
 console.log(createFullName ('Natalie', 'Goodwin'));

/* with multiple lines or curly braces, the return keyword is 
needed */

let someFunction = (a, b) => {
    let result = '';
    for(let i = 0; i < b; i++) {
        result += a;
    }
    return result;
};

console.log(someFunction('Hello', 3));

/*With arrow function, if you have one parameter, 
you don't need parentheses [ex: let catBird = a =>], but if 
you have no parameters, you need blank parenthesis 
[ex: let fishDog = a() =>] */

/*Best practice: create a const variable (instead of let) and 
assign an arrow function to it when creating a stand alone 
arrow function so the value of your function will not be 
changed later on; this applies if you do not want to pass 
the function into something else anonymously*/

/*Javascript is single-threaded and runs one line of code at a time; this is not a problem until 
we have a line of code that reads or writes to an external program and 
we have to wait for something to happen outside of our code's control; 
the line of code waiting on an external source could end up blocking 
the following lines of code from running until this line completes;*/

/*Callbacks: when we pass a function into another function to be executed 
when that code is complete so it doesn't cause a delay */

let username = sendHttpRequest('getUser');
console.log(usermname); /* if we use this trying to reach out to a 
different server to get a username; 
we couldn't get it because the username hasn't come back in time*/

function logUsername(user) {   /*this is an accurate way;  logUsername 
function is passed into the sendHttpRequest function as an argument; 
sendHttpRequest function does what it needs and the last line of code 
in the function would be a call to the logUsername function where 
it passes the user name it grabbed in as a function, and the user 
function logs it out*/
    console.log(user);
}
sendHttpRequest('getUser', logUsername);

sendHttpRequest('getUser', user => console.log(user)); /*anonymously 
called; it's anonymous because we didn't assign a name to the function; 
it's only being used as an argument in this one call; if we were going
to use it over and over again, we would want to give it a name as in 
the previous Http example*/

/* When we work with other libraries there will be calls that are 
asynchronous that take a callback and we pass in a function that 
is executed at the end of the function of the  third party library 
that we are using*/ 

/* Promises: solves same problem as a callback except they are 
cleaner to write and produce code that is easier to read; a promise is
an objects that represents the eventual completion or failure of 
an asynchronous operation; an asyn function can return a promise and 
we can send a promise that says when this issue resolves do something if 
the call was successful or do something else if the call was 
unsuccessful; we use the 'then' and 'catch' methods to handle the 
completion or failure of the operation relatively*/ 

doSomethingThatReturnsAPromise() /* we call a function that returns a promise*/
    .then((value) => { /* if it's successful, you get back a value*/
        console.log(value);
    }) .catch((err) => { /*if unsuccessful, log out the error*/ 
        console.error(err);
    });

    function handleEvent(value) {
        console.log(value); /* works same as above, but if we use it multiple times, do the bove and give it a name*/
    }

    function handleError(err) {
        console.error(err);
    }

    doSomethingThatReturnsAPromise() 
        .then(handleEvent)
        .catch(handleError);
    



