/*const mongoose = require("mongoose");

const host = "127.0.0.1";
const port = "27017";
const db = "hr";

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://127.0.0.0.1/hr`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind
    (console, "Mongodb connection error"))
    dbConnection.once('open', () =>{
        console.log('COnexion a la base de datos satisfactoria')
        }
    )

}

*/

const mongoose = require('mongoose')

const URI = 'mongodb://127.0.0.1/hr'

mongoose.connect(URI, {
    //userNewUrlParser: true,
    //useCreateIndex: true,
})

const dbConnection = mongoose.connection

dbConnection.once('open',() =>{
    console.log('Conexion a la base de datos con exito!!')
})

module.exports = dbConnection