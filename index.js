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
        id:"1a",
    username:"cgc college",
    content:"I love coding!"
},
{
    id:"2a",
    username:"avinash",
    content:"Hard work is important to achieve success"
}
,
{
    id:"3a",
    username:"rahul Kumar",
    content:"I got selected for my first internship"
}

];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});

});

// post new post
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
});

app.post("/posts",(req,res)=>{


    let {username ,content} =req.body;

    posts.push({username,content});


    // console.log(req.body);
    // res.send("post request working");

    // USING REDIRECT TO GO TO THE PAGE AGAIN 
    res.redirect("/posts");

});


// new post for id 
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let post=posts.find((p)=>id===p.id);
    // console.log(post);

    res.render("show.ejs",{post});


    // res.send("request working ")
});


app.listen(port,()=>{
    console.log("listening to port :8080");


});
