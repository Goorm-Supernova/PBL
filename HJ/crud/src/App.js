import { useCallback, useState } from "react";
import "./App.css";
import BudgetContainer from "./components/BudgetContainer.js";
import BudgetInput from "./components/BudgetInput.js";
import BudgetList from "./components/BudgetList.js";

function App() {
  const [budgets, setBudgets] = useState([
    {
      id: 1,
      title: "식비",
      price: 1200,
    },
  ]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [id, setId] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onChangePrice = useCallback((e) => {
    setPrice(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    if (title !== "" && price > 0) {
      if (isEdit) {
        const newBudgets = budgets.map((b) => {
          return b.id === id ? { ...b, title, price } : b;
        });
        setBudgets(newBudgets);
        setIsEdit(false);
      } else {
        const newBudget = {
          id: crypto.randomUUID(),
          title,
          price,
        };
        setBudgets(budgets.concat(newBudget));
      }
      setTitle("");
      setPrice(0);
    }
  }, [budgets, isEdit, id, price, title]);

  const onRemove = useCallback(
    (id) => {
      setBudgets(budgets.filter((budget) => budget.id !== id));
    },
    [budgets]
  );

  const onEdit = useCallback(
    (id) => {
      const budget = budgets.find((b) => b.id === id);
      setId(id);
      setTitle(budget.title);
      setPrice(budget.price);
      setIsEdit(true);
    },
    [budgets]
  );

  const onClear = useCallback(() => {
    setBudgets([]);
  }, []);

  return (
    <BudgetContainer>
      <BudgetInput
        onChangePrice={onChangePrice}
        onChangeTitle={onChangeTitle}
        title={title}
        price={price}
        onClick={onClick}
        isEdit={isEdit}
      />
      <BudgetList
        budgetItems={budgets}
        onRemove={onRemove}
        onEdit={onEdit}
        onClear={onClear}
      />
    </BudgetContainer>
  );
}

export default App;
