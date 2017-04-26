// Find the sum of all multiples of 3 or 5 below 1000.


var addMultiples = 0;

for (var i = 0; i < 1000; i++) {
  
  if (i % 3 === 0 || i % 5 === 0) {
    
    addMultiples += i;
    
  }
}

console.log('The sum of all multiples of 3 or 5 below 1000 is: ' + addMultiples);
