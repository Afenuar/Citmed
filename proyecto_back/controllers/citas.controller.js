const Cita = require("../models/citas.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let cita = new Cita({
        cita_id: req.body.cita_id,
        fecha: req.body.fecha,
        tipo_de_cita: req.body.tipo_de_cita,
        id_medico: req.body.id_medico,
        id_paciente: req.body.id_paciente,
        estado : req.body.estado
    })

    cita.save(function(err){
        if(err){
        console.error(err),
        response.exito = false,
        response.msg = "Error al guardar la cita"
        res.json(response)
        return;
        }

        response.exito = true,
        response.msg = "La cita se guardo correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Cita.find(function(err, citas){
        res.json(citas)
    })
}

exports.findOne = function(req,res){
    Cita.findOne({_id: req.params.id},function(err, cita){
        res.json(cita)
    })
}

exports.update = function(req,res){
    let cita = {
        cita_id: req.body.cita_id,
        fecha: req.body.fecha,
        tipo_de_cita: req.body.tipo_de_cita,
        id_medico: req.body.id_medico,
        id_paciente: req.body.id_paciente,
        estado : req.body.estado
    }

    Cita.findByIdAndUpdate(req.params.id, {$set: cita}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar la cita"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La cita se modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Cita.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar la cita"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La cita se elimino correctamente"
        res.json(response)
    })
}