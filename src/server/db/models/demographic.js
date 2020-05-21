'use strict';
module.exports = (sequelize, DataTypes) => {
  const Demographic = sequelize.define('Demographic', {
    prompt: DataTypes.STRING
  }, {});
  Demographic.associate = function(models) {
    Demographic.hasMany(models.Survey_Demographic);
  };
  return Demographic;
};