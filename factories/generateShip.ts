import { IShip } from "../interfaces/IShip.interface.ts";
import { getShipDesignation } from "../utils/linkingUtils/getShipDeisgnation.ts";
import { getShipSize } from "../utils/linkingUtils/getShipSize.ts";
import { getRandomClassName } from "../utils/randomSelects/getRandomClassName.ts";
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
        name: "",
        merits: 0,
        demerits: 0
    };

    ship.departments.LowerDecks = generateDepartment("LowerDecks", ship.stats);
    ship.departments.CommandBridge = generateDepartment("CommandBridge", ship.stats);
    ship.departments.Armories = generateDepartment("Armories", ship.stats);
    ship.departments.ComputerCores = generateDepartment("ComputerCores", ship.stats);
    ship.departments.Engines = generateDepartment("Engines", ship.stats);
    ship.departments.Labs = generateDepartment("Labs", ship.stats);
    ship.departments.MedBays = generateDepartment("MedBays", ship.stats);

    ship.size = getShipSize(ship.stats);
    ship.designation = getShipDesignation(ship.stats);
    ship.class = getRandomClassName();

    return ship;
}