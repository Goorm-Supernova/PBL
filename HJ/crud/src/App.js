import "./App.css";
import BudgetContainer from "./components/BudgetContainer.js";
import BudgetList from "./components/BudgetList.js";

function App() {
  return (
    <BudgetContainer>
      <BudgetList />
    </BudgetContainer>
  );
}

export default App;
