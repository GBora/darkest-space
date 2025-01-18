import { ISpeciesData } from "../../data/species"
import { getSpeciesByName } from "../linkingUtils/getSpeciesByName"
import { getSingleRandomFromArray } from "../randomUtils/getSingleRandomFromArray"

export const getRandomFirstNameBySpecies = (speciesName: string, gender: number): string => {
    const species:ISpeciesData = getSpeciesByName(speciesName);
    if (gender === 1) {
        return getSingleRandomFromArray(species.femaleFirstNames);
    }

    return getSingleRandomFromArray(species.maleFirstNames);
}

export const getRandomLastNameBySpecies = (speciesName: string): string => {
    const species:ISpeciesData = getSpeciesByName(speciesName);
    return getSingleRandomFromArray(species.lastNames);
}