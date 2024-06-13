const express = require("express")

const router = express.Router();

router.post('/post',(req,res)=>{
    res.send('Post Api')
})

router.get('/getAll',(req,res)=>{
    res.send("Get All Api")
})

router.get('/getOne/:id',(req,res)=>{
    res.send("Get by ID Api ")
})


router.patch('/update/:id',(req,res)=>{
    res.send("Update by ID Api")
})

router.delete('/delete/:id',(req,res)=>{
    res.send("Delete by ID Api")
})

module.exports = router