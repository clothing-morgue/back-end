exports.up = function(knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments("id").primary();
    tbl.string("last_name", 128).notNullable();
    tbl.string("first_name", 128).notNullable();
    tbl
      .string("email")
      .unique()
      .notNullable();
    tbl
      .boolean("admin")
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
