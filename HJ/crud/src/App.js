import "./App.css";
import BudgetContainer from "./components/BudgetContainer.js";
import BudgetInput from "./components/BudgetInput.js";
import BudgetList from "./components/BudgetList.js";

function App() {
  return (
    <BudgetContainer>
      <BudgetInput />
      <BudgetList />
    </BudgetContainer>
  );
}

export default App;
