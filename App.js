import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [total, setTotal] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const performOperation = (operator) => {
    const num = parseFloat(input);
    if (isNaN(num)) return;

    switch (operator) {
      case "+":
        setTotal((prev) => prev + num);
        break;
      case "-":
        setTotal((prev) => prev - num);
        break;
      case "*":
        setTotal((prev) => prev * num);
        break;
      case "/":
        if (num !== 0) {
          setTotal((prev) => prev / num);
        } else {
          alert("Cannot divide by zero");
        }
        break;
      default:
        break;
    }

    setInput("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
      <h1>Calculator App</h1>
      <h2>Total: {total}</h2>

      <input
        type="number"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => performOperation("+")}>+</button>
        <button onClick={() => performOperation("-")}>−</button>
        <button onClick={() => performOperation("*")}>×</button>
        <button onClick={() => performOperation("/")}>÷</button>
      </div>
    </div>
  );
}

export default App;
