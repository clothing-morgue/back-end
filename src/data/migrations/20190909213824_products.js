exports.up = function(knex) {
  return knex.schema.createTable("products", (tbl) => {
    tbl.increments("id").primary();
    tbl.string("name").notNullable();
    tbl.decimal("price").notNullable();
    tbl.decimal("cost").notNullable();
    tbl.text("description");
    tbl.string("category");
  });
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("products");
}
