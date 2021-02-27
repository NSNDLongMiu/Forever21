let Sequelize = require("sequelize");

let sequelize = new Sequelize("homestaymanager", "root", "123456", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;