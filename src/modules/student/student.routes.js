

import { Router } from "express";
import { addStudent, allStudents } from "./student.controller.js";



const studentRouter = Router();

studentRouter.route('/').post(addStudent).get(allStudents);


export default studentRouter;