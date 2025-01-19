import { IOfficer } from "../interfaces/IOfficer.interface";
import { getPositionName } from "../utils/linkingUtils/getPositionName";
import { getRankName } from "../utils/linkingUtils/getRankName";
import { getSpecialsBySpecies } from "../utils/linkingUtils/getSpecialsBySpecies";
import { getRandomDivsion } from "../utils/randomSelects/getRandomDivision";
import { getRandomFirstNameBySpecies, getRandomLastNameBySpecies } from "../utils/randomSelects/getRandomName";
import { getRandomRank } from "../utils/randomSelects/getRandomRank";
import { getRandomSpecies } from "../utils/randomSelects/getRandomSpecies";
import { getSingleRandomFromArray } from "../utils/randomUtils/getSingleRandomFromArray";
import { applySpecials } from "./applySpecials";

export const generateOfficer = (input: Partial<IOfficer>, department?: string): IOfficer => {
    let newOfficer: IOfficer = {
        Gender: 1,
        Division: "Tactical",
        Species: "",
        FirstName: "FirstName",
        LastName: "LastName",
        Rank: 0,
        RankName: "Crewman",
        Position: 0,
        PositionName: "",
        Specials: []
    };

    newOfficer.Gender = input.Gender ? input.Gender : getSingleRandomFromArray([1,2]);
    newOfficer.Division = input.Division ? input.Division : getRandomDivsion();
    newOfficer.Species = input.Species ? input.Species : getRandomSpecies();

    newOfficer.FirstName = input.FirstName ? input.FirstName : getRandomFirstNameBySpecies(newOfficer.Species, newOfficer.Gender as number);
    newOfficer.LastName = input.LastName ? input.LastName : getRandomLastNameBySpecies(newOfficer.Species);
    // note an officer created with a predetermined set of specialls right now will not have his specials from his species applied 
    newOfficer.Specials = input.Specials ? input.Specials : getSpecialsBySpecies(newOfficer.Species);

    newOfficer.Rank = input.Rank ? input.Rank : getRandomRank();
    newOfficer.RankName = input.RankName ? input.RankName : getRankName(newOfficer.Rank);

    newOfficer.Position = input.Position ? input.Position : 0;
    newOfficer.PositionName = input.PositionName ? input.PositionName : getPositionName(newOfficer.Position, department);

    newOfficer.Specials = applySpecials(newOfficer.Specials, newOfficer.Position, department);

    // make gender a string for readability 

    newOfficer.Gender = newOfficer.Gender === 1 ? "Female" : "Male"

    return newOfficer
}