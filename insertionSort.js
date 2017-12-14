let numbers = [6, 3, 2, 8, 4, 7]

function insertionSort(array) {
  
  // find number to insert
  for (let i = 1; i < array.length; i ++) {
    
    // find place to insert
    for (let j = i; j > 0 && array[j] < array [j-1]; j --) {
      
      if ( array[ j ] < array[ j-1 ] ) {
        [ array[j], array[j-1] ] = [ array[j-1], array[j] ]
      }
    
     //insert into the correct spot
    }
  }
  console.log(array)
}

module.exports = insertionSort;