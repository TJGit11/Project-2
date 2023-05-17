const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Customer extends Model { }

Customer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        order: {
            type: DataTypes.STRING,
        },
    }
)

module.exports = Customer