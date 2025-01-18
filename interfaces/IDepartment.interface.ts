import { IOfficer } from "./IOfficer.interface";

export interface IDepartment {
    name: string,
    officers: IOfficer[],
    divison: string
}