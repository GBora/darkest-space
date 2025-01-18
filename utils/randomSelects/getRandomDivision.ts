import { DIVISIONS } from "../../data/divisions"
import { getSingleRandomFromArray } from "../randomUtils/getSingleRandomFromArray"

export const getRandomDivsion = (): string => {
    return getSingleRandomFromArray(DIVISIONS)
}