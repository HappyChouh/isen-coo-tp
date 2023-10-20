import { LocalTastedBeerRepository } from "./local-tasted-beer-repository";

export function makeTastedBeerRepository() {
  return new LocalTastedBeerRepository();
}
