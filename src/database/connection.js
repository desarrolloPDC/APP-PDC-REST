const { MongoClient, ServerApiVersion } = require('mongodb');

// Connection URL
// const uri = "mongodb+srv://mundogea:" + process.env.DBPassword + "@cluster0.fvnz4ut.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://fgonzalez:091218@cluster0.0usyxye.mongodb.net/?retryWrites=true&w=majority";

const atlas = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

// var url = 'mongodb://0.0.0.0:27017/MundoGea';
// const local = new MongoClient(url);

const connection = async () => {
    try{

        await atlas.connect()
        console.log("Database connected succesfully!");

        const database = atlas.db("ParquedelaCosta");
        return (database)

    }catch(error){
        console.log(error);
    }
}

let database = connection();
module.exports = database