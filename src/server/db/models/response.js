'use strict';
module.exports = (sequelize, DataTypes) => {
  const Response = sequelize.define('Response', {
  }, {});
  Response.associate = function(models) {
    Reponse.belongsTo(models.Survey, {foreignKey: 'surveyId'});
  };
  return Response;
};