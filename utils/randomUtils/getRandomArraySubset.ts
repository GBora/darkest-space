import _ from 'lodash';

export const getRandomArraySubset = (arr: any[], picks: number, banned?: any[]): any[] => {
    // Create a deep clone of the array using Lodash
    const clonedArray = _.cloneDeep(arr);

    // Filter out banned elements if provided
    const filteredArray = banned ? _.difference(clonedArray, banned) : clonedArray;

    // Shuffle the filtered array and take the desired number of picks
    const result = _.sampleSize(filteredArray, picks);

    return result;
};