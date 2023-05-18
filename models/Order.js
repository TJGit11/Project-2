const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Order extends Model { }

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order',
  }
);

module.exports = Order;
