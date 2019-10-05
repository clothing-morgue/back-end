import db from "../dbConfig";

module.exports = {
  getTags,
  getTagByName,
  canAddTag,
  createTag,
  deleteTag,
  attachTag,
  removeTag
};

function getTags() {
  return db("tags");
}

function getTagByName(tagName) {
  return db("tags")
    .where({ tagName: tagName });
}


async function canAddTag(tagName) {
  let canAdd = false;

  await db("tags")
    .select()
    .where("tagName", tagName)
    .then(row => {
      if (row.length == 0) {
        canAdd = true;
      } else if (row.length > 0) {
        canAdd = false;
      }
    })
    .catch(err => {
      console.log(err);
    });

    return canAdd;
}


async function createTag(tag) {
  let addedTag = await db("tags")
    .returning("id")
    .insert(tag);
  return getTags();
}


function deleteTag(tag_id) {
  return db("tags as t")
    .where({ "t.id": tag_id})
    .del();
}


function attachTag(tagged) {
  return db("tagged_products")
    .insert(tagged);
}


function removeTag(tagged) {
  return db("tagged_products as t")
    .where({ "t.tag_id": tagged.tag_id, "t.product_id": tagged.product_id})
    .del();
}