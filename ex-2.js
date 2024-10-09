let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  let ans = words.filter(ans => ans.length>= 5)
  console.log(ans)
  return ans
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
