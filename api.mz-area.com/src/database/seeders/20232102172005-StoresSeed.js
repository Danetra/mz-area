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
      "Stores",
      [
        {
          id: 1,
          websiteTypeId: 1,
          userId: 1,
          provinceId: 31,
          cityId: 3171,
          districtId: 3171060,
          villageId: 3171060006,
          name: "Barra Jakarta",
          slug: "barra-jakarta",
          official: 1,
          address:
            "Jl. KH. Ahmad Dahlan. 2, Blok D.I Persil No.8, RT.004/RW.1, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130",
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: 1,
          updatedBy: 1,
        },
        {
          id: 2,
          websiteTypeId: 2,
          userId: 3,
          provinceId: 31,
          cityId: 3171,
          districtId: 3171060,
          villageId: 3171060004,
          name: "Kaffee Area",
          slug: "kaffee-area",
          official: 1,
          address:
            "Wisma PMI, Jl. Wijaya I No.63, Petogogan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: 1,
          updatedBy: 1,
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
    await queryInterface.bulkDelete("Stores", null, {});
  },
};
