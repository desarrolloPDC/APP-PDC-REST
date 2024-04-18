const fs = require("fs");
const path = require("path");
let database
require('../database/connection').then(result => { database = result });

// data
const setData = async (req , res) => {
    try {    
        await database.collection(req.params.collection).insertOne(req.body);
        return res.status(200).json({
            ok: true
        })
    } catch (error) {
        return res.status(500).send({
            ok: false,
            message: "Hubo un error"
        });
    }
}

const getData = async (req, res) => {
    try {
        let data = await database.collection(req.params.screen).findOne();
        delete data._id
        return res.status(200).send({
            ok: true,
            data
        });
    } catch (error) {
        return res.status(500).send({
            ok: false,
            message: error.message
        });
    }
}

const updatePic = async (req, res) => {
    
}

// image
const getPic = async (req, res) => {
    try{
        // Montar el path real de la imagen
        const filePath = "src/uploads/" + req.params.pic;

        // Comprobar que existe
        fs.stat(filePath, (error, exists) => {
            if (!exists) {
                return res.status(404).send({
                    ok: false,
                    message: "No existe la imagen"
                });
            }
            // Devolver un file
            return res.sendFile(path.resolve(filePath));
        });

    }catch(error){
        return res.status(400).json({
            ok: false,
            message: "Error de conexion"
        })
    }
}

module.exports = {
    setData, 
    getData, 
    getPic
}