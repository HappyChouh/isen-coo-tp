import { BeerColorIntensity } from "../../../domain/enum/beer-color-intensity";

export function defineBeerColor(ebc: number): BeerColorIntensity {
  let tableOfBeerColorIntensityEnum: Array<[number, BeerColorIntensity]> = [
    [79, BeerColorIntensity.EXPORT_STOUT],
    [69, BeerColorIntensity.BALTIC_PORTER],
    [57, BeerColorIntensity.STOUT],
    [47, BeerColorIntensity.PORTER],
    [39, BeerColorIntensity.DUNKEL],
    [33, BeerColorIntensity.AMBER],
    [26, BeerColorIntensity.GARDE],
    [20, BeerColorIntensity.EXTRA_SPECIAL_BITTER],
    [16, BeerColorIntensity.SAISON],
    [12, BeerColorIntensity.IPA],
    [8, BeerColorIntensity.WEISS],
    [6, BeerColorIntensity.GOLDEN],
    [4, BeerColorIntensity.PALE],
  ];

  for (var [range, intensity] of tableOfBeerColorIntensityEnum) {
    if (ebc >= range) {
      return intensity;
    }
  }

  return BeerColorIntensity.UNKNOW;
}
