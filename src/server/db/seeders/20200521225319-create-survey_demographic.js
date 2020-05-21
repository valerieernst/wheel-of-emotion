'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Survey_Demographics', [{
      surveyId: 1,
      demographicId: 1,
      required: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Survey_Demographics', null, {});
  }
};
