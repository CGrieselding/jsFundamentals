const { DataTypes } = require("sequelize");
const db = require("../db");

const Joke = db.define("joke", {
    setup: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    punchline: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cheesiness: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

module.exports = Joke;