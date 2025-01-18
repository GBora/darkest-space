const orgChart = {
    CommandBridge: {
        "3": "Captain",
        "2": "First Officer",
        "1": "Bridge Crew"
    },
    Armories: {
        "3": "Chief Of Tactical",
        "2": "Armory Officer",
        "1": "Tactical Officer"
    },
    Engines: {
        "3": "Chief Engineer",
        "2": "Maintenance Lead",
        "1": "Engineer"
    },
    ComputerCores: {
        "3": "Chief Of Ops",
        "2": "Dev Lead",
        "1": "OPS Officer"
    }, 
    Labs: {
        "3": "Chief Science Officer",
        "2": "Senior Science Officer",
        "1": "Science Officer"
    },
    MedBays: {
        "3": "Chief Medical Officer",
        "2": "Head Nurse",
        "1": "Doctor"
    },
}

export const getPositionName = (Position: number, department?: string): string => {
    if (department === undefined) {
        return "Officer";
    }

    if (department === "LowerDecks") {
        return "Junior Officer"
    }

    if (department) {
        return orgChart[department][Position.toString()];
    }

    return "Default Position Name"
}