const chai = require('chai');
const assert = chai.assert;
const quickSort = require('../quickSort.js');

describe('quickSort', function() {

  it('should be able to sort a small array', function() {
    var newArray = [7,2,5,1,10];
    assert(quickSort(newArray), [1,2,5,7,10])
  })

  it('should be able to sort a large array', function() {
    var newArray = [];

    for (let i =0; i < 5000; i++) {
      var num = Math.floor(Math.random() * 10)
      newArray.push(num)
    };

    quickSort(newArray);

    for (let i = 0; i > newArray.length; i++) {
      assert.equal(newArray[i] > newArray[i-1])
    } 
  });

  it('should be able to sort an array of negative numbers', function() {
    var negativeArray = [-4, -6, -3, -7];
    assert(quickSort(negativeArray),[-7, -6, -4, -3])
  });

  it('should be able to sort an array of negative and positive numbers', function() {
    var negativeArray = [-4, 6, 3, -7];
    assert(quickSort(negativeArray),[-7, -4, 3, 6])
  });

  it('should be able to sort an array of letters', function() {
    var letterArray = ['c', 'a', 'd', 'b'];
    assert(quickSort(letterArray), ['a', 'b', 'c', 'd'])
  })
})