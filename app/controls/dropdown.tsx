type DropdownProps = {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  onSelect: (option: string) => void;
};

export function Dropdown({ label, id, options, onSelect }: DropdownProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={(e) => onSelect(e.currentTarget.value)}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
