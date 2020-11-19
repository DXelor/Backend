'use strict'

const project = require('../models/project');
var Project = require('../models/project');

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'Soy la home'
        });
    },
    test: function(req, res){
        return res.status(200).send({
            message:'test del controlador de project'
        });
    },

    saveProject: function(req, res){
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) =>{
            if(err) return res.status(500).send({message: 'error al guardar'});
            if(!projectStored) return res.status(404).send({message: 'no se ah guardado el proyecto'});
            return res.status(200).send({project: projectStored});
        });
    },

    getProject: function(req, res){
        var projectId = req.params.id;

        if(projectId == null) return res.status(404).send({message: 'el proyecto no existe'});

        Project.findById(projectId, (err, project)=>{
            if(err) return res.status(500).send({message: 'error al devolver los datos'});
            if(!project) return res.status(404).send({message: 'el proyecto no existe'});
            return res.status(200).send({project});
        });
    },
    getProjects: function(req, res){
        Project.find({}).sort('-year').exec((err, projects)=>{
            if(err) return res.status(500).send({message: 'error al devolver los datos'});
            if(!projects) return res.status(404).send({message: 'no hay proyectos para mostrar'});
            return res.status(200).send({projects});
        })
    },
    updateProject: function(req, res){
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update,{new:true}, (err, projectUpdate)=>{
            if(err) return res.status(500).send({message: 'error al actualizar los datos'});
            if(!projectUpdate) return res.status(404).send({message: 'no existe el proyecto'});
            return res.status(200).send({project: projectUpdate});
        })
    }
};

module.exports = controller;