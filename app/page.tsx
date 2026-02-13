"use client";

import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [tipTotal, setTipTotal] = useState(0);
  const [billTotal, setBillTotal] = useState(0);

  const calculate = () => {
    const tip = (bill * tipPercent) / 100;
    setTipTotal(tip);
    setBillTotal(bill + tip);
  };

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-xl font-bold">Tip Calculator</h1>

      <div>
        <span>bill: </span>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className="outline-none"
        />
      </div>

      <div>
        <span>Tip: </span>
        <button 
          onClick={() => setTipPercent(5)}
          className={tipPercent === 5 ? "font-bold text-blue-600" : ""}
        >
          5%
        </button>
      </div>

      <button onClick={calculate} className="block font-bold">
        Calculate
      </button>

      <div className="space-y-2">
        <div>Tip Total: {tipTotal}</div>
        <div>Bill Total: {billTotal}</div>
      </div>
    </div>
  );
}