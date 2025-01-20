import { DIVISIONS } from "../data/divisions";
import { IDepartment } from "../interfaces/IDepartment.interface";
import { IShipRatings } from "../interfaces/IShipRatings.interface";
import { generateOfficer } from "./generateOfficer";

const divisionForDepartment = {
    "Armories": "Tactical",
    "CommandBridge": "Tactical",
    "ComputerCores": "Engineering",
    "Engines": "Engineering",
    "Labs": "Science",
    "MedBays": "Science",
}

const niceDepartmentNames = {
    "Armories": "Armories",
    "CommandBridge": "Command Bridge",
    "ComputerCores": "Computer Core",
    "Engines": "Engineering",
    "Labs": "Science Department",
    "MedBays": "Medical",
}

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

    department.divison = divisionForDepartment[departmentName];
    department.name = niceDepartmentNames[departmentName];

    let officerCountDown: number = shipRankings[departmentName];

    // an department of size 0 should have an commanding officer of rank 2
    officerCountDown += 2;

    // add department head
    department.officers.push(generateOfficer({
        Rank: officerCountDown,
        Position: 3,
        Division: department.divison
    }, departmentName))

    // add second in command
    officerCountDown--;
    if (officerCountDown < 1) {
        officerCountDown = 1;
    }

    department.officers.push(generateOfficer({
        Rank: officerCountDown,
        Position: 2,
        Division: department.divison
    }, departmentName))

    // continue adding subordinates until you reach ensign
    while (officerCountDown >= 1) {
        department.officers.push(generateOfficer({
            Rank: officerCountDown,
            Position: 1,
            Division: department.divison
        }, departmentName))
        officerCountDown--;
    }

    // add 2 ensigns for minimum away mission strength
    department.officers.push(generateOfficer({
        Rank: 1,
        Position: 1,
        Division: department.divison
    }, departmentName))

    department.officers.push(generateOfficer({
        Rank: 1,
        Position: 1,
        Division: department.divison
    }, departmentName))

    return department;
}