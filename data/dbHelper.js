import db from "./dbConfig";

module.exports = {
  find,
  findById
};

function find() {
  return db("users");
}
// This example resolves to an array containing a single user
// (or an empty array)

// function findById(id) {
//   return db('users').where({ id });
// };

// This version resolves to a single user (or null)

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
