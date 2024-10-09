const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let sum = students.map(ans => ans.score).reduce((acc,cur)=> acc + cur)
  console.log(sum)
  let ans = sum/students.length

  console.log(ans)
  return ans;
}

console.log(getAverageStudentScore(students)); // Output: 87.5