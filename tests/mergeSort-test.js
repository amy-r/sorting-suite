const chai = require('chai');
const assert = chai.assert;
const mergeSort = require('../mergeSort.js')

describe('mergeSort', function() {

  it('should be able to sort a small array', function() {
    var array = [7,2,5,1];
    assert(mergeSort(array),[1,2,5,7]);
  });

  it('should be able to sort a large array', function() {
    var newArray = [];

    for (let i =0; i<101400; i++) {
      var num = Math.floor(Math.random() * 10)
      newArray.push(num)
    };

    mergeSort(newArray);

    for (let i = 0; i > newArray.length; i++) {
      assert.equal(newArray[i] > newArray[i-1])
    } 
  });

  it('should be able to sort an array of negative numbers', function() {
    var negativeArray = [-4, -6, -3, -7];
    assert(mergeSort(negativeArray),[-7, -6, -4, -3])
  });

  it('should be able to sort an array of negative and positive numbers', function() {
    var negativeArray = [-4, 6, 3, -7];
    assert(mergeSort(negativeArray),[-7, -4, 3, 6])
  });

  it('should be able to sort an array of letters', function() {
    var letterArray = ['c', 'a', 'd', 'b'];
    assert(mergeSort(letterArray), ['a', 'b', 'c', 'd'])
  })
})