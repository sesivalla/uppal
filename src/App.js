
import React, { useState, useMemo, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const memoizedValue = useMemo(() => {
    return count % 2 === 0 ? "Even" : "Odd";
  }, [count]);

  return (
    <div className="App">
      <h1>useMemo and useCallback Demo</h1>
      <p>Count: {count}</p>
      <p>Value: {memoizedValue}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
