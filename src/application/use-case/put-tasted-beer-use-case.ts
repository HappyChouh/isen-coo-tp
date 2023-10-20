import { TastedBeerRepository } from "../../domain/repository/tasted-beer-repository";

export type PutTastedBeerUseCaseDependencies = {
  tastedBeerRepository: TastedBeerRepository;
};

export async function putTastedBeer(
  id: number,
  hasLiked: boolean,
  deps: PutTastedBeerUseCaseDependencies,
): Promise<void> {
  return await deps.tastedBeerRepository.setBeerLikedOpinionOnTastedBeer(id, hasLiked);
}
