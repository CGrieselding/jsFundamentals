const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:Grizforeverhis2021!@localhost:5432/eleven-journal");

module.exports = sequelize;