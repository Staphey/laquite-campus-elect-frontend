import React from "react";
import Student from "./User";

export type StudentType = {
  studentId: string;
  department: string;
  email: string;
  name: string;
  role: "STUDENT" | "ADMIN";
};

const StudentsList = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/students`
  );

  const students: StudentType[] = await res.json();

  return (
    <div>
      {students.map((student) => {
        return (
          <Student
            key={student.studentId}
            id={student.studentId}
            name={student.name}
            email={student.email}
            department={student.department}
            role={student.role}
          />
        );
      })}
    </div>
  );
};

export default StudentsList;
