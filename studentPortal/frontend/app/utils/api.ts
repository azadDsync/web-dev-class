import axios from "axios";

const API_URL ="http://localhost:4001" 

export const addStudent = async (data: any) => {
  const response = await axios.post(`${API_URL}/add-student`, data);
  return response.data;
};

export const getStudentByRoll = async (rollNumber: string) => {
  const response = await axios.get(`${API_URL}/get-student-by-roll/${rollNumber}`);
  return response.data;
};
