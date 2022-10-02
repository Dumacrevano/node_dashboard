const express=require("express");
const bodyParser= require("body-parser");
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');

//IMPORTS END HERE
const db = require("./Models")
const GamesUserRoute=require("./Routes/GameUserRoutes");

//

const app= express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.set('view engine','ejs');
app.use(cookieParser());

//DB environment variable
//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
})



//API START HERE



app.get("/",function(req,res){
    res.render("index");
})
app.get("/register",function(req,res){
   res.render("register");
})



//dashboard
app.get("/dashboard",function(req,res){
    res.render("dashboard");
})


app.listen(3000, function(){
    console.log("server is running on port 3000")
});

//route calling

app.use('/api/users',GamesUserRoute)