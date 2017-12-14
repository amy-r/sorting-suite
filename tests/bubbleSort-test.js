const chai = require('chai');
const assert = chai.assert;
const bubbleSort = require('../bubbleSort.js')


describe('bubbleSort', function() {

  it('should return true', function() {
    assert.equal('true', 'true')
  });

  it('should be able to sort a small array', function() {
    var newArray = [7,2,5,1];
    bubbleSort(newArray);
    assert.deepEqual(newArray, [1,2,5,7])
  })

  it('should be able to sort a large array', function() {
    var newArray= [];

    for (let i=0; i<13260; i++) {
      var num = Math.floor(Math.random() * 10)
      newArray.push(num)
    };

    bubbleSort(newArray);

    for (let i = 0; i > newArray.length; i++)
      assert.equal(newArray[i] > newArray[i-1]);
  });

  it('should be able to sort an array of negative numbers', function() {
    var newArray = [ -1, -5, -10, -6, -4];
    bubbleSort(newArray);
    assert.deepEqual(newArray, [-10, -6, -5, -4, -1]);

  })

  it('should be able to sort an array of negative and positive numbers', function() {
    var newArray = [ -5, -9, 9, 10,];
    bubbleSort(newArray);
    assert.deepEqual(newArray, [-9, -5, 9, 10])
  })

  it('should be able to sort an array of letters', function() {
    var letterArray = [ 'a', 'd', 'b', 'c']
    bubbleSort(letterArray);
    assert.deepEqual(letterArray, ['a', 'b', 'c', 'd'])
  })
})





