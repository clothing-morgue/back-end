"use strict";

exports.up = function (knex) {
  return knex.schema.createTable("users", function (tbl) {
    tbl.increments();
    tbl.string("last_name", 128).notNullable();
    tbl.string("first_name", 128).notNullable();
    tbl.string("email").notNullable().unique();
    tbl["boolean"]('admin').notNullable().defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
//# sourceMappingURL=20190909191413_users.js.map