import _ from "lodash";
import { IShipRatings } from "../../interfaces/IShipRatings.interface";

const combos = [
    {
        name: "Flagship",
        combo: ["CommandBridge", "Armories"]
    },
    {
        name: "Patrol",
        combo: ["CommandBridge", "Engines"]
    },
    {
        name: "Support",
        combo: ["CommandBridge", "ComputerCores"]
    },
    {
        name: "Survey",
        combo: ["CommandBridge", "Labs"]
    },
    {
        name: "Diplomatic",
        combo: ["CommandBridge", "MedBays"]
    },
    {
        name: "Fast Response",
        combo: ["Armories", "Engines"]
    },
    {
        name: "Logistics",
        combo: ["Armories", "ComputerCores"]
    },
    {
        name: "Scout",
        combo: ["Armories", "Labs"]
    },
    {
        name: "Triage",
        combo: ["Armories", "MedBays"]
    },
    {
        name: "Spy",
        combo: ["Engines", "ComputerCores"]
    },
    {
        name: "Explorer",
        combo: ["Engines", "Labs"]
    },
    {
        name: "Evacuation",
        combo: ["Engines", "MedBays"]
    },
    {
        name: "Carrier",
        combo: ["ComputerCores", "Labs"]
    },
    {
        name: "Relief",
        combo: ["ComputerCores", "MedBays"]
    },
    {
        name: "Hospital",
        combo: ["Labs", "MedBays"]
    }
];

export const getShipDesignation = (stats: IShipRatings): string => {
    let designation = "Multi-Role";
    let ratings = Object.keys(stats).map(key => {
       return {
        name: key,
        score: stats[key]
       }
    });
    let ratingsSorted = _.orderBy(ratings, 'score', 'desc');
    let highest = ratingsSorted[0].name;
    let secondHighest = ratingsSorted[1].name;
    console.log(highest);
    console.log(secondHighest);
    combos.forEach(role => {
        console.log(role.combo);
        console.log(role.combo.includes(secondHighest));
        console.log(role.combo.includes(highest))
        if (role.combo.includes(highest) && role.combo.includes(secondHighest)) {
            designation = role.name;
        }
    })
    return designation;
}