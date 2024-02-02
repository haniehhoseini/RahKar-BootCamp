const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/database") ;

const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  firstName: {
    type: DataTypes.STRING
  },
  mobile: {
    type: DataTypes.STRING
  },
}, {
  timestamps:true
});

module.exports = User;