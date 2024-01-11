import React from "react";
import "./BudgetItem.css";

function BudgetItem({ budget, onRemove, onEdit }) {
  const { id, title, price } = budget;
  return (
    <div className="budget-item">
      <div className="title">{title}</div>
      <div className="price">{price}</div>
      <button className="update-button" onClick={() => onEdit(id)}>
        수정
      </button>
      <button className="remove-button" onClick={() => onRemove(id)}>
        삭제
      </button>
    </div>
  );
}

export default BudgetItem;
