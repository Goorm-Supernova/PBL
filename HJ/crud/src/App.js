import { useState } from "react";
import "./App.css";
import BudgetContainer from "./components/BudgetContainer.js";
import BudgetInput from "./components/BudgetInput.js";
import BudgetList from "./components/BudgetList.js";

function App() {
  const [budgets, setBudgets] = useState([
    {
      id: 1,
      title: "식비",
      price: 1000,
    },
    {
      id: 2,
      title: "숙박비",
      price: 10000,
    },
  ]);
  return (
    <BudgetContainer>
      <BudgetInput />
      <BudgetList budgetItems={budgets} />
    </BudgetContainer>
  );
}

export default App;
