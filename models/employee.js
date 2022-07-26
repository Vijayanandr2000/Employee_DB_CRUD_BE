module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define('employee', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        department:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        position :{
            type: Sequelize.STRING,
            allowNull: false,
        }
    },
    {
        tableName: 'employees'
    });
    return Employee;
}