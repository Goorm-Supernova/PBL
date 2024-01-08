import React from "react";
import "./BudgetItem.css";

function BudgetItem() {
  return (
    <div className="budget-item">
      <div className="budget">식비</div>
      <div className="price">1200</div>
      <button className="update-button">수정</button>
      <button className="remove-button">삭제</button>
    </div>
  );
}

export default BudgetItem;
