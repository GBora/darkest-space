import { IShipRatings } from "../../interfaces/IShipRatings.interface";

const sizeDictionary = {
    "0": "Corvette",
    "1": "Frigate",
    "2": "Cruiser",
    "3": "Battleship"
}

export const getShipSize = (stats: IShipRatings): string => {
    return sizeDictionary[stats.CommandBridge.toString()];
}