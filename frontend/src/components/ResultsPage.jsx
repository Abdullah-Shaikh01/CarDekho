export default function ResultsPage({ cars, onReset }) {
  if (!cars || cars.length === 0) {
    return (
      <div className="results-container">
        <div className="no-results">
          <h2>No cars found</h2>
          <p>Try adjusting your preferences</p>
          <button onClick={onReset} className="btn btn-primary">
            ← Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="results-container">
      <div className="results-header">
        <h1>🎉 Your Top Recommendations</h1>
        <p>Based on your preferences</p>
      </div>

      <div className="cars-grid">
        {cars.map((car, index) => (
          <div key={index} className="car-card">
            <div className="rank-badge">#{index + 1}</div>
            <div className="car-image">
              <div className="placeholder-image">
                {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
              </div>
            </div>
            <div className="car-content">
              <h3>{car.name}</h3>
              <div className="car-meta">
                <span className="badge">{car.type}</span>
                <span className="badge">{car.fuel}</span>
              </div>
              <div className="car-info">
                <div className="price">
                  <span className="label">Price</span>
                  <span className="value">₹ {car.price} L</span>
                </div>
                <div className="score">
                  <span className="label">Score</span>
                  <span className="value">{car.score}</span>
                </div>
              </div>
              <div className="reasons">
                <p className="reasons-title">Why this car?</p>
                <ul>
                  {car.reasons.map((reason, i) => (
                    <li key={i}>✓ {reason}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={onReset} className="btn btn-success btn-large">
        ← Start Over
      </button>
    </div>
  );
}
