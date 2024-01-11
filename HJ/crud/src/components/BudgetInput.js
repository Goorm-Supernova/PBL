import React from "react";
import "./BudgetInput.css";

function BudgetInput({
  onInsert,
  onChangePrice,
  onChangeTitle,
  title,
  price,
  onClick,
}) {
  return (
    <div className="input-container">
      <div className="budget-input">
        <div>
          <p>지출 항목</p>
          <input
            placeholder="예) 식비"
            value={title}
            onChange={onChangeTitle}
          />
        </div>

        <div>
          <p>비용</p>
          <input
            placeholder="예) 1200"
            value={price}
            onChange={onChangePrice}
          />
        </div>
      </div>
      <button className="btn" onClick={onClick}>
        제출
      </button>
    </div>
  );
}

export default BudgetInput;
