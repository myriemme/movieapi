var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function (req, res) {
    //res.send("hello it workssss");
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb"; 
    
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(typeof body);
            //console.log(body); 
            var data = JSON.parse(body);
            //res.send(results["Search"][0]["Title"]);
            res.render("results", {data: data});
        }
    })
})

app.listen(3000, function () {
    console.log("Serving site on port 3000");
});
