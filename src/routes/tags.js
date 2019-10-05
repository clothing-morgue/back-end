import { Router } from "express";
import Tags from "../data/helpers/productHelpers";

const router = Router();

router.get("/", (req, res) => {
  Tags.getTags()
    .then((tags) => {
      res.json(tags);
    })
    .catch((err) => {
      res.status(500).json({
        message: "failed to load tags",
        error: err
      });
    });
});

router.post("/", async (req, res) => {
  let tag = req.body;
  for (let requiredParameter of ["product_id", "tagName"]) {
    if (!tag[requiredParameter]) {
      return res.status(422).send({
        error: `Expected format: { product_id: <integer>, tag_name: <String> }. You're missing a "${requiredParameter}" property.`
      });
    }
  }

  if (!await Tags.canAddTag(tag.tagName)) {
    Tags.createTag({ tagName: tag.tagName})
      .then(tag => {
        res.status(201).json({ tag });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  } else {
    console.log('Tag already exists');
  }

});

export default router;