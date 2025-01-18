import { generateShip } from "./factories/generateShip";
import { IShip } from "./interfaces/IShip.interface";

let ship: IShip = generateShip(3, 2, 2, 1, 1, 0);

console.log(ship);