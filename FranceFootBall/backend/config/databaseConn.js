let Sequelize = require("sequelize");

let sequelize = new Sequelize("homestaymanagertest", "root", "123456", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;