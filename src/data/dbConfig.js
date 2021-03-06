//require('dotenv').config();
const dbEngine = process.env.DB_ENV || "staging";
import knex from "knex";
import knexConfigs from "../../knexfile";
const config = knexConfigs[dbEngine];

console.log(config);

export default knex(config);
