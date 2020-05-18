'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Surveys', [{
        question: 'How are you feeling',
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Surveys');
  }
};