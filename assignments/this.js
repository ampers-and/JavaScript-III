/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
    In the global scope, 'this' is the global object.

* 2. Implicit Binding
    Implicit binding is when 'this' refers to the object preceding the .function().

* 3. New Binding
    When a constructor function is used, that is, when a new object is created using a function, 'this' refers to the created object.

* 4. Explicit Binding
    When using the .call or .apply function, 'this' is the called object.
    .call and .apply overide the implicit binding.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function double(a)
{
    console.log(this);
    return 2*a;
}
double(3);

// Principle 2

// code example for Implicit Binding

const num = {
    sentence: 'This squared is ',
    square: function(n){
        return this.sentence + n * n;
    }
}
console.log(num.square(5));

// Principle 3

// code example for New Binding
function Number(n)
{
    this.squared = n * n;
    this.answer = `${n} squared is ${this.squared}`
    this.speak = function(){
        console.log(this.answer);
    }
}

const seven = new Number (7);
seven.speak();

// Principle 4

// code example for Explicit Binding

const eight = new Number (8);
eight.speak();
eight.speak.call(seven);