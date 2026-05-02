import { InputField } from "./input-field";

type DropdownProps = {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  onSelect: (option: string) => void;
};

export function Dropdown({ label, id, options, onSelect }: DropdownProps) {
  return (
    <InputField id={id} label={label}>
      <select
        id={id}
        onChange={(e) => onSelect(e.currentTarget.value)}
        className="border-blue-600 border rounded py-2 px-4"
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value} className="dark:bg-slate-950">
            {label}
          </option>
        ))}
      </select>
    </InputField>
  );
}
