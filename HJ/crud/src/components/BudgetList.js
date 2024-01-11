import React from "react";
import BudgetItem from "./BudgetItem";
import "./BudgetList.css";

function BudgetList({ budgetItems, onRemove, onEdit }) {
  return (
    <div className="budget-list">
      {budgetItems.map((budget) => (
        <BudgetItem
          budget={budget}
          key={budget.id}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
      <button className="btn">목록 지우기</button>
    </div>
  );
}

export default BudgetList;
