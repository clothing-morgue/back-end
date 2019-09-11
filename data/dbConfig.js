const dbEngine = process.env.DB_ENV || "development";
import knex from 'knex';
import knexConfigs from '../knexfile';
const config = knexConfigs[dbEngine];

console.log(config);

export default knex(config);
