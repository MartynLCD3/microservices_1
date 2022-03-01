import { Sequelize } from 'sequelize';
import './environment/environment';

const databaseName: string = `${process.env.DATABASE_NAME}`;
const databaseUser: string = `${process.env.DATABASE_USER}`;
const databasePass: string = `${process.env.DATABASE_PASSWORD}`;
const databasePort: string = `${process.env.DATABASE_PORT}`;

export const db = new Sequelize(databaseName, databaseUser, databasePass, {
	dialect: 'mariadb',
	host: 'app-back-01_database1_1',
	port: +databasePort
});
