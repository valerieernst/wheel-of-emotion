'use strict';
module.exports = (sequelize, DataTypes) => {
  const Survey = sequelize.define('Survey', {
    question: DataTypes.STRING
  }, {});
  Survey.associate = function(models) {
    // associations can be defined here
  };
  return Survey;
};