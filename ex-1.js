let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  let ans = words.map(ans => ans.length)
  console.log(ans);
  return ans;
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
