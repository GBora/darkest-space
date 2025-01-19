import express from "express";
import { IShip } from "./interfaces/IShip.interface";
import { generateShip } from "./factories/generateShip";
import { IOfficer } from "./interfaces/IOfficer.interface";
import { generateOfficer } from "./factories/generateOfficer";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Darkest Space API!");
});

app.get("/ship", (req, res) => {
    let ship: IShip = generateShip(3, 2, 2, 1, 1, 0);
    res.send(ship);
});

app.get("/officer", (req, res) => {
  let officer: IOfficer = generateOfficer({});
  res.send(officer);
});

app.listen(8000);