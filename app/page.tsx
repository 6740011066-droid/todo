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
    <div className="p-10 space-y-8 max-w-lg mx-auto text-blue-900">
      <h1 className="text-2xl font-bold text-blue-600">Tip Calculator</h1>

      {/* ส่วนกรอกเงิน */}
      <div className="space-y-2">
        <label className="block font-semibold">Bill Amount</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className="w-full p-2 border-b-2 border-blue-200 outline-none focus:border-blue-500 text-xl bg-blue-50/30"
        />
      </div>

      {/* ส่วนเลือก Tip 5% - 20% */}
      <div className="space-y-3">
        <label className="block font-semibold">Select Tip %</label>
        <div className="flex gap-2">
          {[5, 10, 15, 20].map((num) => (
            <button
              key={num}
              onClick={() => setTipPercent(num)}
              className={`flex-1 py-2 border rounded-lg transition-all ${
                tipPercent === num 
                ? "bg-blue-500 text-white border-blue-600 shadow-md" 
                : "border-blue-300 text-blue-500 hover:bg-blue-50"
              }`}
            >
              {num}%
            </button>
          ))}
        </div>
      </div>

      {/* ปุ่มคำนวณ */}
      <button 
        onClick={calculate} 
        className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200"
      >
        Calculate
      </button>

      {/* ส่วนแสดงผลลัพธ์ */}
      <div className="pt-6 border-t border-blue-100 space-y-4">
        <div className="flex justify-between items-center text-blue-700">
          <span>Tip Total:</span>
          <span className="text-xl font-bold text-blue-600">{tipTotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl border border-blue-100">
          <span className="text-lg font-bold">Total to Pay:</span>
          <span className="text-2xl font-black text-blue-700">{billTotal.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}