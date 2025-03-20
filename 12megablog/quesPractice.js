/* eslint-disable no-unused-vars */
let data = [
  { id: 101, name: "adam", marks: 82 },
  { id: 103, name: "jhon", marks: 53 },
  { id: 102, name: "ritika", marks: 48 },
  { id: 104, name: "joe", marks: 63 },
  { id: 105, name: "joe", marks: 38 },
];

//  const calculateMarks = (data)=> {
//       let result = 0;
//        data.map(student=> {
//              let marks = student.marks < 50 ? student.marks +15 : student.marks;
//               result += marks;
//        });
//       return result;

//  }

//   OR we can use reduce directly

// const calculateMarks = (data) => {

//    return data.reduce((total , student)=>{
//          let result =  student.marks<50 ? student.marks +15 : student.marks;
//           return result+total;
//     },0);
// }

//  const studentNames =(data) => {

//     return data
//     .filter(student => student.marks>60)
//     .map(student => student.name);
//  }

//  const maxMarks = (scorer) => {
//     return scorer
//     .reduce((highScorer , currMarks) => {
//          return (currMarks.marks > highScorer.marks) ? currMarks : highScorer
//     })
//  }

const sortingmarks = (students) => {
  return students.sort((a, b) => b.marks - a.marks);
};

const avgMarks = (students) => {
  const avgMarks =
    students.reduce((total, student) => total + student.marks, 0) /
    students.length;
  return avgMarks;
};

const failedStudents = (students) => {
  return students.reduce((student, checker) => {
    if (checker.marks < 50) {
      student.push(checker);
    }
    return student;
  }, []);
};

const updateMarks = (students, Id, newMarks) => {
  const student = students.find((student) => student.id === Id);
  if (student) {
    student.marks = newMarks;
  } else {
    console.log(`couldn't find student with ${Id} id`);
  }
  return students;
};

const evenMarks = (students) => {
  return students
    .filter((student) => student.marks % 2 == 0)
    .map((student) => student.name);
};

const doubleMarks = data.map((student) => {
  return student.marks < 50
    ? { ...student, marks: student.marks * 2 }
    : student;
});

const names = data.map((student) => student.name);

const failedcheck = (students) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].marks < 40) {
      return true;
    }
  }
  return false;
};

console.log(failedcheck(data));

// console.log(names);
// console.log(doubleMarks);
// console.log(evenMarks(data));
//  console.log(updateMarks(data , 103 , 60));
//  console.log(failedStudents(data));
//  console.log(avgMarks(data));
//  console.log(sortingmarks(data));
//  console.log(maxMarks(data).name);

/*



Q1) Sort Students by Marks                    //   Done
Sort the student array in descending order of marks.

Q2) Calculate Average Marks                   //   Done 
Compute the average marks of all students.

Q3) Find Failing Students                     //   Done
Return an array of students who scored less than 50 (before adding 15).

Q4) Update Marks for a Specific Student       //   Done
If a student’s ID is provided, update their marks.

Q5) Find Students with Even Marks         // Done
Return the names of students whose marks are even numbers.

// Q6) Double Marks for Students Below 50     // Done
Instead of adding 15, double the marks of students who scored below 50.

Q7) Extract Only Names in an Array          //   Done
Return an array containing only student names.

Q8) Check If Any Student Failed           // Done
Return true if any student has marks below 40.

*/
