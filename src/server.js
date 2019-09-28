require("dotenv/config");
import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import cloudinary from "cloudinary";
import routes from "./routes";

const app = express();
app.use(morgan('combined'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   req.context = {
//     models,
//     me: models.users[1]
//   };
//   next();
// });

app.use("/users", routes.users);
//app.use("/orders", routes.orders);
//app.use("/products", routes.products);
//app.use("/purchased", routes.purchased);
//app.use("/shipping", routes.shipping);


app.get("/", (req, res) => {
  return res.send("What are you doing here?");
});

module.exports = app;