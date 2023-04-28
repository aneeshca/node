

const { DataTypes, } = require("sequelize");
const sequelize=require('../confguration/server');
const { model } = require("mongoose");
const { models } = require("mongoose");

const Employees = sequelize.define("employees", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
 });
 sequelize.sync().then(() => {
    console.log('employee table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 module.exports=Employees;