const express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

// Load website
{
    app.use(express.static(__dirname + "/public"));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
}

// Pages 
{
    app.get("/LICENSE", (request, response) => {
        response.send(fs.readFileSync(__dirname + "/LICENSE"))
    });

    app.get("/", (request, response) => {
        response.sendFile(__dirname + "/public/main/webpages/homepage/index.html")
    });

    app.get("/plugins", (request, response) => {
        response.sendFile(__dirname + "/public/main/webpages/plugins/index.html")
    });

    app.get("/docs/mdl", (request, response) => {
        response.sendFile(__dirname + "/public/docs/mdl")
    });

    app.get("/docs/moshapes", (request, response) => {
        response.sendFile(__dirname + "/public/docs/moshapes")
    });

}

// SSL
{
    const https = require('https');
    const fs = require('fs');

    try {
        const httpsCertOptions = {
            key: fs.readFileSync('/cert/com/bug1312/private.key.pem'),
            cert: fs.readFileSync('/cert/com/bug1312/domain.cert.pem')
        }
        https.createServer(httpsCertOptions, app).listen(process.env.PORT, function() {
            console.log(`HTTPS RUNNING`);
        });
    } catch (err) {
        console.warn("Error running https; Running http");
        app.listen(process.env.PORT, function() {
            console.log(`HTTP RUNNING`);
        });
    }
}