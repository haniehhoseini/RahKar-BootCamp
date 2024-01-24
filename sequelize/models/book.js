const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/database") ;

const Book = sequelize.define('Book', {
  // Model attributes are defined here
  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  price:{
    type:DataTypes.STRING,
    allowNull:false
  },
  user_id:{
    type:DataTypes.STRING,
    allowNull:false
  }
}, {
  timestamps:true
});


module.exports = Book;