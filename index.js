const express =require("express");
const app =express();
const port = 8080;
const path =require("path");

// to make all data understand in express we use 

app.use(express.urlencoded({extended:true}));
//for view we use this

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


// for public file we use this 
app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
    username:"cgc college",
    content:"I love coding!"
},
{
    username:"avinash",
    content:"Hard work is important to achieve success"
}
,
{
    username:"rahul Kumar",
    content:"I got selected for my first internship"
}

];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});

})


app.listen(port,()=>{
    console.log("listening to port :8080");


});
