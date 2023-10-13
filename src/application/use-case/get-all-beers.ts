import { BeerRepository } from "./../../domain/repository/beer-repository";
import { Beer } from "../../domain/entity/beer";

export type GetAllBeersDependencies = {
  BeerRepository: BeerRepository;
};

export async function getAllBeers(deps: GetAllBeersDependencies): Promise<Beer[]> {
  return await deps.BeerRepository.getAllBeers();
}
