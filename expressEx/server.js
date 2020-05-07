const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("herlldf");
});

app.post("/", (req, res)=>{
    res.send("POST - Hello world");
});
app.post("/products", (req, res)=>{
    res.send("products");
});
app.post("/people", (req, res)=>{
    res.send("people");
});

app.listen("8080", ()=>{
    console.log("server started");
});