import express from "express";
const router = express.Router();
import cars from "../cars.json" with { type: "json" };
import { calculateScore, getReasons } from "../utils/scoring.js";

router.post("/", (req, res) => {
  try {
    const { budget, type, fuel, weights } = req.body;
    if (!budget || !type || !fuel || !weights) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    let filtered = cars.filter(
      (car) =>
        car.price >= budget * 0.9 &&
        car.price <= budget * 1.1 &&
        car.type === type &&
        car.fuel === fuel,
    );
    let scored = filtered.map((car) => ({
      name: car.name,
      price: car.price,
      type: car.type,
      fuel: car.fuel,
      score: calculateScore(car, weights),
      reasons: getReasons(car),
    }));
    scored.sort((a, b) => b.score - a.score);
    const top5 = scored.slice(0, 5);
    res.json({ cars: top5 });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
