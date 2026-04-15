import express from "express";
const router = express.Router();
import cars from "../cars.json" with { type: "json" };
import { getRecommendedCars } from "../utils/recommendation.js";

router.post("/", (req, res) => {
  try {
    const { budget, type, fuel, weights } = req.body;
    if (!budget || !type || !fuel || !weights) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const recommended = getRecommendedCars(cars, {
      budget,
      type,
      fuel,
      weights,
    });
    res.json({ cars: recommended });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
