
const express = require("express");
const bodyParser = require("body-parser");

let items = ["Work","Work","Work"];
let workitems = [];
const app = express();
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){

    let td = new Date();
    
    let options = {
        weekday : "long",
        day : "numeric",
        month : "long",
    };

    let day = td.toLocaleDateString("en-US",options);

    res.render("list",{listTitle : day,newListitem :items});

});



app.post("/",function(req,res){
    
    let item = req.body.newItem;  
    if(req.body.list === "Work"){
        workitems.push(item);
        res.redirect("/work"); 
    }else{
        items.push(item);
        res.redirect("/");
    }      
    
});

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List",newListitem : workitems})
});

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000,function(req,res){ 
    console.log("On port 3000");    
});

  