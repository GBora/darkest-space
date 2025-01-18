import { SPECIES } from "../../data/species"
import { getSingleRandomFromArray } from "../randomUtils/getSingleRandomFromArray"

export const getRandomSpecies = (): string => {
    return getSingleRandomFromArray(SPECIES);
}