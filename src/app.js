import express from "express";

const app = express();

const { vehiculoDB } = require("./models");

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

app.get("/src/models", (req, res) => {
  res, send(module);
});

app.get("/app/vehiculo", (req, res) => {
  res.send(vehiculoDB(vehiculoDB));
});
