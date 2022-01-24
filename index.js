const express = require('express')
const noteRoute=require('./src/routers/note')
const db=require('./src/database/dbconnect')

const app=express();
app.use(express.json());
app.use(noteRoute);

app.listen(3000,()=>{
    console.log("app listen at port 3000");
})