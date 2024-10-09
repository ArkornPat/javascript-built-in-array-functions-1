const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let totalScore = students.reduce((acc,cur)=>{
   return acc + cur.score
  },0)

  return totalScore/students.length
}

getAverageStudentScore(students); // Output: 87.5
console.log(getAverageStudentScore(students))