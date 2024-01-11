import { useCallback, useState } from "react";
import "./App.css";
import BudgetContainer from "./components/BudgetContainer.js";
import BudgetInput from "./components/BudgetInput.js";
import BudgetList from "./components/BudgetList.js";
import BudgetNotice from "./components/BudgetNotice.js";

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
  const [notice, setNotice] = useState({ isView: false });

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
        onNotice("예산이 수정되었습니다.");
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
      onNotice("예산이 등록되었습니다.");
    }
  }, [budgets, isEdit, id, price, title]);

  const onRemove = useCallback(
    (id) => {
      setBudgets(budgets.filter((budget) => budget.id !== id));
      onNotice("예산이 삭제되었습니다.");
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
    onNotice("예산이 리스트가 삭제 되었습니다.");
  }, []);

  const onNotice = (text) => {
    setNotice({ isView: true, text });
    setTimeout(() => {
      setNotice({ isView: false });
    }, 3000);
  };

  return (
    <>
      <BudgetContainer>
        {notice.isView ? <BudgetNotice text={notice.text} /> : null}
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
    </>
  );
}

export default App;
