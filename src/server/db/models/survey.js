module.exports = (sequelize, DataTypes) => {
    const Surveys = sequelize.define('Surveys', {
        id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		question: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
	}, {
		tableName: 'Surveys',
		timestamps: false
	});
    return Surveys;
  };
