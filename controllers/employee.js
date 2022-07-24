const db = require('../models');

const Employee = db.employee;

const create = async(req,res) => {
    let { name, age, department, position} = req.body
    
    let employeeDetail = {
        name, 
        age, 
        department, 
        position
    }; 

    Employee.create(employeeDetail).then((resp) => {
        res.status(201).send({ 
            message:'Employee is created successfully',
            data: employeeDetail,
            resp
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message,
        })
    })


}

const update = async(req, res) => {
    let { name, age, department, position } = req.body;
    let id = req.params.id; 
    
    if(!name || !age || !department || !position){
        res.status(400).send({ 
            message: "All the data's required"
        })
        return;
    }
    
    let employeeDetail = {
        name, 
        age, 
        department, 
        position
    }; 

    Employee.update(employeeDetail,{
        where: { id }
    }).then((resp) => {
        res.status(201).send({ 
            message:'Employee Detail is updated successfully',
            data: employeeDetail,
            resp
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message,
        })
    })
}

const deleteEmployee = async(req, res) => {
    let id = req.params.id; 

    Employee.destroy({
        where: { id },
        returing: true,
    }).then((resp) => {
        if(resp === 0){
            return res.status(403).send({ 
                message: `No employee found with this ID ${id}`
            })
        }
        res.status(201).send({ 
            message:'Employee is deleted successfully',
            resp
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message,
        })
    })
}

const findAll = async(req, res) => {
    
    Employee.findAll().then((resp) => {
        
        if(resp.length == 0){
            return res.status(200).send({
                message:'NO Employee FOUND.....!'
            });
        }
        res.status(200).send(resp);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })

    
}

const findById = async(req, res) => {
    let id = req.params.id;

    Employee.findByPk(id).then((resp) => {
        console.log(resp)
        if( resp === null || resp.length == 0) {
            return res.status(200).send({
                message:'NO Employee FOUND.....!'
            });
        }
        res.status(200).send(resp);
    }).catch((err) => {
        res.status(500).send({ 
            message: err.message
        })
    })
}


module.exports = { 
    create,
    update,
    deleteEmployee,
    findAll,
    findById
};