import { useState } from "react";
import s from "./Dropdown.module.css";

type DropdownProps = {
  options: string[];
  onSelect: (value: string) => void;
  placeholder?: string;
};

export const Dropdown = ({ options, onSelect, placeholder = "Select..." }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className={s.dropdown}>
      <div className={s.header} onClick={() => setIsOpen(!isOpen)}>
        {selected || placeholder}
      </div>

      {isOpen && (
        <ul className={s.menu}>
          {options.map((option) => (
            <li key={option} className={s.item} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
