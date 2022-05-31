
const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");
const https=require("https");

const app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));  

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})


app.get("/comparator",function(req,res){
    res.sendFile(__dirname+"/comparator.html");
})

app.listen(5500,function(req,res){
    console.log("Server is running on port 3000");
})