import _ from "lodash";

export const getSingleRandomFromArray = (arr: any[], banned?: any[]): any => {
    // Create a deep clone of the array using Lodash
    const clonedArray = _.cloneDeep(arr);

    // Filter out banned elements if provided
    const filteredArray = banned ? _.difference(clonedArray, banned) : clonedArray;

    // Shuffle the filtered array and take the desired number of picks
    const result = _.sampleSize(filteredArray, 1);

    return result[0];
};