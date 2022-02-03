const express = require("express");
const cors = require("cors");

const app = express();

const { backPort } = require("./conf");
const { setupRoutes } = require("./routes");

app.use(cors());

app.use(express.json());
setupRoutes(app);

app.use("/", (req, res) => {
  res.status(404).send("Route not found! ");
});

app.listen(backPort, () => {
  console.log(`Eazyapp API now available on http://localhost:${backPort} !`);
});
