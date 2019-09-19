exports.up = function(knex) {
  return knex.schema.createTable("shipping", (tbl) => {
    tbl.increments("id");
    tbl
      .text("user_id")
      .notNullable()
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .string("street_address")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .string("city")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .string("state")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
