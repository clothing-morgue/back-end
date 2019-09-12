require('dotenv').config();
import db from "./dbConfig";

module.exports = {
  find,
  findById,
  add
};

// this is the equivalent of db.select('*').from('users')
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

// An alternate way to write that would be db('users').where({ id: 3 });

async function add(user) {
  let addedUser = await db('users').returning('id').insert(user);
  return findById(addedUser[0]);
}
