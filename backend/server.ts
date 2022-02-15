import express from "express";
import { getShipments } from "./services/shipment";
var cors = require('cors')

const app = express();
const port = 8888;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/shipments", async (req, res) => {
  const shipments = await getShipments();
  res.json(shipments);
});

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});
