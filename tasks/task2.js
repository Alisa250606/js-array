const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
]

function getTopScoringStudents(students) {
  const topScorers = []; 
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
      topScorers.push(students[i].name); 
    }
  }
  return topScorers; 
}


function getAverageAge(students) {
  let totalAge = 0; 
  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age; 
  }
  return totalAge / students.length; 
}


function addStudent(students, student) {
  const newStudents = []; 
  for (let i = 0; i < students.length; i++) {
    newStudents.push(students[i]); 
  }
  newStudents.push(student); 
  return newStudents;
}
function removeStudentByName(students, name) {
  const updatedStudents = []; 
  for (let i = 0; i < students.length; i++) {
    if (students[i].name !== name) {
      updatedStudents.push(students[i]); 
    }
  }
  return updatedStudents; 
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName};
