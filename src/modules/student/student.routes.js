

import { Router } from "express";
import { addStudent } from "./student.controller.js";



const studentRouter = Router();

studentRouter.route('/').post(addStudent)

export default studentRouter;