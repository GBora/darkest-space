import { specialsList } from "../../data/specials"
import { getSingleRandomFromArray } from "../randomUtils/getSingleRandomFromArray"

export const getRandomSpecial = (currentSpecials?: string[]): string => {
    return getSingleRandomFromArray(specialsList, currentSpecials);
}