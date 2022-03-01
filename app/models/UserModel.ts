import { DataTypes } from 'sequelize';
import { db } from '../config/Database';

export const UserModel: any = db.define('user', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	email: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	}, 
	age: {
		type: DataTypes.INTEGER
	}
});
