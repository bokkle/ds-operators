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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/*

//order of the obj keys don't have to match the destructured
//obj in the function above
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

//DESTRUCTURING OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//renaming variables w/ destructuring
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values (ex. menu = []) are useful when we dont have access
//to the data
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // need wrap in parenthesis if starting line w/ {}
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: cls },
} = openingHours;
// console.log(open, close);
console.log(o, cls);


//DESTRUCTURING ARRAYS
//old way
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

//descructuring
const [x, y, z] = arr;
console.log(x, y, z);

//the empty comma allows you to skip a variable
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//old way to switch variables, use a temp
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary, 'old way);

//destructuring to switch variables
[main, secondary] = [secondary, main];
console.log(main, secondary, 'destructuring');

//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse)

//destructuring nested arr
const nested = [2, 4, [5, 6]]
// const [i, , j] = nested
// console.log(i, j)
const [i, , [j, k]] = nested
console.log(i, j, k)

//Default vals
//can be useful when retrieving data from aPI
const [p=1, q=1, r=1] = [8, 9]
console.log(p, q, r)


//SPREAD OPERATOR
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//effectively 'spreads' the arr into the newArr
const newArr = [1, 2, ...arr];
console.log(newArr);

//when u need the elements of an array, individually
//the spread operator can be used
console.log(...newArr); // 1 2 7 8 9 instead of [1, 2, 7, 8, 9]

//when adding to arrays, like this, it actually creates a brand
//new array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//the spread operator takes all the elements from the array and
//doesnt create new variables
//as a result, we can only use it in places where we would
//otherwise write values separated by commas!!!!!!

//spread operator is good for creating shallow copies of arrays and
//merging arrays together

//copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//join 2+ arrays together
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

//spread op works on all iterables
//examples of iteragbles = strings, arrays, maps, sets
//DOES NOT INCL OBJECTS?
const str = 'Mitch';
const letters = [...str, ' ', 'R.'];
console.log(letters); // ['M', 'i', 't', 'c', 'h', ' ', 'R.']
console.log(...str);
// console.log(`${...str} Riccio`); // will not work

//spread operator with functions
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

//old way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//spread op
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { founded: 1998, ...restaurant, founder: 'Benito' }
console.log(newRestaurant)

//making a copy of obj
const restaurantCopy = {...restaurant}
restaurantCopy.name = 'Ristorante Roma'
console.log(restaurantCopy.name)
console.log(restaurant.name)

//REST PATTERN AND REST PARAMETERS
//does the opposite of the spread operator
//spread unpacks and array & rest packs items into array

//DESTRUCTURING W REST
//SPREAD bc on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
//REST bc on LEFT side of =
//rest collects items that are unused in descructuring assignment
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//REST must always be last in the destructuring assignment
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//rest w/ objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//FUNCTIONS W REST
//using rest operater allows the function to take in
//an array (like x) as well as normal values
const add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(add(2, 3));
console.log(add(5, 3, 7, 2));
console.log(add(8, 2, 5, 3, 2, 1, 4));

const x = [23, 5, 7];
console.log(add(...x));

restaurant.orderPizza('pepperoni', 'cheese', 'olives', 'pineapple');
restaurant.orderPizza('mushrooms')

//KEY NOTES
//REST USED W VARIABLE NAMES, SPREAD USED WITH VALUES

//SHORT CIRCUITING
//logical operators can USE & RETURN any data type
//they can also short circuit

//short circuit = if first value is truthy, it will immediately be rtnd
//JS doesnt even look at the 2nd operand
console.log('---OR---');
console.log(3 || 'Mitch'); // 3
console.log('' || 'Mitch'); // Mitch
console.log(true || 0); // true
console.log(undefined || null); // null even though it is falsy

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //hello

//both of these will not work if guests = 0
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---AND---');
//and is only true if all the operants are true
//if they're all true, the last operant is logged
console.log(0 && 'Mitch'); // 0 bc short circs when first value is falsy
console.log(8 && 'Mitch'); // Mitch

console.log('Hello' && 23 && null && 'Mitch'); //null bc it is falsy and
//therefore makes the entire operation falsy

//practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('pepperoni', 'cheese')
}

restaurant.orderPizza && restaurant.orderPizza('pepperoni', 'bbq sauce')

//KEY NOTES 
//OR OP RETURNS FIRST TRUTHY VALUE OF ALL THE OPERANTS, OR
//THE LAST VALUE IF ALL OF THEM ARE FALSY
//AND OP RETURNS FIRST FALSY VALUE, OR THE LAST ONE IF 
//ALL OF THEM ARE TRUTHY

// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//nullish coalescing operator ?? works with nullish instead of falsy vals
//null and undefined (NOT 0, OR '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//OR assignment operator, code below = code above

// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

// ??= works when numGuests = 0
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>'; //undefined bc doesnt exist
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // both are truthy, so rtns
//the last value

//assigns a value to a variable if it is currently truthy
rest1.owner &&= '<ANONYMOUS>' //nothing
rest2.owner &&= '<ANONYMOUS>' // <ANON>

console.log(rest1);
console.log(rest2);
*/
