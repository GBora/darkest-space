const rankNameDictionary = {
    "1": "Ensign",
    "2": "Lieutenant Junior",
    "3": "Lieutenant",
    "4": "Lieutenant Commander",
    "5": "Commander",
    "6": "Captain"
}

export const getRankName = (rank: number): string => {
    if (rankNameDictionary[rank.toString()]) {
        return rankNameDictionary[rank.toString()]
    }

    return "Crewman";
}