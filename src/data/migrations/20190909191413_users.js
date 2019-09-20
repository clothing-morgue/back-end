export function up(knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments("id").primary();
    tbl.string("last_name", 128).notNullable();
    tbl.string("first_name", 128).notNullable();
    tbl
      .string("email")
      .notNullable()
      .unique();
    tbl
      .boolean("admin")
      .notNullable()
      .defaultTo(false);
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("users");
}
