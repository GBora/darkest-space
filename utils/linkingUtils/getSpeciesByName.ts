import { ISpeciesData, speciesDataList } from "../../data/species";

export const getSpeciesByName = (speciesName: string): ISpeciesData => {
    const species = speciesDataList.find(s => s.speciesName === speciesName);
    return species!;
}