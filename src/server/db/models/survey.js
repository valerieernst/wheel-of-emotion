'use strict';
module.exports = (sequelize, DataTypes) => {
  const Survey = sequelize.define('Survey', {
    question: DataTypes.STRING,
  }, {});
  Survey.associate = function(models) {
    Survey.hasMany(models.Response);
    Survey.hasMany(models.Survey_Demographic);
  };
  return Survey;
};