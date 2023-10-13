import { Beer } from "../../../domain/entity/beer";

export class PunkAPIBeerDeserializer {
  public static deserialize(source: any): Beer {
    const { id, name } = source;
    //TODO
    const beer = new Beer({ id, name });
    return beer;
  }
}
