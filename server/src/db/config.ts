import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE = process.env.DATABASE!!;
const DB_USER = process.env.DB_USER!!;
const PASSWORD = process.env.PASSWORD!!;
const HOST = process.env.HOST!!;
const DB_PORT = Number.parseFloat(process.env.DB_PORT!!);

console.log(DATABASE, DB_USER, PASSWORD, HOST);

const sequelizeConnection = new Sequelize(DATABASE, DB_USER, PASSWORD, {
  host: HOST,
  port: DB_PORT,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

export default sequelizeConnection;
