import { TastedBeerRepository } from "../../domain/repository/tasted-beer-repository";
import { TastedBeer } from "../../domain/entity/tasted-beer";
import { BeerRepository } from "../../domain/repository/beer-repository";

export type AddTastedBeersDependencies = {
  beerRepository: BeerRepository;
  tastedBeerRepository: TastedBeerRepository;
};

export async function addTastedBeers(beerId: TastedBeer["id"], deps: AddTastedBeersDependencies): Promise<void> {
  const beer = await deps.beerRepository.getBeer(beerId);

  if (!beer) {
    return;
  }

  const { id, name, description, urlImage, alcoholByVolume, color, bitterness } = beer;

  const tastedBeer = new TastedBeer({ id, name });
  tastedBeer.description = description;
  tastedBeer.urlImage = urlImage;
  tastedBeer.alcoholByVolume = alcoholByVolume;
  tastedBeer.bitterness = bitterness;
  tastedBeer.color = color;

  return await deps.tastedBeerRepository.addTastedBeer(tastedBeer);
}
