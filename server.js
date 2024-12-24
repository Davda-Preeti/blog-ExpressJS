const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 5000;

app.use(express.json())  
app.use(express.urlencoded({extended:true})) 

var arr = []

// // api
// app.post('/user',(req,res)=>{
//     // res.end("post api")
//     // console.log("posting")
//     arr.push(req.body)
//     // console.log(req.body)
//     res.json("inserted")
// })

app.get('/',(req,res)=>{
    // res.send("get api")
    res.json(arr)
})

app.post('/user',(req,res)=>{
    const {blogTitle,blogDate,autherName,releaseDate,image} = req.body;
    const newuser = {
        blog_title : blogTitle,
        blog_date : blogDate,
        auther_name : autherName,
        release_date :releaseDate,
        image:image,
    }
    console.log(newuser)
    arr.push(newuser)
    res.json({
        success:true,
        message:"your record has been inserted"
    })
})

app.delete('/user/:id', (req,res)=>{
    // console.log((req.params.id))
    const {id} = req.params;
    // console.log(id)
    arr.splice(id,1)
    res.json({
        message:"data deleted"
    })
})

app.put('/user',(req,res)=>{
    const {index} = req.query
    arr.splice(index,1,req.body)
    res.json({
        message:"updated"
    })
})





app.listen(PORT,()=>console.log(`example app listing on PORT http://localhost:${PORT}`))