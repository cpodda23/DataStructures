const input = [1, 3, 4, 6, 7, 8, 10, 13, 14, 23, 31, 37, 40, 42, 46];

// O(log n)
const binarySearch = (array, v) => {
  if (array.length === 1) {
    return array[0] === v ? v : null;
  }
  const middleIdx = Math.floor(array.length / 2);
  const middle = array[middleIdx];
  if (v > middle) {
    return binarySearch(array.slice(middleIdx), v);
  }
  if (v < middle) {
    return binarySearch(array.slice(0, middleIdx), v);
  }
  return v;
};

console.log(binarySearch(input, 37)); // 37
console.log(binarySearch(input, 1000)); // null
