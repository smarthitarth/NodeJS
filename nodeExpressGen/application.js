const express = require("express");
const App = express();
const BodyParser = require("body-parser");

App.use(BodyParser.urlencoded({ extended : false }));
App.use(BodyParser.json());

let people = { people : [{ name : "Superman"}]};

App.get("/people", function(req, res){
    res.json(people);
    res.end();
});

App.post("/people", function(req, res){
    if(req.body && req.body.name){
        people.people.pop({ name : req.body.name })
    }
    res.json(people);
    res.end();
});
App.get("/people/:name", function(req, res){
    res.json({ name : req.params.name });
    res.end();
});

App.listen(3000);