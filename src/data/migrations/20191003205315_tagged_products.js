exports.up = function(knex) {
  return knex.schema.createTable("tagged_products", (tagged) => {
    tagged
      .integer("tag_id")
      .notNullable()
      .references("tags.id");
    tagged
      .integer("product_id")
      .notNullable()
      .references("products.id");
    tagged.primary(["tag_id", "product_id"]);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tagged_products")
};
