import { IDepartment } from "../interfaces/IDepartment.interface";
import { IShipRatings } from "../interfaces/IShipRatings.interface";

export const generateDepartment = (departmentName: string, shipRankings: IShipRatings): IDepartment => {
    let department: IDepartment = {
        divison: 'Command',
        name: "Default",
        officers: []
    };
    if (departmentName === "LowerDecks") {
        //
        return department;
    }

    return department;
}