import "dotenv/config";
import cors from "cors";
import express from "express";
import cloudinary from "cloudinary";
import models from "./models";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1]
  };
  next();
});

app.use("/session", routes.session);
app.use("/users", routes.users);
app.use("/messages", routes.messages);

app.get("/", (req, res) => {
  return res.send("What are you doing here?");
});

module.exports = app;
