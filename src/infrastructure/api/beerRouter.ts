import { Router } from "express";
import { getAllBeers } from "../../application/use-case/get-all-beers";
import { makeBeerRepository } from "../provider/beer-repository-factory";
import { getAllTastedBeers } from "../../application/use-case/get-all-tasted-beer-use-case";
import { makeTastedBeerRepository } from "../provider/tasted-beer-repository-factory";
import { addTastedBeers } from "../../application/use-case/add-tasted-beer-use-case";
import { putTastedBeer } from "../../application/use-case/put-tasted-beer-use-case";
import { getTastedBeersStats } from "../../application/use-case/get-tasted-beers-stats-use-case";

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

  router.put("/me", async (req, res) => {
    const { id, hasLiked } = req.body;

    await putTastedBeer(id, hasLiked, { tastedBeerRepository });

    res.sendStatus(204);
  });

  router.get("/me/stats", async (_, res) => {
    const stats = await getTastedBeersStats({ tastedBeerRepository });

    res.json({
      ...stats,
    });
  });

  return router;
}
