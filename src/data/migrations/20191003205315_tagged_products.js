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
    tagged
      .raw('PRIMARY KEY (TAG_ID, PRODUCT_ID)');
  });
};

exports.down = function(knex) {};
