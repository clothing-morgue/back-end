import db from "../dbConfig";

module.exports = {
  find,
  findById,
  addProduct,
  updateProduct,
  deleteProduct
};

function find() {
  return db("products");
}

function findById(id) {
  return db("products")
    .where({ id })
    .first();
}

async function addProduct(product) {
  let addedProduct = await db("products")
    .returning("id")
    .insert(product);
  return findById(addedProduct[0]);
}

function updateProduct(updates) {
  return db("products as p")
    .where({ "p.id": updates.id })
    .update(updates)
    .returning("*");
}

function deleteProduct(product_id) {
  return db("products as p")
    .where({ "p.id": product_id })
    .del();
}