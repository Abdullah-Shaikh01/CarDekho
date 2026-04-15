function calculateScore(car, weights) {
  return (
    car.safety * weights.safety +
    car.mileage * weights.mileage +
    car.performance * weights.performance +
    car.comfort * weights.comfort
  );
}

function getReasons(car, budget) {
  let reasons = [];
  if (car.safety >= 8) reasons.push("High safety rating");
  if (car.mileage >= 8) reasons.push("Fuel efficient");
  if (car.comfort >= 8) reasons.push("Comfortable ride");
  if (car.performance >= 8) reasons.push("Strong performance");
  if (car.price <= budget) reasons.push("Fits your budget");
  return reasons;
}

export { calculateScore, getReasons };
