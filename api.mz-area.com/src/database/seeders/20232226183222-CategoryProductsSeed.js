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
      "CategoryProducts",
      [
        {
          id: 1,
          websiteTypeId: 1,
          storeId: 1,
          menuId: 1,
          name: "Tapasu",
          slug: "tapasu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          websiteTypeId: 1,
          storeId: 1,
          menuId: 1,
          name: "Tiradito Way Sashimi",
          slug: "tiradito-way-sashimi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          websiteTypeId: 1,
          storeId: 1,
          menuId: 1,
          name: "Robata Kushiyaki",
          slug: "robata-kushiyaki",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          websiteTypeId: 1,
          storeId: 1,
          menuId: 1,
          name: "Robata Shīfūdo",
          slug: "robata-shifudo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          websiteTypeId: 1,
          storeId: 1,
          menuId: 1,
          name: "Kamameshi",
          slug: "kamameshi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          websiteTypeId: 1,
          storeId: 1,
          menuId: 1,
          name: "Robata Sutēki & Mīto",
          slug: "robata-suteki-&-mito",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          websiteTypeId: 1,
          storeId: 1,
          menuId: 1,
          name: "Robata Saido",
          slug: "robata-saido",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          websiteTypeId: 1,
          storeId: 1,
          menuId: 1,
          name: "Dezāto",
          slug: "dezato",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          websiteTypeId: 1,
          storeId: 1,
          menuId: 2,
          name: "Coffee",
          slug: "coffee",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          websiteTypeId: 1,
          storeId: 1,
          menuId: 2,
          name: "Tea",
          slug: "tea",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          websiteTypeId: 1,
          storeId: 1,
          menuId: 2,
          name: "Water",
          slug: "water",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          websiteTypeId: 1,
          storeId: 1,
          menuId: 2,
          name: "Juice",
          slug: "juice",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          websiteTypeId: 1,
          storeId: 1,
          menuId: 2,
          name: "Mocktail",
          slug: "mocktail",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          websiteTypeId: 2,
          storeId: 2,
          menuId: 2,
          name: "Coffee",
          slug: "coffee",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          websiteTypeId: 2,
          storeId: 2,
          menuId: 2,
          name: "Non Coffee",
          slug: "non-coffee",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          websiteTypeId: 2,
          storeId: 2,
          menuId: 2,
          name: "Fresh Mochies",
          slug: "fresh-mochies",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          websiteTypeId: 2,
          storeId: 2,
          menuId: 2,
          name: "Manual Brew",
          slug: "manual-brew",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          websiteTypeId: 2,
          storeId: 2,
          menuId: 2,
          name: "Tea",
          slug: "tea",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          websiteTypeId: 2,
          storeId: 2,
          menuId: 2,
          name: "Waters",
          slug: "waters",
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
    await queryInterface.bulkDelete("CategoryProducts", null, {});
  },
};
