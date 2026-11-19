const express =require("express");
const app =express();
const port = 8080;
const path =require("path");

// to make all data understand in express we use 

app.use(express.urlencoded({extended:true}));


app.set("view engine","ejs");
app.set("views",path.join(_dirname,"views"));
app.set(express.static(path.join(_dirname,"views")));



app.get("/",(req,res)=>{
    res.send("server working well!");
})


app.listen(port,()=>{
    console.log("listening to port :8080");


});
