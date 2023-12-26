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
      "Provinces",
      [
        {
          id: "11",
          name: "ACEH",
          altName: "ACEH",
          latitude: 4.36855,
          longitude: 97.0253,
        },
        {
          id: "12",
          name: "SUMATERA UTARA",
          altName: "SUMATERA UTARA",
          latitude: 2.19235,
          longitude: 99.38122,
        },
        {
          id: "13",
          name: "SUMATERA BARAT",
          altName: "SUMATERA BARAT",
          latitude: -1.34225,
          longitude: 100.0761,
        },
        {
          id: "14",
          name: "RIAU",
          altName: "RIAU",
          latitude: 0.50041,
          longitude: 101.54758,
        },
        {
          id: "15",
          name: "JAMBI",
          altName: "JAMBI",
          latitude: -1.61157,
          longitude: 102.7797,
        },
        {
          id: "16",
          name: "SUMATERA SELATAN",
          altName: "SUMATERA SELATAN",
          latitude: -3.12668,
          longitude: 104.09306,
        },
        {
          id: "17",
          name: "BENGKULU",
          altName: "BENGKULU",
          latitude: -3.51868,
          longitude: 102.53598,
        },
        {
          id: "18",
          name: "LAMPUNG",
          altName: "LAMPUNG",
          latitude: -4.8555,
          longitude: 105.0273,
        },
        {
          id: "19",
          name: "KEPULAUAN BANGKA BELITUNG",
          altName: "KEPULAUAN BANGKA BELITUNG",
          latitude: -2.75775,
          longitude: 107.58394,
        },
        {
          id: "21",
          name: "KEPULAUAN RIAU",
          altName: "KEPULAUAN RIAU",
          latitude: -0.15478,
          longitude: 104.58037,
        },
        {
          id: "31",
          name: "DKI JAKARTA",
          altName: "DKI JAKARTA",
          latitude: 6.1745,
          longitude: 106.8227,
        },
        {
          id: "32",
          name: "JAWA BARAT",
          altName: "JAWA BARAT",
          latitude: -6.88917,
          longitude: 107.64047,
        },
        {
          id: "33",
          name: "JAWA TENGAH",
          altName: "JAWA TENGAH",
          latitude: -7.30324,
          longitude: 110.00441,
        },
        {
          id: "34",
          name: "DI YOGYAKARTA",
          altName: "DI YOGYAKARTA",
          latitude: 7.7956,
          longitude: 110.3695,
        },
        {
          id: "35",
          name: "JAWA TIMUR",
          altName: "JAWA TIMUR",
          latitude: -6.96851,
          longitude: 113.98005,
        },
        {
          id: "36",
          name: "BANTEN",
          altName: "BANTEN",
          latitude: -6.44538,
          longitude: 106.13756,
        },
        {
          id: "51",
          name: "BALI",
          altName: "BALI",
          latitude: -8.23566,
          longitude: 115.12239,
        },
        {
          id: "52",
          name: "NUSA TENGGARA BARAT",
          altName: "NUSA TENGGARA BARAT",
          latitude: -8.12179,
          longitude: 117.63696,
        },
        {
          id: "53",
          name: "NUSA TENGGARA TIMUR",
          altName: "NUSA TENGGARA TIMUR",
          latitude: -8.56568,
          longitude: 120.69786,
        },
        {
          id: "61",
          name: "KALIMANTAN BARAT",
          altName: "KALIMANTAN BARAT",
          latitude: -0.13224,
          longitude: 111.09689,
        },
        {
          id: "62",
          name: "KALIMANTAN TENGAH",
          altName: "KALIMANTAN TENGAH",
          latitude: -1.49958,
          longitude: 113.29033,
        },
        {
          id: "63",
          name: "KALIMANTAN SELATAN",
          altName: "KALIMANTAN SELATAN",
          latitude: -2.94348,
          longitude: 115.37565,
        },
        {
          id: "64",
          name: "KALIMANTAN TIMUR",
          altName: "KALIMANTAN TIMUR",
          latitude: 0.78844,
          longitude: 116.242,
        },
        {
          id: "65",
          name: "KALIMANTAN UTARA",
          altName: "KALIMANTAN UTARA",
          latitude: 2.72594,
          longitude: 116.911,
        },
        {
          id: "71",
          name: "SULAWESI UTARA",
          altName: "SULAWESI UTARA",
          latitude: 0.65557,
          longitude: 124.09015,
        },
        {
          id: "72",
          name: "SULAWESI TENGAH",
          altName: "SULAWESI TENGAH",
          latitude: -1.69378,
          longitude: 120.80886,
        },
        {
          id: "73",
          name: "SULAWESI SELATAN",
          altName: "SULAWESI SELATAN",
          latitude: -3.64467,
          longitude: 119.94719,
        },
        {
          id: "74",
          name: "SULAWESI TENGGARA",
          altName: "SULAWESI TENGGARA",
          latitude: -3.54912,
          longitude: 121.72796,
        },
        {
          id: "75",
          name: "GORONTALO",
          altName: "GORONTALO",
          latitude: 0.71862,
          longitude: 122.45559,
        },
        {
          id: "76",
          name: "SULAWESI BARAT",
          altName: "SULAWESI BARAT",
          latitude: -2.49745,
          longitude: 119.3919,
        },
        {
          id: "81",
          name: "MALUKU",
          altName: "MALUKU",
          latitude: -3.11884,
          longitude: 129.42078,
        },
        {
          id: "82",
          name: "MALUKU UTARA",
          altName: "MALUKU UTARA",
          latitude: 0.63012,
          longitude: 127.97202,
        },
        {
          id: "91",
          name: "PAPUA BARAT",
          altName: "PAPUA BARAT",
          latitude: -1.38424,
          longitude: 132.90253,
        },
        {
          id: "94",
          name: "PAPUA",
          altName: "PAPUA",
          latitude: -3.98857,
          longitude: 138.34853,
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
    await queryInterface.bulkDelete("Provinces", null, {});
  },
};
