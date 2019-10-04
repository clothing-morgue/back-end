exports.up = function(knex) {
  return knex.schema.createTable("tags", (tags) => {
    tags.increments("id").primary();
    tags.string("tagName", 25).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tags");
};
