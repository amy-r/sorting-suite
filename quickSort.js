function quickSort(array) {
  let pivot =  array[array.length - 1];
  let smaller = [];
  let larger = [];
  
  //base case 
  if (array.length <=1) {
    return array
  }
  
  //getting closer to the base case
  for (i= array.length -2; i >=0; i--) {
    if (array[i] <= pivot) {
      smaller.push(array[i]);
    }
    
     else {
      larger.push(array[i])
    }
    
  }
   return quickSort(smaller).concat(pivot, quickSort(larger));
   
}



module.exports = quickSort;