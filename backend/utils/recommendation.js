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
  const expandedBudgetMatches = (car) =>
    car.price >= budget * 0.7 && car.price <= budget * 1.3;

  let candidates = cars.filter(
    (car) => budgetMatches(car) && typeMatches(car) && fuelMatches(car),
  );

  const sortByPriceDistance = (a, b) =>
    Math.abs(a.price - budget) - Math.abs(b.price - budget);

  if (candidates.length < 3) {
    const broader = cars.filter(
      (car) =>
        typeMatches(car) && fuelMatches(car) && expandedBudgetMatches(car),
    );
    candidates = broader.sort(sortByPriceDistance).slice(0, 10);
  }

  if (candidates.length < 3) {
    candidates = cars
      .filter(expandedBudgetMatches)
      .sort(sortByPriceDistance)
      .slice(0, 10);
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
