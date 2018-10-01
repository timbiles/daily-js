///// Problem 1 /////

// Calculate the product of all elements in an array.

//If the array is null or is empty, the function should return null.

const product = val => {
  if(val === null || val.length === 0) return null;
  return val.reduce((acc, e)=> acc*e, 1)
}

const num = [1, 2, 3, 4, 5]
console.log('product >>>', product(num))


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

