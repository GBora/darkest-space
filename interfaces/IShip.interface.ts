import { IDepartment } from "./IDepartment.interface"
import { IShipRatings } from "./IShipRatings.interface"

export interface IShip {
    stats: IShipRatings,
    departments: {
        LowerDecks: IDepartment | null,
        CommandBridge: IDepartment | null
        Armories: IDepartment | null
        Engines: IDepartment | null
        ComputerCores: IDepartment | null 
        Labs: IDepartment | null
        MedBays: IDepartment | null
    }
    class: string,
    designation: string,
    size: string,
    name: string,
    merits: number,
    demerits: number
}