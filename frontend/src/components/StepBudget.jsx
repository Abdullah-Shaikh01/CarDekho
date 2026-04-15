export default function StepBudget({ budget, setBudget }) {
  return (
    <div className="step">
      <h2>What's Your Budget?</h2>
      <p className="subtitle">Enter your budget in lakhs</p>
      <div className="input-group">
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="e.g., 15, 20, 25"
          min="0"
          className="input"
          autoFocus
        />
        <span className="currency">₹ Lakhs</span>
      </div>
      <div className="price-range">
        <p>Common budget ranges:</p>
        <div className="range-buttons">
          <button onClick={() => setBudget("10")} className="range-btn">
            5-10L
          </button>
          <button onClick={() => setBudget("15")} className="range-btn">
            12-18L
          </button>
          <button onClick={() => setBudget("25")} className="range-btn">
            20-30L
          </button>
          <button onClick={() => setBudget("35")} className="range-btn">
            30-40L
          </button>
        </div>
      </div>
    </div>
  );
}
