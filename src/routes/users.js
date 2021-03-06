import { Router } from "express";
import User from "../data/helpers/userHelpers";

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

  if (await User.canInsertUser(user.email)) {
    User.addUser(user)
      .then((user) => {
        res.status(201).json({ user });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  } else {
    return res.status(409).send({
      error: "A user with that email address already exists"
    });
  }
});

router.put("/:id", async (req, res) => {
  const user = {
    ...req.body,
    id: req.params.id
  };

  try {
    let validatedUser = await User.findById(user.id);
    if (validatedUser) {
      const updatedUser = await User.updateUser(user);
      return res.status(200).json(updatedUser[0]);
    } else {
      return res
        .status(404)
        .json({ message: "Can't edit user; record not found." });
    }
  } catch (error) {
    return next(error);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const del = await User.deleteUser(id);
    return res.status(200).json(del);
  } catch (error) {
    return next(error);
  }
});

export default router;
