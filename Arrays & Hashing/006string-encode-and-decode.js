// https://neetcode.io/problems/string-encode-and-decode

class Solution {
  /**
   * Encodes a list of strings into a single string.
   * @param {string[]} strs - Array of strings to encode.
   * @returns {string} Encoded string.
   */
  encode(strs) {
    return strs.map((str) => `${str.length}#${str}`).join("");
  }

  /**
   * Decodes a single string back into a list of strings.
   * @param {string} encodedStr - Encoded string.
   * @returns {string[]} Decoded array of strings.
   */
  decode(encodedStr) {
    const result = [];
    let i = 0;

    while (i < encodedStr.length) {
      const delimiterIndex = encodedStr.indexOf("#", i);
      const length = parseInt(encodedStr.slice(i, delimiterIndex), 10);

      const startIndex = delimiterIndex + 1;
      const endIndex = startIndex + length;
      result.push(encodedStr.slice(startIndex, endIndex));

      i = endIndex;
    }

    return result;
  }
}

const solution = new Solution();
const original = ["hello", "world", "leet", "code"];
const encoded = solution.encode(original);
const decoded = solution.decode(encoded);

console.log("Original:", original); // ["hello", "world", "leet", "code"]
console.log("Encoded:", encoded); // "5#hello5#world4#leet4#code"
console.log("Decoded:", decoded); // ["hello", "world", "leet", "code"]
