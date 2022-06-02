import { DataSource } from "typeorm";
import 'dotenv/config';
import * as path from 'path';

const baseDir = path.join(__dirname);
const entitiesPath = `${baseDir}/src/db/entities/*.entity.ts`;
const migrationPath = `${baseDir}/migrations/*.ts`;
console.log(migrationPath);

export default new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || ''),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [entitiesPath],
    migrations: [migrationPath]
});