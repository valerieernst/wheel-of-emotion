'use strict';
module.exports = (sequelize, DataTypes) => {
  const Survey_Demographic = sequelize.define('Survey_Demographic', {
    required: DataTypes.BOOLEAN,
  }, {});
  Survey_Demographic.associate = function(models) {
    Survey_Demographic.belongsTo(models.Survey, {foreignKey: 'surveyId'});
    Survey_Demographic.belongsTo(models.Demographic, {foreignKey: 'demographicId'});
  };
  return Survey_Demographic;
};