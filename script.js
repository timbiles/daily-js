///// Problem 6 /////

// Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.

// E.g

// selReverse([1,2,3,4,5,6], 2)
// //=> [2,1, 4,3, 6,5]
// if after reversing some portions of the array and the length of the remaining portion in the array is not up to the length argument, just reverse them.

// selReverse([2,4,6,8,10,12,14,16], 3)
// //=> [6,4,2, 12,10,8, 16,14]
// selReverse(array, length)

const reverseNum = (arr, num) => { 
    if(arr.length === 0){
      return arr
    }
  
    let newArr = [];
  
    for(let i=0; i<(num < arr.length ? num : arr.length); i++){
      newArr.push(arr[i])
    }
  arr.splice(newArr, num)
  newArr.reverse()
  return newArr.concat(reverseNum(arr,num)) 
  }
  
  console.log('reversed >>>', reverseNum([1,2,3,4,5,6], 2))


///// Problem 5 /////

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


const spinWords = str =>{
    return str.split(' ').map(e=>{
      return e.length >= 5 ? e.split('').reverse().join('') : e
    }).join(' ')
  }

///// Problem 4 /////


// Write a class function named repeat() that takes two arguments (a string and a long integer), and returns a new string where the input string is repeated that many times. 

const repeater = (str, n) =>str.repeat(n)

console.log('Pete and Repeat >>>', repeater('b', 4))


///// Problem 3 /////
  
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

const switcheroo = x => {
    let split = x.split('')
    for(let i=0; i<split.length; i++){
      if(split[i] === 'a'){
        split[i] = 'b'
      } else if(split[i] === 'b'){
        split[i] = 'a'
      }
    }
    return split.join('')
  }
  
  console.log('switch >>>',switcheroo('abc'))


///// Problem 2 /////

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the column (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

const pillars = (p, dist, width) =>{
    if(p === 1) return 0
    return ((p-2)*width) + ((p-1)*(dist*100))
  }
  
  console.log('pillars >>>', pillars(2, 20, 25))


///// Problem 1 /////

// Calculate the product of all elements in an array.

//If the array is null or is empty, the function should return null.

const product = val => {
    if(val === null || val.length === 0) return null;
    return val.reduce((acc, e)=> acc*e, 1)
  }
  
  const num = [1, 2, 3, 4, 5]
  console.log('product >>>', product(num))