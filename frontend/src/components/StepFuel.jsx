export default function StepFuel({ fuel, setFuel }) {
  const options = [
    { value: "Petrol", label: "⛽ Petrol" },
    { value: "Diesel", label: "🛢️ Diesel" },
    { value: "Hybrid", label: "🔋 Hybrid" },
    { value: "any", label: "❓ Any" },
  ];

  return (
    <div className="step">
      <h2>What Fuel Type?</h2>
      <p className="subtitle">Or skip to see all fuel types</p>
      <div className="options-grid">
        {options.map((option) => (
          <button
            key={option.value}
            className={`option-btn ${fuel === option.value ? "active" : ""}`}
            onClick={() => setFuel(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
