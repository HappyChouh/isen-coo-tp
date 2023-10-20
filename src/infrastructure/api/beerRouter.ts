import { Router } from "express";
import { getAllBeers } from "../../application/use-case/get-all-beers";
import { makeBeerRepository } from "../provider/beer-repository-factory";
import { getAllTastedBeers } from "../../application/use-case/get-all-tasted-beer-use-case";
import { makeTastedBeerRepository } from "../provider/tasted-beer-repository-factory";
import { addTastedBeers } from "../../application/use-case/add-tasted-beer-use-case";

export function createBeerRouter() {
  const router = Router();
  const beerRepository = makeBeerRepository();
  const tastedBeerRepository = makeTastedBeerRepository();

  router.get("/", async (_, res) =>
    res.json({
      beers: await getAllBeers({ beerRepository }),
    }),
  );

  router.get("/me", async (_, res) =>
    res.json({
      tastedBeers: await getAllTastedBeers({ tastedBeerRepository }),
    }),
  );
  router.get("/me", async (_, res) => res.json({}));

  router.post("/me", async (req, res) => {
    const beerId = req.body.id;

    await addTastedBeers(beerId, {
      beerRepository,
      tastedBeerRepository,
    });

    return res.sendStatus(204);
  });

  return router;
}
