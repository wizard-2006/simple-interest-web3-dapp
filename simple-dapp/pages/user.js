import { useEffect, useState } from "react";
import {
  initWeb3,
  connectWallet,
  calculateInterest
} from "../lib/interestWeb3";

export default function User() {
  const [P, setP] = useState("");
  const [T, setT] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    initWeb3();
  }, []);

  async function handleCalculate() {
    await connectWallet();
    const value = await calculateInterest(P, T);
    setResult(value);
  }

  return (
    <div style={box}>
      <h2>A Simple Decentralized Web-App</h2>
      <h3>User Dashboard</h3>

      <p>Principal amount:</p>
      <input
        type="number"
        onChange={(e) => setP(e.target.value)}
      />

      <p>Time period:</p>
      <input
        type="number"
        onChange={(e) => setT(e.target.value)}
      />

      <br /><br />
      <button onClick={handleCalculate}>
        Calculate Interest
      </button>

      {result !== null && <p>Interest: {result}</p>}
    </div>
  );
}

const box = {
  width: "400px",
  margin: "40px auto",
  padding: "30px",
  background: "#cfe0f7",
  textAlign: "center",
  border: "1px solid black"
};
