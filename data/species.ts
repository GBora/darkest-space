export const SPECIES = [
    "Sylvarian",
    "Torgann",
    "Islethar",
    "Human"
]

export interface ISpeciesData {
    speciesName: string,
    maleFirstNames: string[],
    femaleFirstNames: string[],
    lastNames: string[],
    specials: string[]
}

export const speciesDataList: ISpeciesData[]  = [
    {
        speciesName: "Sylvarian",
        maleFirstNames: ["Sylvarian Male Name"],
        femaleFirstNames: ["Sylvarian Female Name"],
        lastNames: ["Sylvarian Last Name"],
        specials: ["culture_afinity_science", "culture_dissonance_tactical"]
    },
    {
        speciesName: "Torgann",
        maleFirstNames: ["Torgann Male Name"],
        femaleFirstNames: ["Torgann Female Name"],
        lastNames: ["Torgann Last Name"],
        specials: ["culture_afinity_engineering", "culture_dissonance_science"]
    },
    {
        speciesName: "Islethar",
        maleFirstNames: ["Islethar Male Name"],
        femaleFirstNames: ["Islethar Female Name"],
        lastNames: ["Islethar Last Name"],
        specials: ["culture_afinity_tactical", "culture_dissonance_science"]
    },
    {
        speciesName: "Human",
        maleFirstNames: ["Human Male Name"],
        femaleFirstNames: ["Human Female Name"],
        lastNames: ["Human Last Name"],
        specials: []
    }
]