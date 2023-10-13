import { TastedBeer } from "../entity/tasted-beer";

export interface TastedBeerRepository {
  getAllTastedBeers(): Promise<TastedBeer[]>;

  addTastedBeer(beer: TastedBeer): Promise<void>;

  setBeerLikedOpinionOnTastedBeer(id: number, hasLiked: boolean): Promise<void>;
}
