//OBJEKT
var studentFirstName = "Bakyt";
var studentLastName = "Utanov";
var studentAge = 20;
var studentOccupied = false;

var student = {
    firstName: "Bakyt",
    lastName: "Utanov",
    age: 20,
    occupied: false,
    sayHello: function () {
        console.log("Hello, my name is" + this.firstName + "and I'am" + this.age + "years old!");
    }
};

// output
// console.log(student.firstName + " " + student.lastName);

var dog = {
    name: "Kumaiyk",
    age: 2,
}
// update
dog.age =3;
// console.log(dog.age);

//add 
dog.color = "gray";
// console.log(dog.color);

//delete
delete dog.color;

// Methobs
dog.bark = function {
    console.log("Woof, woof, woof!");
}

dog.bark();
dog.bark();

student.sayHello();

// ARRAYs 

var shoppingList1 = "Apple";
var shoppingList2 = "Pear";

var shoppingList = ["Apple", "Pear", "Pinapple", "Salt", "perry"];

//output
// console.log(shoppingList[0]);
// console.log(shoppingList[1]);


//update
shoppingList[2] = "Tomato";
// console.log(shoppingList[20]);

//add to the end
shoppingList.push("Cherry");

//add to the beggining
shoppingList.unshift("Salt");

//delete
//remote from the end
shoppingList.pop();

//remove from the start
shoppingList.shift();

//show the list length
document.write("<ul>");
for (let i = 0; i < shoppingList.length; i++) {
    document.write("<li>" + shoppingList[i] + "</li>");    
}
document.write("</ul>");

