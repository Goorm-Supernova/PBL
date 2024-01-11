import React, { useCallback, useState } from "react";
import "./BudgetInput.css";

function BudgetInput({ onInsert }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onChangePrice = useCallback((e) => {
    setPrice(e.target.value);
  }, []);

  const onClick = useCallback(
    (e) => {
      onInsert(title, price);
      setTitle("");
      setPrice("");
    },
    [onInsert, title, price]
  );

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
