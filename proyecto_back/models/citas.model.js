const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitasSchema = new Schema({
    cita_id:{type: String, required: true, max:60},
    fecha:{type: String, required: true, max:60},
    tipo_de_cita:{type: String, required: true, max:60},
    id_medico:{type: String, required: true, max:40},
    id_paciente:{type: String, required: true, max:40},
    estado:{type: String, required: false, max:70},
});

module.exports = mongoose.model("citas", CitasSchema);