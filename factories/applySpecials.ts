import _ from "lodash";
import { getRandomSpecial } from "../utils/randomSelects/getRandomSpecial";

export const applySpecials = (specials: string[], position: number, department?: string) => {
    const newSpecials = _.cloneDeep(specials);

    if (position === 0 && department === "LowerDecks") {
        newSpecials.push("youthfull_pottential");
        return newSpecials;
    }

    if (position === 3 && department === "CommandBridge") {
        newSpecials.push(getRandomSpecial(newSpecials));
        newSpecials.push(getRandomSpecial(newSpecials));
        newSpecials.push("captain");
        return newSpecials;
    }

    if (position === 3 || position === 2) {
        newSpecials.push(getRandomSpecial(newSpecials));
        return newSpecials;
    }

    return newSpecials;
}