import { Seq } from "immutable";

const printBestStudents = (grades) => {
  const studentsSeq = Seq(grades);

  const bestStudents = studentsSeq.filter((student) => student.score >= 70);

  const capitalizedStudents = bestStudents.map((student) => ({
    ...student,
    firstName:
      student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
    lastName:
      student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
  }));

  console.log(capitalizedStudents.toJS());
};
