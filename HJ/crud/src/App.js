import { useCallback, useState } from "react";
import "./App.css";
import BudgetContainer from "./components/BudgetContainer.js";
import BudgetInput from "./components/BudgetInput.js";
import BudgetList from "./components/BudgetList.js";

function App() {
  const [budgets, setBudgets] = useState([]);

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

  const onClick = (e) => {
    onInsert(title, price);
    setTitle("");
    setPrice("");
  };

  const onInsert = useCallback(
    (title, price) => {
      if (isEdit) {
        const newBudget = budgets.map((b) => {
          return b.id === id ? { ...b, title, price } : b;
        });
        setBudgets(newBudget);
        setIsEdit(false);
      } else {
        console.log("삽입");
        const newBudget = {
          id: crypto.randomUUID(),
          title,
          price,
        };
        setBudgets(budgets.concat(newBudget));
      }
    },
    [budgets, isEdit, id]
  );

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
        onInsert={onInsert}
        onChangePrice={onChangePrice}
        onChangeTitle={onChangeTitle}
        title={title}
        price={price}
        onClick={onClick}
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
