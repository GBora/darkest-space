import { DIVISIONS } from "../data/divisions";
import { IDepartment } from "../interfaces/IDepartment.interface";
import { IShipRatings } from "../interfaces/IShipRatings.interface";
import { generateOfficer } from "./generateOfficer";

export const generateDepartment = (departmentName: string, shipRankings: IShipRatings): IDepartment => {
    let department: IDepartment = {
        divison: DIVISIONS[0],
        name: "Default",
        officers: []
    };
    if (departmentName === "LowerDecks") {
        department.name = "Lower Decks";
        const lowerDecksOfficerCount = shipRankings.CommandBridge * 2;
        // we fill the lower decks with ensigns 
        for (let i = 0; i < lowerDecksOfficerCount; i++) {
            department.officers.push(
                generateOfficer({
                    Position: 0,
                    Rank: 1,
                    RankName: "Ensign"
                }, departmentName)
            )
        }
        return department;
    }

    return department;
}