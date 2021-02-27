"use strict";

let Sequelize = require("sequelize");
let sequelize = require("../../../config/databaseConn");

// table [extension]
let Room = sequelize.define("rooms", {
  nameRoom: Sequelize.INTEGER,
  states: {
      type: Sequelize.ENUM("unBooked", "Booked"),
  },
  nameCustomer: Sequelize.STRING,
  phoneCustomer: Sequelize.INTEGER,
  timeRental: Sequelize.INTEGER,
  totalMoney: Sequelize.INTEGER,
  imageRoom: Sequelize.STRING,
}, {
  tableName: "rooms",
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

module.exports = {
  Room,
};