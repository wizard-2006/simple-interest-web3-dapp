import { useEffect, useState } from "react";
import {
  initWeb3,
  connectWallet,
  updateInterestRate
} from "../lib/interestWeb3";

export default function Manager() {
  const [rate, setRate] = useState("");

  useEffect(() => {
    initWeb3();
  }, []);

  async function handleUpdate() {
    await connectWallet();
    await updateInterestRate(rate);
    alert("Interest rate updated on blockchain");
  }

  return (
    <div style={box}>
      <h2>A Simple Decentralized Web-App</h2>
      <h3>Manager Dashboard</h3>

      <p>Enter the Value of Interest Rate:</p>
      <input
        type="number"
        onChange={(e) => setRate(e.target.value)}
      />

      <br /><br />
      <button onClick={handleUpdate}>UPDATE</button>
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
