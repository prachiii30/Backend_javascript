const express=require("express")
require('dotenv').config()

const app=express()
const port= process.env.PORT || 4000

app.get("/",(req,res)=>{
    res.send("hello you made your server")
})

app.get("/twitter",(req,res)=>{
    res.send("hello you made your server this is twitter")
})

app.listen(process.env.PORT,()=>{
    console.log("port listening successfully",port)
})