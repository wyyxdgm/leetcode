// 给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。

// 假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

// 注意：每次拼写时，chars 中的每个字母都只能用一次。

// 返回词汇表 words 中你掌握的所有单词的 长度之和。
// 

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let len = words.length;
  let size = 0;

  function countCharsToJson(chars) {
    let cArr = chars.split('');
    let json = {};
    for (let c of cArr) {
      if (!json[c]) json[c] = 1
      else json[c]++;
    }
    return json;
  }
  let minCharsMap = countCharsToJson(chars);
console.log(minCharsMap)
  for (let i = 0; i < len; i++) {
    let testObj = countCharsToJson(words[i])
    let fined = words[i].length;
    console.log('----------------------')
    console.log(testObj)
    for (let key in testObj) {
      if (!minCharsMap[key] || minCharsMap[key] < testObj[key]) { fined = 0; break; }
    }
    size += fined;
  }
  return size;
};


let words = ["cat", "bt", "hat", "tree"];
let chars = "atach";

// words = ["hello","world","leetcode"], chars = "welldonehoneyr"

let re = countCharacters(words, chars);
console.log(re);