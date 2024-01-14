"use strict";

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
      "SubCategoryProducts",
      [
        {
          id: 1,
          categoryId: 1,
          name: "Cold",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          categoryId: 1,
          name: "Warm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          categoryId: 9,
          name: "Hot",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          categoryId: 9,
          name: "Iced",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          categoryId: 14,
          name: "Hot",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          categoryId: 14,
          name: "Iced",
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
