import dotenv from "dotenv";
import { Sequelize } from 'sequelize';

// Config dot.env
dotenv.config();

const db = new Sequelize( process.env.NAME_LOCAL || 'db_name', process.env.RDS_USERNAME || 'user-name', process.env.RDS_PASSWORD, {
    host : process.env.RDS_HOSTNAME,
    dialect : 'mysql',
    port : Number(process.env.RDS_PORT),
    // logging : false //muestra en consola comandos ejecutados
})


export default db;