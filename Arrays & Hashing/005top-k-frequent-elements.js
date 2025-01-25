/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);

  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(sorted[i][0]);
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]
console.log(topKFrequent([1], 1)); // Output: [1]
console.log(topKFrequent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // Output: [1, 2, 3] (or any 3 elements since all have the same frequency)
console.log(
  topKFrequent([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 2, 2, 2, 3, 3], 2)
); // Output: [4, 1]
console.log(
  topKFrequent(
    [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10],
    5
  )
); // Output: [1, 2, 3, 4, 5] (or any 5 elements since all have the same frequency)
