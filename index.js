const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const crypto = require("crypto-js");
const port = 3000;
const fs = ()=>console.log("Servidor Ativo");

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,resp){
    resp.render("index");
});

app.listen(port, fs);