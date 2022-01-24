const noteSchema=require('../models/note');
const express=require('express');
const router=express.Router();

router.get('/notes',(req,res,next)=>{
    noteSchema.find()
    .then(res=>res.status(200).send(res))
    .catch(error=>res.status(500).send(error))
})

module.exports=router;