"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          name: "Administrator",
          username: "admin",
          email: "admin@gmail.com",
          password: bcrypt.hashSync("admin123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Daniel Eka Putra",
          username: "danetra05",
          email: "danetra05@gmail.com",
          password: bcrypt.hashSync("daniel123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Evelyn",
          username: "evelyn",
          email: "evelyn@kaffearea.com",
          password: bcrypt.hashSync("evelyn123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
