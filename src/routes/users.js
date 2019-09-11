import { Router } from "express";
import User from "../../data/dbHelper";
import dbConfig from "../../data/dbConfig";

const router = Router();

// This get route makes sorting easy
// When you send a get request
// Simply add ?sortby=column_name to the end of the query string
// For example "http://localhost:3000/users?sortby=last_name"
// Will return all users sorted by their last names

router.get("/", (req, res) => {
  console.log(req.query);
  const sortField = req.query.sortby || "id";
  User.find()
    .then((users) => {
      const response = users.sort((a, b) =>
        a[sortField] < b[sortField] ? -1 : 1
      );
      res.json(response);
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

router.post("/", async (req, res) => {
  const user = req.body;

  for (let requiredParameter of ["first_name", "last_name", "email"]) {
    if (!user[requiredParameter]) {
      return res.status(422).send({
        error: `Expected format: { first_name: <String>, last_name: <String>, email: <String> }. You're missing a "${requiredParameter}" property.`
      });
    }
  }
  User.add(user)
    .then((user) => {
      res.status(201).json({ user });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ url: `/users/${id}`, operation: "PUT" });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.status(201).json({ url: `/users/${id}`, operation: "DELETE" });
});

export default router;
