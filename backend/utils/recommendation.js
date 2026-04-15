import { calculateScore, getReasons } from "./scoring.js";

function normalizeValue(value) {
  return typeof value === "string" ? value.toLowerCase() : value;
}

function matchesPreference(value, preference) {
  return preference === "any" || value === preference;
}

export function getRecommendedCars(cars, { budget, type, fuel, weights }) {
  const normalizedType = normalizeValue(type);
  const normalizedFuel = normalizeValue(fuel);

  const budgetMatches = (car) =>
    car.price >= budget * 0.9 && car.price <= budget * 1.1;
  const typeMatches = (car) => matchesPreference(car.type, normalizedType);
  const fuelMatches = (car) => matchesPreference(car.fuel, normalizedFuel);

  let candidates = cars.filter(
    (car) => budgetMatches(car) && typeMatches(car) && fuelMatches(car),
  );

  if (candidates.length < 3) {
    candidates = cars.filter((car) => typeMatches(car) && fuelMatches(car));
  }

  if (candidates.length < 3) {
    candidates = cars;
  }

  return candidates
    .map((car) => ({
      name: car.name,
      price: car.price,
      type: car.type,
      fuel: car.fuel,
      score: calculateScore(car, weights),
      reasons: getReasons(car, budget),
    }))
    .sort((a, b) => b.score - a.score || a.price - b.price)
    .slice(0, 3);
}
