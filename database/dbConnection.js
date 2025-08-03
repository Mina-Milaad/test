import { connect } from "mongoose";

export const dbConn = connect('mongodb://localhost:27017/test-Project')
.then(() => {
    console.log("database Connected Successfully");
})