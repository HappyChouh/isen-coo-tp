import { Beer } from "../../../domain/entity/beer";
import { defineBeerColor } from "./define-beer-color";

export class PunkAPIBeerDeserializer {
  public static deserialize(source: any): Beer {
    const { id, name, description, image_url, abv, ibu, ebc } = source;
    const beer = new Beer({ id, name });

    beer.description = description;
    beer.urlImage = image_url;
    beer.alcoholByVolume = abv;
    beer.bitterness = ibu;
    beer.color = defineBeerColor(ebc);

    return beer;
  }
}
