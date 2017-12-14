function bubbleSort(array) {
  
  for (let j = 0; j < array.length; j++)  {
  
    for (let i =0 ; i < array.length; i++) {  
      if (array[i] > array[i+1]) {
      //swap values. Use ES6 destructuring
        [ array[i], array[ i + 1 ] ] = [ array[ i + 1 ], array[i] ];
     }
   }
  }
}

module.exports = bubbleSort; 