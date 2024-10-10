import { useState } from "react";
import { binarySearch } from "./utils/BinarySearch";

function App() {
  // binarySearch
  const [arr, setArr] = useState<number[]>([]);
  const [target, setTarget] = useState<number>(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1>Binary Search</h1>
      <div>
        <input
          style={{
            marginBottom: "16px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "240px",
          }}
          type="text"
          placeholder="Enter a sorted array (1,2,3,4,5)"
          onChange={(e) => setArr(e.target.value.split(",").map(Number))}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter a target value"
          onChange={(e) => setTarget(Number(e.target.value))}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "240px",
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            const sortedArr = arr.sort((a, b) => a - b);
            alert(`
                Array: [${arr}]
                Array Sorted: [${sortedArr}]
                Target: ${target}
                Index: ${binarySearch(sortedArr, target)}
            `);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
