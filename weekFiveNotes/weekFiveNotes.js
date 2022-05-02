/*Object Oriented Programming (OOP); Most 
commonly used methodology of how to write 
code; Objects interact with other objects 

Dvd Player
--------------------------
Attributes:
Height
Weight
Width
Color

Functions:
Play
Fast Forward
Rewind
Pause
Attributes and functions make up description
of DVD player

DVD
--------------------------
Movie Length
Image
Size
*/

/*Pillars of OOP:
Abstraction: hides complexity by giving a 
30,000 ft view of an object; ex: all vehicles 
move - how they move is different.
Encapsulation: hides details of how a method 
works; when you drive a vehicle you don't 
know what the engine is doing; the car works 
because the functionality has been encapsulated 
so we don't have to worry about it. We have 
to know how to drive, but not what goes on 
under the hood
Inheritance: OOP allows objects to inherit 
properties 
and functionality from other classes -- parent 
classes
and base classes pass properties and 
functionality to other classes that inherit 
it.
Polymorphism: somthing takes multiple 
different forms; animals communicate 
differently from one another; */

/*Classes group code together in a logical 
way; objects caan be created from classes; 
an object is an instance of a class; 
ex: a house is an instance of a blueprint that
can be used to create multiple houses */

/* classes follow PascalCase where the 
first letter of every word is capitalized.*/ 

/* Everything between the curly braces is
the blueprint for the class*/

class Student {
    constructor(firstName, lastName, phoneNumber, grade) {
    /*constructor gets called when we create 
    an instance of student*/ 
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade; /*'this' keyword
        is used to specify the field that 
        belongs to the instance*/
    }
    introduce() { /*this is a method, not a 
    function; a method is a function that 
    belongs to an object or class; 
    it's not a stand-alone object itself; it 
    belongs to a class*/
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    } 
}
/*the values below get passed into the constructor above*/
let student1 = new Student('Tom', 'Sawyer', '6155555555', 'A');
let student2 = new Student('Sam', 'Smith', '6158888888', 'A');

student1.introduce();
student2.introduce();

/*Each class should be in charge of one thing;
Anytime you have a new concept that needs 
properties and functionality, build a class 
for it; Instantiation: instantiate an 
instance of our class*/

/* Shared code gets moved into a parent class
 and two classes with same code inherit from 
 the parent class; keeps common code in one 
 place and only have to change code in one 
 place */

/*class PromotionSender {
    constructor(){

    }

    sendNotification(notification) {
       console.log('Sending: ' + notification); 
    }

    findUsersWithStatus(status) {
        let users = getUsers(status);
        return users;
    }
    calculateDiscount(status) {
        if (status === 'GOLD') {
            return .3;
        } else if (status === 'SILVER') {
            return .15; 
        }
        return 0;
    }
}

class CollectionsSender {
    constructor() {

    }
    sendNotification(notification){
        console.log('Sending: ' + notification);
    }
    findUsersWithStatus(status) {
        letUsers = getUsers(status); 
        return users; 
    }

    calculateFee(status) {
        if (status === 'OVERDUE'){
            return 10;
        } else if (status === 'Delinquent'){
            return 25;
        }
        return 5;
    }
}*/
 /* In the above code, there are two instances 
 with identical code: two instances with 
 sendNotification code and two instances of 
findUsersWithStstus code; these can be combined 
into a parent class as below. */

class NotificationSender {
    constructor(status) {
        this.status = status; 
    }
    sendNotification(notification){
        console.log('Sending: ' + notification);
    }
    /*the above class was created as a parent class
    and the previous code was removed from the 
    other two instances, so it only needs to be
    used once*/

    findUsersWithStatus(status) {
        letUsers = getUsers(status); 
        return users; 
    }
}

class PromotionSender extends NotificationSender{
    /*'extends' keyword is used to inherit from 
    another class*/
    constructor(status){
        super(status); /*'super' refers to the 
        parent class; when followed by parentheses
        it refers to the parent class constructor
        'super' is like 'this'; super refers 
        to the specific instance of the parent 
        class you inherit from; b/c these notifications
        inherit from the NotificationSender class, 
        they have access to the methods in the 
        NotificationSender class   */
    }

    calculateDiscount(status) {
        if (status === 'GOLD') {
            return .3;
        } else if (status === 'SILVER') {
            return .15; 
        }
        return 0;
    }
}

class CollectionsSender extends NotificationSender{
    constructor(status) {
         super(status);  
    }
calculateFee(status) {
        if (status === 'OVERDUE'){
            return 10;
        } else if (status === 'Delinquent'){
            return 25;
        }
        return 5;
    }
}
let collectionsSender = new CollectionsSender('OVERDUE');
collectionsSender.sendNotification('this is a test collections notification');
/* even though sendNotification is not in the 
CollectionsSender class, because we inherit it 
from NotificationSender we have access to it */

/* Handling exceptions: if our program relies 
on another program to send information, and 
that other program fails, it could cause an 
error in our program regardless of how well our
code is written; we need to use try/catch 
blocks to handle exceptions that night be 
thrown; we catch exceptions and tell our program 
how to gracefully handle it, rather than allowing
our program to crash */

/*Example: 
list.push('hello');
console.log('goodbye'); error was thrown 
while trying to push to an array that doesn't 
exist; we didn't declare the array*/

try {
    list.push('hello');
    } catch (err) {
        console.log(err);
    }
    console.log('goodbye'); /*even though an 
    exception is thrown, our program still logs 
    goodbye*/ /*we could also add a 'finally' 
    block; the code in this block will run
    whether an exception is thrown or not*/

    /* despite the above example, handling 
    exceptions with try/catch is for the 
    exceptions we don't have control of (using 
    other people's libraries or networking 
    exceptions -- something outside of the 
    control of our own application) not because
    of our failure to write proper code*/