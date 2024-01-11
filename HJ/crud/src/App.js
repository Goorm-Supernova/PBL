import { useCallback, useRef, useState } from "react";
import "./App.css";
import BudgetContainer from "./components/BudgetContainer.js";
import BudgetInput from "./components/BudgetInput.js";
import BudgetList from "./components/BudgetList.js";

function App() {
  const [budgets, setBudgets] = useState([]);

  const id = useRef(1);

  const onInsert = useCallback(
    (title, price) => {
      const budget = {
        id: id.current,
        title,
        price,
      };
      setBudgets(budgets.concat(budget));
      id.current += 1;
    },
    [budgets]
  );

  return (
    <BudgetContainer>
      <BudgetInput onInsert={onInsert} />
      <BudgetList budgetItems={budgets} />
    </BudgetContainer>
  );
}

export default App;
