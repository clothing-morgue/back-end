"use strict";

exports.up = function (knex) {
  return knex.schema.createTable("products", function (tbl) {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.decimal("price").notNullable();
    tbl.decimal("cost").notNullable();
    tbl.text("description");
    tbl.string("category");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("products");
};
//# sourceMappingURL=20190909213824_products.js.map