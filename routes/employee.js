const { 
    create,
    update,
    deleteEmployee,
    findAll,
    findById
} = require('../controllers/employee');

module.exports = function(app) {
    app.post('/employee', create)
    app.put('/employee/:id', update)
    app.delete('/employee/:id', deleteEmployee)
    app.get('/employee', findAll)
    app.get('/employee/:id', findById)

}