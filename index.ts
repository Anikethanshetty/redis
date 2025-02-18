import express from "express";
const app = express()

app.get("/signup",(req,res)=>{
    res.send("hello from server")
})

app.get("/signin",(req,res)=>{
    res.send("hello from server")
})


app.get("/chats",(req,res)=>{
    res.send("hello from server")
})

app.listen(8081,()=>{
    console.log("derver started")
})