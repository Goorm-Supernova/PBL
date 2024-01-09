import { useState } from "react";
import Button from "./components/Button";
import Item from "./components/Item";
import ToastMessage from "./components/ToastMessage";

function App() {
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [itemList, setItemList] = useState([]);
  const [toast, setToast] = useState(null);

  const initializeInput = () => {
    setTitle("");
    setCost("");
    setSelectedItem(null);
  };
  const createItem = () => {
    setItemList([...itemList, { id: Math.random(), title, cost }]);
    setToast({
      msg: "아이템이 생성되었습니다.",
      color: "bg-green-400",
    });
    initializeInput();
  };
  const deleteItem = (id) => {
    setItemList(itemList.filter((item) => item.id !== id));
    setToast({
      msg: "아이템이 삭제되었습니다.",
      color: "bg-red-600",
    });
  };
  const updateItem = () => {
    const newItemList = [...itemList];
    const idx = newItemList.findIndex((v) => v.id === selectedItem.id);
    newItemList[idx].title = title;
    newItemList[idx].cost = cost;
    setItemList(newItemList);
    setToast({
      msg: "아이템이 수정되었습니다.",
      color: "bg-green-400",
    });
    setIsModifyMode(false);
    initializeInput();
  };

  return (
    <main className="min-h-screen min-w-screen bg-cyan-100 p-10">
      {toast && (
        <ToastMessage msg={toast.msg} setToast={setToast} color={toast.color} />
      )}

      <h1 className="text-3xl font-extrabold">예산 계산기</h1>
      <section className="w-full bg-white mt-10 p-10">
        <div className="flex gap-10">
          <div className="flex flex-col flex-grow">
            <label className="text-xl">지출 항목</label>
            <input
              className="bg-gray-200 p-3 rounded-xl"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col flex-grow mb-5">
            <label className="text-xl">비용</label>
            <input
              className="bg-gray-200 p-3 rounded-xl"
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
        </div>
        <Button
          value={isModifyMode ? "수정" : "제출"}
          onClick={isModifyMode ? updateItem : createItem}
          icon="submit"
        />
        <div className="flex flex-col gap-3 my-5">
          {itemList.map((item) => (
            <Item
              item={item}
              title={item.title}
              cost={item.cost}
              key={item.id}
              onClickModifyBtn={(title, cost) => {
                setIsModifyMode(true);
                setTitle(title);
                setCost(cost);
                setSelectedItem(item);
              }}
              onClickDeleteBtn={() => deleteItem(item.id)}
            />
          ))}
        </div>
        <Button
          value="목록 지우기"
          onClick={() => setItemList([])}
          icon="delete"
        />
      </section>
      <section className="p-5 text-right font-medium text-2xl">
        총지출 : {itemList.reduce((acc, cur) => acc + Number(cur.cost), 0)}
      </section>
    </main>
  );
}

export default App;
