import "dotenv/config";
import cors from "cors";
import express from "express";
import models from "./models";
import routes from "./routes";

console.log("Hello, Visual Studio programmer! \n \n Remember to have fun! \n");

console.log(process.env.MY_SECRET);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});
app.use("/session", routes.session);
app.use("/users", routes.users);
app.use("/messages", routes.messages);

app.get('/', (req, res) => {
  return res.send('What are you doing here?');
});

app.listen(process.env.PORT, () =>
  console.log(`\n Clothing Morgue listening on port ${process.env.PORT}! \n`)
);
