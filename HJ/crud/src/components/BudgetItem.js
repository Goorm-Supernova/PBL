import React from "react";
import "./BudgetItem.css";

function BudgetItem({ budget }) {
  const { title, price } = budget;
  return (
    <div className="budget-item">
      <div className="title">{title}</div>
      <div className="price">{price}</div>
      <button className="update-button">수정</button>
      <button className="remove-button">삭제</button>
    </div>
  );
}

export default BudgetItem;
