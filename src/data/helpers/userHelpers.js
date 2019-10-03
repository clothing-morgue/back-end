//require('dotenv').config();
import db from "../dbConfig";

module.exports = {
  find,
  findById,
  canInsertUser,
  addUser,
  updateUser,
  deleteUser
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

async function canInsertUser(email) {
  let canAdd = false;

  await db("users")
    .select()
    .where("email", email)
    .then(rows => {
      if (rows.length == 0) {
        canAdd = true;
      } else if (rows.length > 0) {
        canAdd  = false;
      }
    })
    .catch(err => {
      console.log(err);
    });

    return canAdd;
}

async function addUser(user) {
  let addedUser = await db("users")
    .returning("id")
    .insert(user);
  return findById(addedUser[0]);
}

function updateUser(updates) {
  return db("users as u")
    .where({ "u.id": updates.id })
    .update(updates)
    .returning("*");
}

function deleteUser(user_id) {
  return db("users as u")
    .where({ "u.id": user_id })
    .del();
}
