'use strict';

function getInfo(firstName, lastName) {
  return 'Hi I am ' + firstName + '' + lastName;
}

function createPerson(fn, ln) {
  return {
    getInfo: function() {
      return getInfo(fn, ln)
    }
  };
}

function getId(empid) {
  return 'Hi my employee id is ' + empid;
}

// createEmployee makes use of composition.
// It's simple. Any function which makes use of other functions to compose
// functionality is said to be making use of composition.
function createEmployee(fn, ln, empid) {
  return {
    getId: function() { return getId(empid); },
    getInfo: function() { return getInfo(fn, ln); }
  };
}

var e2 = createEmployee('John', 'Doe', 123);
console.log( e2.getInfo() ); // Hi I am John Doe
console.log( e2.getId() );   // Hi my employee id is 123
