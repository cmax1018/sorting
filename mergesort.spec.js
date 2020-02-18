describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2, 3], [4, 5]]);
  });
  it('is able to split an array into two halves', function () {
    expect(split([1])).toEqual([[1], []]);
  });
});
describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1,4], [2,5], comparator)).toEqual([1,2,4,5]);
  });
});
describe('MergeSort function', function(){
  it('is able to sort array into sorted array', function(){
    expect(mergeSort([1,5,3,6,2], comparator)).toEqual([1,2,3,5,6]);
  });
  it('is able to sort array of length 1 into sorted array', function(){
    expect(mergeSort([1]), comparator).toEqual([1]);
  });
  it('takes a custom comparator', function() {
    expect(mergeSort([1,2,3,4], reverse)).toEqual([4,3,2,1])
  })
  it('takes a custom object comparator', function() {
    expect(mergeSort([{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }], obj)).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
  })
  it('takes a custom string comparator', function() {
    expect(mergeSort(['addd', 'd22', 'c', 'be'], string)).toEqual(['c', 'be', 'd22', 'addd']);
  })


});
