import { getRandomSpecial } from "../randomSelects/getRandomSpecial";
import { getSpeciesByName } from "./getSpeciesByName"

export const getSpecialsBySpecies = (speciesName: string): string[] => {
    const species = getSpeciesByName(speciesName);
    if (species.specials.length) {
        return species.specials;
    }
    return [getRandomSpecial()];
}