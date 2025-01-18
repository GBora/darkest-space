import { IOfficer } from "../interfaces/IOfficer.interface";

export const generateOfficer = (input: Partial<IOfficer>): IOfficer => {
    let newOfficer: IOfficer = {
        Division: "Command",
        FirstName: "FirstName",
        LastName: "LastName",
        Position: 0,
        PositionName: "",
        Rank: 0,
        RankName: "Ensign",
        Specials: [],
        Species: ""
    };

    newOfficer.Division = input.Division ? input.Division : "";

    return newOfficer
}