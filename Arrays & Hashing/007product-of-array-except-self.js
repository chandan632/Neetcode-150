/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = new Array(nums.length);

  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix = nums[i] * prefix;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * postfix;
    postfix = nums[i] * postfix;
  }

  return result;
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // [24, 12, 8, 6]
