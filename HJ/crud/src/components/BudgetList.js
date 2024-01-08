import React from "react";
import BudgetItem from "./BudgetItem";
import "./BudgetList.css";

function BudgetList() {
  return (
    <div className="budget-list">
      <BudgetItem />
      <BudgetItem />
    </div>
  );
}

export default BudgetList;
