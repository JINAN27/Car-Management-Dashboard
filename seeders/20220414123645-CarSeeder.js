"use strict";

const { faker } = require("@faker-js/faker");

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

    let carSize = ["small", "medium", "large"];

    let dataCars = [];
    for (let i = 1; i <= 5; i++) {
      dataCars.push({
        car_name: `Car ${i}`,
        car_price: faker.random.number({ min: 200000, max: 2000000 }),
        car_size: carSize[Math.floor(Math.random() * carSize.length)],
        car_photo: faker.image.imageUrl(640, 480, "car"),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Cars", dataCars, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cars", null, {});
  },
};
