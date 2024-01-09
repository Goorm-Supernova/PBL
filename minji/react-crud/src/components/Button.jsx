import { Icons } from "../icons/icon";

function Button({ value, onClick, icon }) {
  const Icon = Icons[icon];
  return (
    <button
      className="p-3 bg-pink-500 rounded-xl text-white hover:scale-110"
      onClick={(e) => onClick(e)}
    >
      <div className="flex gap-2">
        <Icon />
        {value}
      </div>
    </button>
  );
}

export default Button;
