export default function StepType({ type, setType }) {
  const options = [
    { value: "SUV", label: "🚙 SUV" },
    { value: "Sedan", label: "🚗 Sedan" },
    { value: "Hatchback", label: "🚕 Hatchback" },
    { value: "any", label: "❓ Any" },
  ];

  return (
    <div className="step">
      <h2>What Type of Car?</h2>
      <p className="subtitle">Or skip to see all types</p>
      <div className="options-grid">
        {options.map((option) => (
          <button
            key={option.value}
            className={`option-btn ${type === option.value ? "active" : ""}`}
            onClick={() => setType(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
