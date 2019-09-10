import { Router } from "express";
import User from "../../data/dbHelper";

const router = Router();

router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({
        message: "failed to get users",
        error: err
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  User.findById(id).then((user) => {
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ err: "invalid user id" });
    }
  });
});

export default router;
