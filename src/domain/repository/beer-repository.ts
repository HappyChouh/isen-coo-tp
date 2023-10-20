import { Beer } from "../entity/beer";
import { TastedBeer } from "../entity/tasted-beer";

export interface BeerRepository {
  getAllBeers(): Promise<Beer[]>;
  getBeer(id: TastedBeer["id"]): Promise<Beer | undefined>;
}
