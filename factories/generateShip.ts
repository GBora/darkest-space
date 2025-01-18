import { IShip } from "../interfaces/IShip.interface.ts";
import { generateDepartment } from "./generateDepartment.ts";

export const generateShip = (armories: number, commandBridge: number, computerCores: number, engines: number, labs: number, medbays: number): IShip => {
    let ship: IShip = {
        stats: {
            Armories: armories,
            CommandBridge: commandBridge,
            ComputerCores: computerCores,
            Engines: engines,
            Labs: labs,
            MedBays: medbays
        },
        departments: {
            Armories: null,
            CommandBridge: null,
            ComputerCores: null,
            Engines: null,
            Labs: null,
            MedBays: null,
            LowerDecks: null
        },
        class: "",
        designation: "",
        size: "",
        name: ""
    };

    ship.departments.LowerDecks = generateDepartment("LowerDecks", ship.stats);

    return ship;
}