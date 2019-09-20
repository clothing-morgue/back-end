
export function up(knex) {
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

export function down(knex) {
  
}
