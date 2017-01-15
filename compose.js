'use strict';

const compose = (f, g) => (x) => g(f(x));

const expenses = [
  {
    name: 'Rent',
    price: 500,
    type: 'Household'
  }, {
    name: 'Netflix',
    price: 5.99,
    type: 'Services'
  }, {
    name: 'Gym',
    price: 15,
    type: 'Health'
  }, {
    name: 'Bills',
    price: 100,
    type: 'Household'
  }
];

const sumAll = (arr) => arr
  .map((item) => item.price)
  .reduce((acc, price) => acc + price, 0);

let total = sumAll(expenses);
console.log(total);

var getHousehold = (src) => {
  return src.filter((item) => {
    return item.type === 'Household';
  });
};

const getHousehold2 = (src) =>
	src.filter((item) => item.type === 'Household');

const getCategories = (arr) => arr
  .map((item) => item.type);

const uniqueElements = (arr) => arr
  .filter((item, pos) => arr.indexOf(item) == pos);

console.log(getHousehold(expenses));
console.log(getCategories(expenses));


const uniqueCategories = compose(getCategories, uniqueElements);
// console.log(uniqueElements(expenses)); // [“Household”, “Services”, “Health”]
