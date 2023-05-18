export class Pais {
    flags: {
        png: string;
      };
      capital: string[];
      subregion: string;
      languages: {
        [key: string]: string;
      };
      translations: {
        spa: {
          official: string;
          common: string;
        };
      };
    
    constructor(
    flags: { png: string;},
    capital: string[],
    subregion: string,
    languages: { [key: string]: string },
    translations: { spa: { official: string; common: string } }
    ) {
    this.flags = flags;
    this.capital = capital;
    this.subregion = subregion;
    this.languages = languages;
    this.translations = translations;
    }
}
