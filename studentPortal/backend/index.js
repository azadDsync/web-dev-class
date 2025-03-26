const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000" 
}));


const PORT = 4001;

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongoclassproject", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (err) {
    console.log("Error in connecting to database", err);
  }
};

connectDb();

const markSchema = new mongoose.Schema({
  subject: String,
  marks: Number,
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roll_number: { type: String, unique: true, required: true },
  marks: [markSchema],
  cgpa: { type: Number, default: 0 },
});

const Students = mongoose.model("Students", studentSchema);

const getCGPA = (marks) => {
  if (marks >= 85) return 10;
  if (marks >= 75) return 9;
  if (marks >= 65) return 8;
  if (marks >= 55) return 7;
  if (marks >= 45) return 6;
  return 5;
};

app.post("/add-student", async (req, res) => {
  try {
    const { name, roll_number, marks } = req.body;

    let totalCGPA = 0;

    marks.forEach((mark) => {
      totalCGPA += getCGPA(mark.marks) * 4; 
    });

    const finalCGPA = totalCGPA / (marks.length * 4); 

    const student = new Students({
      name,
      roll_number,
      marks,
      cgpa: finalCGPA,
    });

    await student.save();

    res.status(201).json({
      message: "Student added successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add student",
      error: error.message,
    });
  }
});

app.get("/get-student-by-roll/:roll_number", async (req, res) => {
    try {
      const { roll_number } = req.params;
      const student = await Students.findOne({ roll_number });
  
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
  
      res.json(student);
    } catch (error) {
      res.status(500).json({
        message: "Failed to fetch student",
        error: error.message,
      });
    }
  });
  

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
