import React from "react";
import "./BudgetContainer.css";

function budgetContainer({ children }) {
  return (
    <div className="budget-container">
      <div className="container__title">예산 계산기</div>
      <div className="contents">{children}</div>
    </div>
  );
}

export default budgetContainer;
