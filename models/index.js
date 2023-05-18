const User = require('../models/User');
const Order = require('../models/Order');

User.hasMany(Order, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Order.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Order };
