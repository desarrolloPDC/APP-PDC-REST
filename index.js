const express = require("express");
const cors = require("cors");
const routes = require('./src/routes/routes');

//crear servidor de node
const app = express();

//configurar cors
app.use(cors());

//convetir body a objeto JS
app.use(express.json()); //recibir datos con content-tyupe app/json
app.use(express.urlencoded({extended:true})); //form-urlencoded


// cargo rutas
app.use('/', routes)

//crear server y escuchar petisiones
app.listen(3000, () => {
    console.log("Server is now running on port " + 3000)
})