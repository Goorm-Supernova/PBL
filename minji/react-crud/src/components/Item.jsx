import { Icons } from "../icons/icon";

function Item({ item, onClickModifyBtn, onClickDeleteBtn }) {
  return (
    <div className="w-full p-4 bg-lime-100 flex justify-between rounded-xl gap-5">
      <div>{item.title}</div>
      <div>{item.cost}</div>
      <div className="flex gap-4">
        <Icons.modify onClick={() => onClickModifyBtn(item.title, item.cost)} />
        <Icons.delete onClick={onClickDeleteBtn} />
      </div>
    </div>
  );
}

export default Item;
