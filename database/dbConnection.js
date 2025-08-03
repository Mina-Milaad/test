import { connect } from "mongoose";

export const dbConn = connect('mongodb://host.docker.internal:27017/test-Project')
.then(() => {
    console.log("database Connected Successfully");
})