import { CLASS_NAMES } from "../../data/classNames"
import { getSingleRandomFromArray } from "../randomUtils/getSingleRandomFromArray"

export const getRandomClassName = () => {
    return getSingleRandomFromArray(CLASS_NAMES)
}