import { IOfficer } from "../interfaces/IOfficer.interface";
import { getPositionName } from "../utils/linkingUtils/getPositionName";
import { getRankName } from "../utils/linkingUtils/getRankName";
import { getRandomDivsion } from "../utils/randomSelects/getRandomDivision";
import { getRandomRank } from "../utils/randomSelects/getRandomRank";
import { getRandomSpecies } from "../utils/randomSelects/getRandomSpecies";

export const generateOfficer = (input: Partial<IOfficer>, department?: string): IOfficer => {
    let newOfficer: IOfficer = {
        Division: "Command",
        Species: "",
        FirstName: "FirstName",
        LastName: "LastName",
        Rank: 0,
        RankName: "Crewman",
        Position: 0,
        PositionName: "",
        Specials: []
    };

    newOfficer.Division = input.Division ? input.Division : getRandomDivsion();
    newOfficer.Species = input.Species ? input.Species : getRandomSpecies();

    // get first name via species
    // get last name via species

    newOfficer.Rank = input.Rank ? input.Rank : getRandomRank();
    newOfficer.RankName = input.RankName ? input.RankName : getRankName(newOfficer.Rank);

    newOfficer.Position = input.Position ? input.Position : 0;
    newOfficer.PositionName = input.PositionName ? input.PositionName : getPositionName(newOfficer.Position, department);

    // to do get specials by position and position name

    return newOfficer
}