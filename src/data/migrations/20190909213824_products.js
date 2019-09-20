export function up(knex) {
  return knex.schema.createTable("products", (tbl) => {
    tbl.increments("id").primary();
    tbl.string("name").notNullable();
    tbl.decimal("price").notNullable();
    tbl.decimal("cost").notNullable();
    tbl.text("description");
    tbl.string("category");
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("products");
}
