import { RANKS } from "../../data/ranks"
import { getSingleRandomFromArray } from "../randomUtils/getSingleRandomFromArray";

export const getRandomRank = (): number => {
    return getSingleRandomFromArray(RANKS);
}