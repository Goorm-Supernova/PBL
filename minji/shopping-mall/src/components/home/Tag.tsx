import { useState } from "react";

type Props = {
  value: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  selected: boolean;
};

function Tag({ value, onClick, selected }: Props) {
  const [isSelected, setIsSelect] = useState(selected);

  return (
    <input
      type="button"
      onClick={(e) => {
        setIsSelect(true);
        onClick(e);
      }}
      value={value}
      className={`cursor-pointer ${
        isSelected ? "bg-slate-300" : "bg-white"
      } rounded-l w-52 border px-10 py-5`}
    />
  );
}

export default Tag;
