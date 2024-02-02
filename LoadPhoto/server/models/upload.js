const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/database") ;

const Upload = sequelize.define('Upload', {
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
  urlPhoto:{
    type:DataTypes.STRING,
    allowNull:false
  }
}, {
  timestamps:true
});


module.exports = Upload;