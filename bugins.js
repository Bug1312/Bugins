const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

// Load website
{
  app.use(express.static(__dirname + "/dist/bugins-site/browser/"));
  app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
}

// Pages 
{
    app.get("*", (request, response) => {
        response.sendFile(__dirname + "/dist/bugins-site/browser/index.html")
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
        https.createServer(httpsCertOptions, app).listen(12001, function() {
            console.log(`HTTPS RUNNING`);
        });
    } catch (err) {
        console.warn("Error running https; Running http");
        app.listen(12001, function() {
            console.log(`HTTP RUNNING`);
        });
    }
}