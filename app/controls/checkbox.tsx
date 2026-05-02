type Props = {
  label: string;
  id: string;
  onChange: (checked: boolean) => void;
  defaultChecked?: boolean;
};

export function Checkbox({ label, id, onChange, defaultChecked }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-sm">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="py-2 px-4 rounded w-fit"
        type="checkbox"
        onChange={(e) => onChange(e.currentTarget.checked)}
        defaultChecked={defaultChecked}
      />
    </div>
  );
}
