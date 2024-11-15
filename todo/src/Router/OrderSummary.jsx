import React from "react";
import { useNavigate } from "react-router-dom";
export default function OrderSummary() {
  const navigate = useNavigate();
  return (
    <div className="confirmed">
      <h3>Order Confirmed</h3>
      <button onClick={() => navigate(-1)}> Back</button>
    </div>
  );
}
