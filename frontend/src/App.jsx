import { useState } from "react";
import StepBudget from "./components/StepBudget";
import StepType from "./components/StepType";
import StepFuel from "./components/StepFuel";
import StepPriority from "./components/StepPriority";
import ResultsPage from "./components/ResultsPage";
import "./App.css";
import "./components.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState("");
  const [type, setType] = useState("");
  const [fuel, setFuel] = useState("");
  const [priority, setPriority] = useState([
    "Safety",
    "Mileage",
    "Performance",
    "Comfort",
  ]);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const convertPriorityToWeights = (priorityArray) => {
    const weights = {};
    priorityArray.forEach((item, index) => {
      weights[item.toLowerCase()] = 4 - index;
    });
    return weights;
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    if (!budget) {
      setError("Please enter a budget");
      return;
    }

    setLoading(true);
    setError("");

    const weights = convertPriorityToWeights(priority);
    const payload = {
      budget: Number(budget),
      type: type || "any",
      fuel: fuel || "any",
      weights,
    };

    try {
      const response = await fetch(
        "https://cardekho-backend.onrender.com/recommend",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations");
      }

      const data = await response.json();
      setResults(data.cars);
      setStep("results");
    } catch (err) {
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setBudget("");
    setType("");
    setFuel("");
    setPriority(["Safety", "Mileage", "Performance", "Comfort"]);
    setResults(null);
    setError("");
  };

  if (step === "results") {
    return <ResultsPage cars={results} onReset={handleReset} />;
  }

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>🚗 CarDekho</h1>
          <p>Find Your Perfect Car</p>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
          <p className="step-indicator">Step {step} of 4</p>
        </div>

        {error && <div className="error">{error}</div>}

        <div className="form-wrapper">
          {step === 1 && <StepBudget budget={budget} setBudget={setBudget} />}
          {step === 2 && <StepType type={type} setType={setType} />}
          {step === 3 && <StepFuel fuel={fuel} setFuel={setFuel} />}
          {step === 4 && (
            <StepPriority priority={priority} setPriority={setPriority} />
          )}
        </div>

        <div className="buttons">
          {step > 1 && (
            <button className="btn btn-secondary" onClick={handlePrev}>
              ← Back
            </button>
          )}
          {step < 4 ? (
            <button className="btn btn-primary" onClick={handleNext}>
              Next →
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Finding Cars..." : "Get Recommendations"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
