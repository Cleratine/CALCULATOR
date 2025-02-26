let a = prompt('enter a');
let b = prompt('enter b');
let c = prompt('enter c');
a = Number(a);
b = Number(b);
c = Number(c);
const add = function(a,b) {
   return a + b
};
console.log(add(a,b))
const subtract = function(a,b) {
   return a-b
};
console.log(subtract(a,b))
const sum = function(a,b) {
   return a + b + c; 
};
console.log(sum(a,b,c))

const multiply = function(a,b) {
  return a * b  
};
console.log(multiply(a,b))
const power = function() {
    return a ** b
};
console.log(power(a,b))
const factorial = function(c) {
    
        if (c === 0) { 
            return 1; 
        } 
        else if(c < 0){
            return undefined;
        
        }
        else { 
            return c * factorial(--c); 
        } 
    };
    console.log(factorial(c))