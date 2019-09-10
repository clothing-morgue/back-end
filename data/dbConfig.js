let dbEngine = process.env.DB_ENV || "development";
let config = require("../knexfile")[dbEngine];

console.log(config);

module.exports = require("knex")(config);
