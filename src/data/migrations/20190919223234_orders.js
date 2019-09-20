
exports.up = function(knex) {
  return knex.schema.createTable("orders", (tbl) => {
    tbl.increments();
    tbl
      .integer("ship_to")
      .notNullable()
      .references("shipping.id");
    tbl
      .boolean("paid")
      .defaultTo(false);
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("orders");
}
