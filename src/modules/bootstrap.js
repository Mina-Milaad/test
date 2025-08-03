import studentRouter from "./student/student.routes.js"


export const bootstrap = (app) => {
    app.use('/student' , studentRouter)
}