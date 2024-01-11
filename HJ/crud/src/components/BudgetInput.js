import React from "react";
import "./BudgetInput.css";

function BudgetInput() {
  return (
    <div className="input-container">
      <div className="budget-input">
        <div>
          <p>지출 항목</p>
          <input placeholder="예) 식비" />
        </div>

        <div>
          <p>비용</p>
          <input placeholder="예) 1200" />
        </div>
      </div>
      <button className="btn">제출</button>
    </div>
  );
}

export default BudgetInput;
