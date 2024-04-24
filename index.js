const express = require("express");
const cors = require("cors");
const routes = require('./src/routes/routes');
const https = require('https')
const path = require('path')
const fs = require('fs')

//crear servidor de node
const app = express();

//configurar cors
app.use(cors());

//convetir body a objeto JS
app.use(express.json()); //recibir datos con content-tyupe app/json
app.use(express.urlencoded({extended:true})); //form-urlencoded


// cargo rutas
app.use('/', routes)

//ssl Server con openSSL
const sslServer = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
        cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
    }, 
    app
)

sslServer.listen(3443, () => 
    console.log('Server is now running on port 3443')
)