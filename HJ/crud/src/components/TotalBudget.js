import React from "react";
import "./TotalBudget.css";

function TotalBudget({ budgets }) {
  return (
    <div className="total-budget">
      총 지출:{" "}
      <span>
        {budgets.reduce((acc, cur) => {
          return (acc += Number(cur.price));
        }, 0)}
      </span>
      원
    </div>
  );
}

export default TotalBudget;
