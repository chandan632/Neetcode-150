/**
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 0) return [];

  const map = new Map();

  const chars = new Array(26).fill(0);

  for (const str of strs) {
    chars.fill(0);

    for (const char of str) {
      chars[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const key = chars.join("#");

    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }

  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
console.log(groupAnagrams(["a", "b"])); // [["a"],["b"]]
console.log(groupAnagrams(["a", "a"])); // [["a","a"]]
console.log(groupAnagrams(["a", "b", "c"])); // [["a"],["b"],["c"]]
console.log(groupAnagrams(["a", "b", "a"])); // [["a","a"],["b"]]
console.log(groupAnagrams(["a", "b", "b"])); // [["a"],["b","b"]]
console.log(groupAnagrams(["a", "b", "c", "a"])); // [["a","a"],["b"],["c"]]
console.log(groupAnagrams(["a", "b", "c", "b"])); // [["a"],["b","b"],["c"]]
console.log(groupAnagrams(["listen", "silent", "enlist", "google", "gogole"])); // [["listen","silent","enlist"],["google","gogole"]]
console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "zyx", "yxz"])); // [["abc","bca","cab"],["xyz","zyx","yxz"]]
console.log(groupAnagrams(["rat", "tar", "art", "star", "tars", "rats"])); // [["rat","tar","art"],["star","tars","rats"]]
