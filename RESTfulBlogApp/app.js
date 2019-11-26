var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:2701/restful_blog_app", {useUnifiedTopology: true, useNewUrlParser: true});


var blogSchema = new mongoose.Schema({
    title:String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);




var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));





app.listen(port, function () {
    console.log("Server Has Started!");
  });
  