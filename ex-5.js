const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  const total = students.reduce((total, student) => (total + student.score), 0 )
  return total/students.length

}


let result = getAverageStudentScore(students);
console.log(result) // Output: 87.5
