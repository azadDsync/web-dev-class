'use client';

import { useState } from "react";
import { getStudentByRoll } from "../utils/api";

const StudentList = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [student, setStudent] = useState<any>(null);

  const fetchStudent = async () => {
    try {
      const data = await getStudentByRoll(rollNumber);
      setStudent(data);
    } catch (error) {
      alert("Student not found");
      setStudent(null);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Search Student by Roll Number</h2>
      
      <input
        type="text"
        placeholder="Enter Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />

      <button
        onClick={fetchStudent}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      {student && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">Student Info</h3>
          <p>Name: {student.name}</p>
          <p>Roll Number: {student.roll_number}</p>
          <p>CGPA: {student.cgpa}</p>

          <h3 className="text-xl font-bold mt-2">Marks:</h3>
          <ul>
            {student.marks.map((mark: any, index: number) => (
              <li key={index}>
                {mark.subject}: {mark.marks}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentList;
