
  //start with a merge function
  function merge(half1, half2) {
    
  let result = [];

  while (half1.length && half2.length) {
    
    if (half1[0] < half2[0]) {
    result.push(half1.shift());
    } else {
      result.push(half2.shift());
    }
  }
  
  while (half1.length) {
    result.push(half1.shift());
  }
  
  while(half2.length) {
    result.push(half2.shift());
  }
  
  return result;
}

//mergeSort function 

module.exports = function mergeSort(array) {
  //base case
  if (array.length <=1) {
    return array
  }
  
  let middle = Math.floor(array.length/2)
  
  let half1 = array.slice(0, middle)
  let half2 = array.slice(middle)
  
  return merge(mergeSort(half1), mergeSort(half2));
}



// module.exports = mergeSort;