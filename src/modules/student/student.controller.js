import { catchError } from "../../middleware/catchError.js";
import { Student } from "../../../database/models/student.model.js";

export const addStudent = catchError(async (req, res, next) => {
    let student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: "Student added successfully", student });
})