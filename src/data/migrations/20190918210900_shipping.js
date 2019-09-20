exports.up = function (knex) {
  return knex.schema.createTable("shipping", (tbl) => {
    tbl.increments("id").primary();
    tbl
      .integer("user_id")
      .notNullable()
      .references("users.id");
    tbl
      .string("street_address")
      .notNullable();
    tbl
      .string("city")
      .notNullable();
    tbl
      .string("state")
      .notNullable();
    tbl
      .integer("zip")
      .notNullable();
  });
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("shipping");
}
