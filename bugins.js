const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
require('dotenv').config();

// Load website
{
  app.use(express.static(__dirname + "/dist"));
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
        response.sendFile(__dirname + "/dist/index.html")
    });

    app.get("/plugins", (request, response) => {
        response.sendFile(__dirname + "/dist/index.html")
    });

}

// SSL
{
    const https = require('https');

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