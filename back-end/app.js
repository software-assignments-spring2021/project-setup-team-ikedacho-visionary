// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
// we will put some server logic here later...
// export the express app we created to make it available to other modules


// import some useful middleware
const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests
var request = require('request');
// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded style

// use the bodyparser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// make 'public' directory publicly readable with static content
app.use("/static", express.static("front-end/public"))


//put routes here:

// route for HTTP GET requests to the home document
app.get("/", (req, res) => {
    res.send("Hello!")
})

app.get("/comments", (req, res) => {
    res.send("Hello!")
});


app.get("/getprelogin",(req,res) => {
    request(
        "https://my.api.mockaroo.com/sr.json?key=2d6d6d60",
        function(error,response,body){
            if(!error){
                
                
                 var parseBody = JSON.parse(body);
                 res.send(parseBody);

            }
        }

    );
});

module.exports = app