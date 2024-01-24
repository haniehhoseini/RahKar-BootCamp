const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/database") ;

const Users = sequelize.define('Users', {
  // Model attributes are defined here
  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  firstName:{
    type:DataTypes.STRING,
    allowNull:false
  },
  mobile:{
    type:DataTypes.STRING,
    allowNull:false
  }
}, {
  timestamps:true
});



// `sequelize.define` also returns the model
console.log(Users === sequelize.models.Users); // true
module.exports = Users;