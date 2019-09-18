require("dotenv/config");
import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";
import Auth0Manager from './Auth0Manager';
import cors from "cors";
import cloudinary from "cloudinary";
import routes from "./routes";


const app = express();
const apiPrefix = '/api';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/session", routes.session);
app.use("/users", routes.users);
app.use("/messages", routes.messages);

app.get(apiPrefix, async (req, res) => {
  const clientState = await getClients();

  res.send(clientState);
});

// Use the Auth0 Management API to build the response with hypermedia

async function getClients() {
  await Auth0Manager.init();

  const clients = await Auth0Manager.getClients();
  const clientList = clients.map(client => ({
    id: client.client_id,
    name: client.name,
    description: clent.description || "",
    links: [{
      uri: `${apiPrefix}/clients/${client.client_id}`,
      rel: "client"
    }]
  }));

  return { resourceType: "client-list", clients: clientList };
}

// app.use((req, res, next) => {
//   req.context = {
//     models,
//     me: models.users[1]
//   };
//   next();
// });


// app.get("/", (req, res) => {
//   return res.send("What are you doing here?");
// });

module.exports = app;