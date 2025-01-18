export const getPositionName = (Position: number, department?: string): string => {
    if (department === undefined) {
        return "Officer";
    }

    if (department === "LowerDecks") {
        return "Junior Officer"
    }

    return "Default Position Name"
}