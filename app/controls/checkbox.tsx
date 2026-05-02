import { InputField } from "./input-field";

type Props = {
  label: string;
  id: string;
  onChange: (checked: boolean) => void;
  defaultChecked?: boolean;
};

export function Checkbox({ label, id, onChange, defaultChecked }: Props) {
  return (
    <InputField id={id} label={label}>
      <input
        id={id}
        name={id}
        className="py-2 px-4 rounded w-fit"
        type="checkbox"
        onChange={(e) => onChange(e.currentTarget.checked)}
        defaultChecked={defaultChecked}
      />
    </InputField>
  );
}
