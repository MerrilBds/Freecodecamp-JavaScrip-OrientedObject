/*
In the previous challenge, you learned about creating a supertype called Animal that defines 
shared behaviors among all animals. 
In the following challenges, you will explore how to reuse those methods without redefining them
in each subtype. This is achieved through inheritance. In this specific challenge, 
you focus on the initial step of creating an instance of the supertype.
While you can create an instance of Animal using the new operator, 
there is an alternative approach that avoids certain complexities. 
By using Object.create(obj), you can create a new object and set obj as its prototype. 
This effectively provides the new object with the same "recipe" as any other instance of the supertype, 
allowing for inheritance and method reuse.
*/
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};




let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);