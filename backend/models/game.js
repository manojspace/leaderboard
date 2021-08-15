'use strict';

const {Model} = require('sequelize');
module.exports = (sequelize, Datatypes) => {
	class game extends Model {
		static associate(models) {
		}
	};
	game.init({
		id: {
			type: Datatypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Rank: {
			type: Datatypes.INTEGER,
			allowNull: false
		},
		Name: {
			type: Datatypes.STRING,
			allowNull: false
		},
		Platform: {
			type: Datatypes.STRING,
			allowNull: false
		},
		Year: {
			type: Datatypes.STRING,
			allowNull: false
		},
		Genre: {
			type: Datatypes.STRING,
			allowNull: false
		},
		Publisher: {
			type: Datatypes.STRING,
			allowNull: false
		},
		Global_Sales: {
			type: Datatypes.STRING,
			allowNull: false
		}
	}, {
		sequelize,
		modelName: 'game',
	});
	return game;
};