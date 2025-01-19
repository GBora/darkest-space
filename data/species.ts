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
        maleFirstNames: [  "Aelithar",  "Thalorin",  "Vaelien",  "Lysandor",  "Caalith",  "Elvinar",  "Zytharion",  "Morvelis,",  "Fenarion",  "Sylvthor",  "Aerion",  "Calvaris",  "Nythorin",  "Draalith",  "Eryndor",  "Lorient",  "Velmaris",  "Quenathor",  "Myranis",  "Tythariel"],
        femaleFirstNames: [  "Aeliana",  "Sylvara",  "Lythiel",  "Caelindra",  "Thalithra",  "Velara",  "Eryndis",  "Myralith",  "Zynthera",  "Calithria",  "Nymara",  "Vaelina",  "Lorinthra",  "Fenalia",  "Draelis",  "Oanacita",  "Quenara",  "Lysandria",  "Morithiel",  "Tythara"]
        ,
        lastNames: [  "Aelorith",  "Sylvandar",  "Thaloryn",  "Vynarith",  "Calorindor",  "Myralithan",  "Fenarionis",  "Quelithar",  "Draelion",  "Eryndovar",  "Velanthar",  "Lytharien",  "Nyvorel",  "Zyrandor",  "Lorenthas",  "Tynvaris",  "Aerindral",  "Kaelvoryn",  "Vaeluthis",  "Cryndalor"]
        ,
        specials: ["culture_afinity_science", "culture_dissonance_tactical"]
    },
    {
        speciesName: "Torgann",
        maleFirstNames: ["Braegor", "Caelric", "Daenach", "Fionnlagh", "Gorvan", "Kaelthar", "Lorcanach", "Malraed", "Orrinach", "Quinnan", "Ruarach", "Seannor", "Tavrick", "Ualach", "Vaedrin", "Caolvin", "Drustanach", "Eochron", "Fergan", "Torvynn"],
        femaleFirstNames: ["Braenya", "Caelina", "Daenara", "Fionnaith", "Gorvanna", "Kaelthis", "Lorcanna", "Malrieth", "Orrina", "Quinna", "Ruaraith", "Seanna", "Tavra", "Ualina", "Vaedra", "Caolvina", "Drustana", "Eochra", "Ferganna", "Torvynna"],
        lastNames: ["House of Braegor", "House of Caelric", "House of Daenhelm", "House of Fiondrath", "House of Gorvyn", "House of Kaelbrecht", "House of Lorcanth", "House of Malrig", "House of Orrinwald", "House of Quinmar", "House of Ruarkild", "House of Seannhelm", "House of Tavrinth", "House of Ualbrecht", "House of Vaedhelm", "House of Caolvind", "House of Drustwald", "House of Eochfrid", "House of Fergarth", "House of Torvald"],
        specials: ["culture_afinity_engineering", "culture_dissonance_science"]
    },
    {
        speciesName: "Islethar",
        maleFirstNames: ["Aldrin", "Bereth", "Caedok", "Darvan", "Eldrik", "Feran", "Galdor", "Hazarik", "Ilgar", "Jandrik", "Kaleth", "Lorvik", "Maruk", "Naroth", "Olzar", "Peldrin", "Ralvik", "Tovan", "Uldan", "Zorath"],
        femaleFirstNames: ["Alyra", "Berika", "Caelith", "Darvella", "Elzira", "Feryn", "Galina", "Hazarith", "Ilvara", "Janika", "Kalendra", "Lorina", "Marith", "Nariel", "Olvanna", "Pelira", "Ralith", "Torvella", "Ulzara", "Zyle"],
        lastNames: ["Frostblade Clan", "Glacial Fang Clan", "Winterthorn Clan", "Iceforge Clan", "Snowspire Clan", "Frostwolf Clan", "Crystalshield Clan", "Icestorm Clan", "Glaciermaul Clan", "Frostwind Clan", "Shardfang Clan", "Snowclaw Clan", "Icebear Clan", "Frostspear Clan", "Winterveil Clan", "Glacierthorn Clan", "Snowdrift Clan", "Frostiron Clan", "Coldhammer Clan", "Glacierfang Clan"],
        specials: ["culture_afinity_tactical", "culture_dissonance_science"]
    },
    {
        speciesName: "Human",
        maleFirstNames: ["Lukas", "Matteo", "Ivan", "Wei", "Arjun", "Nikolai", "Hans", "Marco", "Dimitri", "Ming", "Viktor", "Antonio", "Leif", "Yuto", "Rajesh", "Tuan", "Stefan", "Luca", "Igor", "Chen"],
        femaleFirstNames: ["María", "Sofia", "Hanna", "Emma", "Akiko", "Mei", "Aisha", "Zainab", "Amara", "Fatima", "Carmen", "Elena", "Greta", "Liesel", "Haruka", "Priya", "Chioma", "Nia", "Aya", "Lin"],
        lastNames: ["García", "Müller", "Kim", "Patel", "Okafor", "Chen", "Ahmed", "Yamamoto", "Ndiaye", "Ivanov", "López", "Schmidt", "Nguyen", "Hassan", "Pereira", "Dubois", "Wang", "Khan", "Nakamura", "Mensah"],
        specials: []
    }
]