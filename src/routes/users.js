import { Router } from "express";
import db from "../../data/dbConfig";

const router = Router();

router.get("/", (req, res) => {
  db("users")
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to get users", err });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("users")
    .where({ id })
    .then((users) => {
      if (users.length) {
        res.json(users[0]);
      } else {
        res.status(404).json({ err: "invalid user id" });
      }
    });
});

export default router;
