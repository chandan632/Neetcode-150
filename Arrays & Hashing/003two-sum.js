/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) return [map.get(diff), i];

    map.set(nums[i], i);
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([3, 2, 3], 6)); // [0, 2]
console.log(twoSum([3, 2, 4], 8)); // []
console.log(twoSum([3, 2, 4], 7)); // [0, 2]
console.log(twoSum([3, 2, 4], 5)); // [0, 1]