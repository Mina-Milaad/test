

import { Router } from "express";
import { addStudent, allStudents , getStudentById } from "./student.controller.js";



const studentRouter = Router();

studentRouter.route('/').post(addStudent).get(allStudents);
studentRouter.route('/:id').get(getStudentById);


export default studentRouter;