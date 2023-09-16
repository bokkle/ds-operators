'use strict';

// DESTRUCTURING ARRAYS

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24, // open 24h
    },
  },
};

//reverse a string
const reverse = (str) => {
  const reversed = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join('');
};
console.log(reverse('code'));

//take in string, add 1 after each character, except for spaces
const addOnes = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      result.push(`${str[i]}1`);
    } else {
      result.push(' ');
    }
  }
  return result.join('');
};

//remove numbers from string
const removeNums = (str) => {
  const noNums = [];
  const nums = '1234567890';
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      noNums.push(str[i]);
    }
    if (str[i] === ' ') {
      noNums.push(' ');
    }
  }
  return noNums.join('');
};

const countBy = (x, n) => {
  const result = []
  for (let i = x; i <= (n * x); i += x) {
    result.push(i)
  }
  return result
}
console.log(countBy(10, 10))
