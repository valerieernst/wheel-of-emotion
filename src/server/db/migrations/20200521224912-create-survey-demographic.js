'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Survey_Demographics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      surveyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Surveys',
          key: 'id',
        },
      },
      demographicId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Demographics',
          key: 'id',
        },
      },
      required: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Survey_Demographics');
  }
};