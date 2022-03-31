const express = require('express');
/*const bodyParser = require("body-parser");
const serveStatic = require('serve-static');
const cors = require("cors")
const path = require('path');*/
require('dotenv').config();

const newslatter = require("./api/newsletter");

var app = express();

/*var corsOptions = {
  origin: "*", // colocar aqui o ip externo e o nome do site
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  preflightContinue: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())*/

app.use("/api/newsletter", newslatter);

//app.use(serveStatic(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running in port: ${PORT}`));