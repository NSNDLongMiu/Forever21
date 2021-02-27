"use strict";

let Sequelize = require("sequelize");
let sequelize = require("../../../config/databaseConn");
let {Room} = require("../rooms/roomModels");

// table [extension]
let User = sequelize.define("users", {
  email: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  role: {
    type: Sequelize.ENUM("admin", "customer"),
  },
}, {
  tableName: "users",
  createdAt: "created_at",
  updatedAt: "updated_at",
  indexes: [
    {
      unique: true,
      fields: ["id"],
    },
  ],
  charset: 'utf8',
  collate: 'utf8_unicode_ci',
});

User.hasMany(Room, {
  as: "rooms",
  foreignKey: "nameCustomer",
});

module.exports = {
  User
};