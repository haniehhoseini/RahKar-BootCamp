const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/database") ;

const SaveTitleAndName = sequelize.define('SaveTitleAndName', {
  // Model attributes are defined here
  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  PhotoName:{
    type:DataTypes.STRING,
    allowNull:false
  },
  Title:{
    type:DataTypes.STRING,
    allowNull:false
  }
}, {
  timestamps:true
});


module.exports = SaveTitleAndName;