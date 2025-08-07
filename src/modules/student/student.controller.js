import { catchError } from "../../middleware/catchError.js";
import { Student } from "../../../database/models/student.model.js";

export const addStudent = catchError(async (req, res, next) => {
    let student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: "Student added successfully", student });
})


export const allStudents = catchError(async (req, res, next) => {
    const students = await Student.find();
    res.status(200).json({ message: "Students fetched successfully", students });
})


export const getStudentById = catchError(async (req, res, next) => {
    let student = await Student.findById(req.params.id);
    student || next(new AppError("student not found" , 404))
    !student || res.json({message : "success" , student})
})