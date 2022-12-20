/*3)Write a method that returns a unique array
 const data = [1, 2, 1, 2, 3];
 output= [1, 2, 3]

 const data = [1, 2, 1, 2, 3];
 const uniq = (data) => {
    return [...new Set(data)];
 };
 console.log (uniq(data));
 4)Write a method that returns array of age
const data=[{name:"Jack",age:"22"},{name:"David",age:"18"},{name:"Rohit",age:"4"}]
outpput=>[24,18,4] 

const datas=[
    {name:"Jack",age:"22"},
    {name:"David",age:"18"},
    {name:"Rohit",age:"4"}];

    function getAges(datas) {
      return datas.map(item => item.age);
    }
    
    const ages = getAges(datas);
    console.log(ages);
    

    /*
5)Write a method to find minumum and maximum values 
 const data=[10,100,3,200,5,6]
 output: max=>200
        min=>3*/
/*
function minMax(data) {
  let min = data[0];
  let max = data[0];

  for (const value of data) {
    if (value < min) {
      min = value;
    }
    if (value > max) {
      max = value;
    }
  }

  return { min, max };
}

const result = minMax(data);
console.log(`max: ${result.max}`); 
console.log(`min: ${result.min}`);

/*6)Write a method to sort array without using sort method 
const data= [4, 50, 1, 5, 8];
output =[1,4,5,8,50]

const data = [4, 50, 1, 5, 8];

function sortArray(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        [data[i], data[j]] = [data[j], data[i]];
      }
    }
  }

  return data;
}

const sortedData = sortArray(data);
console.log(sortedData);


1)Write a JavaScript method that takes an array of numbers and returns the array of second and third  smallest number.
 Input: [12,33,5,27,1] 
 output =[5,27]

 function getSecondAndThirdSmallest(data) {
    data.sort((a, b) => a - b); 
    return [data[1], data[2]]; 
  }
  
  const result = getSecondAndThirdSmallest([12, 33, 5, 27, 1]);
  console.log(result);

 /* 2)Write a JavaScript method that takes an array of numbers and returns false if every number is not prime. Otherwise return true
[1,7,11,13] =>true
[2,3,45]=>false



function checkForPrimes(data) {
    // helper function to check if a number is prime
    function isPrime(n) {
      if (n < 2) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    }
  
    // check if every element of the array is prime
    return data.every(isPrime);
  }
  
  console.log(checkForPrimes([1, 7, 11, 13])); // prints true
  console.log(checkForPrimes([2, 3, 45])); // prints false


  I hope this helps! Let me know if you have any other questions.

/*
3)Given an array of nums and an integer target, return index of the two numbers such that they add up to target.
 You may assume that each input would have exactly one solution, and you may not use the same element twice
 Input: nums = [2,7,11,15], target = 9
 Output: [0,1]
 Input: nums = [3,2,4], target = 6
 Output: [1,2]

 function twoSum(nums, target) {
  const numMap = {}; // create an empty object to store the numbers and their indexes

  // iterate over the array and store the numbers and their indexes in the object
  for (let i = 0; i < nums.length; i++) {
    numMap[nums[i]] = i;
  }

  // iterate over the array again and check if the complement of each number (target - num) is in the object
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap[complement] !== undefined && numMap[complement] !== i) {
      // if the complement is in the object and has a different index, return the indexes of the two numbers
      return [i, numMap[complement]];
    }
  }

  return null; // if no two numbers add up to the target, return null
}

console.log(twoSum([2, 7, 11, 15], 9)); // prints [0, 1]
console.log(twoSum([3, 2, 4], 6)); // prints [1, 2]


4))Write a JavaScript method that takes array of objects 
  const data = [
    { food: {name:"pizza", id: 2 }, qty: 1 },
    { food: {name:"momo",id: 3 }, qty: 5 },
    { food: { name:"pizza",id: 2 }, qty: 9 }
  ];
//should be unique according to id and should sum the qty with same id 
output=[food:{name:"pizza",qty:10}]

const data = [
  { food: { name: "pizza", id: 2 }, qty: 1 },
  { food: { name: "momo", id: 3 }, qty: 5 },
  { food: { name: "pizza", id: 2 }, qty: 9 }
];

function sumByID(data) {
  const result = []; // create an empty array to store the result

  // iterate over the array and sum the qty of items with the same id
  for (const item of data) {
    const id = item.food.id;
    const found = result.find(i => i.food.id === id);
    if (found) {
      found.qty += item.qty;
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(sumByID(data));
*/

//Reduce method :In JavaScript, the reduce method is a higher-order function that is used to apply a function to each element of an array and reduce the array to a single value
//const numbers = [1, 2, 3, 4, 5];

//const sum = numbers.reduce((acc, current) => acc + current, 0);

//console.log(sum); // prints 15
//The reduce method can be used to perform a variety of operations on an array, such as finding the maximum or minimum value, concatenating the elements of an array into a string, or flattening a multi-dimensional array.



//callback functions : Callback functions are often used in asynchronous programming, where they are used to specify the actions that should be taken after a certain operation has completed. They are also commonly used in higher-order functions, such as map, filter, and reduce, to perform an operation on each element of an array.
//it is are used to perform an action after a certain event has occurred or to compute a value based on the result of another operation.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word=> word.length>5);
console.log(result);

// Arrow function
filter((element) => { /* … */ })
filter((element, index) => { /* … */ })
filter((element, index, array) => { /* … */ })

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)

// Inline callback function
filter(function (element) { /* … */ })
filter(function (element, index) { /* … */ })
filter(function (element, index, array) { /* … */ })
filter(function (element, index, array) { /* … */ }, thisArg)


The filter() method is a copying method. It does not alter this but instead returns a shallow copy that contains the same elements as the ones from the original array (with some filtered out). However, the function provided as callbackFn can mutate the array. Note, however, that the length of the array is saved before the first invocation of callbackFn. Therefore:

callbackFn will not visit any elements added beyond the array's initial length when the call to filter() began.
Changes to already-visited indexes do not cause callbackFn to be invoked on them again.
If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time that element gets visited. Deleted elements are not visited.
Warning: Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

The filter() method is generic. It only expects the this value to have a length property and integer-keyed properties.