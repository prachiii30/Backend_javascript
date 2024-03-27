const express=require("express")

const app=express()
const port=4000

app.get("/",(req,res)=>{
    res.send("hello you made your server")
})

app.listen(port,()=>{
    console.log("port listening successfully")
})