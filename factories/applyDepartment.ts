import _ from "lodash";
import { IShip } from "../interfaces/IShip.interface";

export const applyDepartment = (ship: IShip, department: string): IShip => {
    let newShip = _.cloneDeep(ship);
    
    return newShip;
}