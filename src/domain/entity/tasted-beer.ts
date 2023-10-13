import { Beer, BeerDependencies } from "./beer";

export class TastedBeer extends Beer {
  public like = false;

  constructor({ id, name }: BeerDependencies) {
    super({ id, name });
  }
}
