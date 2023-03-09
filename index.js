import express from "express";
import cors from "cors";

const app = express();
const backPort = 3022;

app.use(cors());
app.use(express.json());
app.use("/", (req, res) => {
  res.status(404).send("Route not found! ");
});

app.listen(backPort, () => {
  console.log(`AlertSimulator is now available > http://localhost:${backPort}`);
});
