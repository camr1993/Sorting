/* eslint-env jasmine */
/* global bubbleSort */

const bubbleSort = require('./bubblesort.js');


describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('is an array', function() {
    expect(Array.isArray(bubbleSort([]))).toEqual(true);
  });

  it('sorts an unsorted array', function(){
    expect( bubbleSort([3, 1, 2, 5, 7, 6, 4]) ).toEqual( [1, 2, 3, 4, 5, 6, 7] );
  });

  it('handles a already sorted array', function(){
    expect( bubbleSort([1, 2, 3, 4, 5, 6, 7]) ).toEqual( [1, 2, 3, 4, 5, 6, 7] );
  });

  it('handles an unsorted array of characters', function(){
    expect( bubbleSort(['d', 'c', 'b', 'e', 'a']) ).toEqual( ['a', 'b', 'c', 'd', 'e'] );
  });
});

