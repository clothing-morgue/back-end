export function up(knex) {
  return knex.schema.createTable("purchased", (tbl) => {
    tbl.increments("id").primary();
    tbl
      .integer("order_number")
      .notNullable()
      .references("orders.id");
    tbl
      .integer("product_number")
      .notNullable()
      .references("products.id");
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("purchased");
}
