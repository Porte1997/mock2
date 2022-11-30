// Clouser---> Clouser in action that is inner function can have access to
// the outer function variables and parameters as well as the global variables.

//------> A clouser is the combination of a function and the lexical
//          environment within which that function was declared.

//------> The return statement does not execute the inner function,
//          function is executed only when followed by (), but rather the
//          return statement returns the entire body of the function. 
// const sName = 'shubham';

// function outer(city){
//     const sureName = 'porte';
//     function inner(){
//         const age = 25;
//         console.log(`I am ${sName} ${sureName} my age is ${age} & I am form ${city}.`);
//     }
//     inner();
// }
// outer('bilaspur');



// Slice & Splice---------->

// Slice----> The slice() method returns a shallow copy of a portion of an
//          array into a new array object.
// let numbers = [2,3,5,7,11,13,17];
// create another array by slicing numbers from index 3 to 5
// let newArray = numbers.slice(2, 5);
// console.log(newArray); // [5, 7, 11]
// 1. if we don't pass any argument to slice method than it will return 
//      the whole array.
// 2. if we pass just one argument to slice method than it will return the
//      array from index which is passed as the argument to the end of original
//      array.
// 3. if we pass two arguments to slice method than the new array will get
//      the elements from index as first arguments to the index as the second
//      argument, index as second arguments will be excluded at the end, it
//      will print till second_argument - 1.
// 4. if we pass negative arguments than it will count the index from the
//      last index where last index will be -1. and when we move from last
//      to first the indexes will be -1, -2, -3....... 

// const languages = ["JavaScript", "Python", "C", "C++", "Java"];

// // // slicing the array from start to second-to-last
// // let new_arr = languages.slice(0, -1);
// // console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// // // slicing the array from third-to-secondlast
// let new_arr1 = languages.slice(-3, -1);
// console.log(new_arr1); // [ 'C', 'C++']
// // // slicing the array from third-to-secondlast
// let new_arr2 = languages.slice(3, -1);
// console.log(new_arr2); // [ 'C', 'C++', 'Java']

// Splice----> The splice method returns an array by changing (adding/removing)
//              its elements in place.


// let prime_numbers = [2, 3, 5, 7, 9, 11];

// replace 1 element from index 4 by 13
// let removedElement = prime_numbers.splice(4, 1, 13);
// console.log(removedElement); // [ 9 ]
// console.log(prime_numbers);// [ 2, 3, 5, 7, 13, 11 ]

// splice() syntax-->
//    arr.splice(startIndex, deleteCount, item1, item2, item3, ..., itemN);
// splice() Parameters -->
// 1. start => The index from where the array is changed.
// 2. deletecount(Optional) => The number of items to remove from start.
// 3. item1, ..., itemN (Optional) => The elements to add to the start index.
//      if not specified, splice() will only remove elements from the array.

// splice() Return Value -->
// => Returns an array containing the deleted elements.
// Note: The splice() method changes the original array.

// let languages = ["JavaScript", "Python", "Java", "Lua"];

// // replacing "Java" & "Lua" with "C" & "C++"
// let removed = languages.splice(2, 2, "C", "C++");
// console.log(removed); // [ 'Java', 'Lua' ]
// console.log(languages); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// // adding elements without deleting existing elements
// let removed1 = languages.splice(1, 0, "Java", "Lua");
// console.log(removed1); // []
// console.log(languages); // [ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]

// // removing 3 elements
// let removed2 = languages.splice(2, 3);
// console.log(removed2); // [ 'Lua', 'Python', 'C' ]
// console.log(languages); // [ 'JavaScript', 'Java', 'C++' ]


// => Using splice() for different deleteCount values
//   1. If start > array.length, splice() does not delete anything and
//      starts appending arguments to the end of the array.
//   2. If start < 0, the index is counted from backward
//      (array.length + start). For example, -1 is the last element.
//   3. If array.length + start < 0, it will begin from index 0.


// let languages = ["JavaScript", "Python", "Java", "Lua"];

// does not removes, only appends to the end
// let removed = languages.splice(5, 2, "C++");
// console.log(removed); // []
// console.log(languages); // ["JavaScript", "Python", "Java", "Lua", "C++"]

// remove last element and add 3 more elements
// let removed1 = languages.splice(-1, 1, "Swift", "Scala", "Go");
// console.log(removed1); // [ "C++" ]
// console.log(languages); 
// ["JavaScript", "Python", "Java", "Lua", "Swift", "Scala", "Go"]

// ===> Using splice() for different start values--->
// 1.  if deleteCount is omitted or is greater than the number of elements
//      left in the array, it deletes all elements from start to end of the array.
// 2.  if deleteCount is 0 or negative, no elements are removed. but, at least
//      one new element should be specified.

// let languages = ["JavaScript", "Python", "Java", "Lua"];

// // removes everything from start
// let removed = languages.splice(1);
// console.log(removed); // [ "Python", "Java", "Lua" ]
// console.log(languages); // [ "JavaScript" ]

// // remove none & add 3 more element
// let removed1 = languages.splice(1, -2, "Swift", "Scala", "Go");
// console.log(removed1); // [ ]
// console.log(languages); // [ "JavaScript", "Swift", "Scala", "Go" ]