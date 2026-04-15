import { useState } from "react";

export default function StepPriority({ priority, setPriority }) {
  const [available, setAvailable] = useState(
    ["Safety", "Mileage", "Performance", "Comfort"].filter(
      (item) => !priority.includes(item),
    ),
  );

  const moveUp = (index) => {
    if (index > 0) {
      const newPriority = [...priority];
      [newPriority[index], newPriority[index - 1]] = [
        newPriority[index - 1],
        newPriority[index],
      ];
      setPriority(newPriority);
    }
  };

  const moveDown = (index) => {
    if (index < priority.length - 1) {
      const newPriority = [...priority];
      [newPriority[index], newPriority[index + 1]] = [
        newPriority[index + 1],
        newPriority[index],
      ];
      setPriority(newPriority);
    }
  };

  const removeItem = (index) => {
    const item = priority[index];
    setPriority(priority.filter((_, i) => i !== index));
    setAvailable([...available, item]);
  };

  const addItem = (item) => {
    setPriority([...priority, item]);
    setAvailable(available.filter((a) => a !== item));
  };

  return (
    <div className="step">
      <h2>Rank Your Priorities</h2>
      <p className="subtitle">1 = Most Important, 4 = Least Important</p>

      <div className="priority-container">
        <div className="priority-list">
          <h3>Your ranking:</h3>
          {priority.map((item, index) => (
            <div key={index} className="priority-item">
              <span className="rank">{index + 1}</span>
              <span className="name">{item}</span>
              <div className="btns">
                <button
                  onClick={() => moveUp(index)}
                  disabled={index === 0}
                  className="arrow-btn"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveDown(index)}
                  disabled={index === priority.length - 1}
                  className="arrow-btn"
                >
                  ↓
                </button>
                <button
                  onClick={() => removeItem(index)}
                  className="remove-btn"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {available.length > 0 && (
          <div className="available-items">
            <h3>Available:</h3>
            {available.map((item) => (
              <button
                key={item}
                onClick={() => addItem(item)}
                className="add-btn"
              >
                + {item}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="weights-preview">
        <p className="preview-title">Weights will be:</p>
        <div className="weights-grid">
          {priority.map((item, index) => (
            <div key={item} className="weight-item">
              <span>{item}</span>
              <span className="weight">{4 - index}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
