"use client";

import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState(100);
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
      <h1 className="text-xl font-bold text-blue-600">Tip Calculator</h1>

      {/* ส่วนกรอกเงิน */}
      <div>
        <span>bill: </span>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className="outline-none border-b border-gray-300"
        />
      </div>

      {/* ส่วนเลือก Tip 5% - 20% */}
      <div className="flex items-center gap-2">
        <span>Tip: </span>
        {[5, 10, 15, 20].map((num) => (
          <button
            key={num}
            onClick={() => setTipPercent(num)}
            className={`px-3 py-1 border rounded transition-colors ${
              tipPercent === num ? "border-blue-500 bg-blue-50 font-bold" : "border-gray-400"
            }`}
          >
            {num}%
          </button>
        ))}
      </div>

      {/* ปุ่มคำนวณ */}
      <button 
        onClick={calculate} 
        className="px-6 py-2 border border-black rounded active:bg-gray-100 font-bold"
      >
        Calculate
      </button>

      {/* ส่วนแสดงผล */}
      <div className="pt-4 space-y-2">
        <div>Tip Total: <span className="font-bold">{tipTotal.toLocaleString()}</span></div>
        <div>Bill Total: <span className="font-bold">{billTotal.toLocaleString()}</span></div>
      </div>
    </div>
  );
}