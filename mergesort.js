function split(arr) {
  const halfway = Math.ceil(arr.length / 2);
  const half1 = arr.slice(0, halfway);
  const half2 = arr.slice(halfway, arr.length);
  return [half1, half2];
}
function merge(left, right, fn) {
  let sorted = []
  while (left.length > 0 && right.length > 0) {
    //compare left and right first index and shift and push into new arr
    if (fn(left[0], right[0]) < 0) {
      sorted.push(left.shift());
    }
    else {
      sorted.push(right.shift());
    }
  }
  if (left.length > 0) {
    sorted = [...sorted, ...left];
  }
  else {
    sorted = [...sorted, ...right];
  }
  return sorted;
}

function mergeSort(arr, func) {
  console.log(arr);
  console.log(func);
  if (arr.length > 1) {
    let [left, right] = split(arr);
    return merge(mergeSort(left, func), mergeSort(right, func), func);
  }
  else {
    return arr;
  }
}

function comparator(a, b) {
  if (a && b) {
    if (a < b) return -1; // returning `-1` means "a goes before b"
    if (a > b) return 1;  // returning  `1` means "b goes before a"
    return 0; // returning 0 means "a and b are equivalent"}
  }
}
function reverse(a, b) {
  if (a && b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  }
}



function obj(a, b) {
  if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
  if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
  return 0; // returning 0 means "a and b are equivalent"
}

function string(a, b) {
  if (a.length < b.length) return -1;
  if (a.length > b.length) return 1;
  return 0;
}

