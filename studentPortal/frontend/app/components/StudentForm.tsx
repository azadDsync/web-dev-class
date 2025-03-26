'use client';
import { useState } from "react";
import { addStudent } from "../utils/api";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [marks, setMarks] = useState([
    { subject: "DIP", marks: 0 },
    { subject: "DAA", marks: 0 },
    { subject: "GT", marks: 0 },
    { subject: "IWT", marks: 0 },
    { subject: "AI", marks: 0 }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const studentData = {
      name,
      roll_number: rollNumber,
      marks
    };

    try {
      await addStudent(studentData);
      alert("Student added successfully!");
    } catch (error) {
      console.error("Failed to add student", error);
      alert("Failed to add student");
    }
  };

  const handleMarksChange = (index: number, value: number) => {
    const newMarks = [...marks];
    newMarks[index].marks = value;
    setMarks(newMarks);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Student Marks</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full mb-3"
          required
        />

        <input
          type="text"
          placeholder="Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          className="border p-2 rounded w-full mb-3"
          required
        />

        {marks.map((mark, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="w-20">{mark.subject}</span>
            <input
              type="number"
              value={mark.marks}
              onChange={(e) => handleMarksChange(index, Number(e.target.value))}
              className="border p-2 rounded w-full"
            />
          </div>
        ))}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
