const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('blogPost', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },     

    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      
   
})
module.exports = User;