import { InputField } from "./input-field";

type Props = {
  label: string;
  id: string;
  onChange: (value: number) => void;
};

export function Slider({ label, id, onChange }: Props) {
  return (
    <InputField id={id} label={label}>
      <input
        id={id}
        className="py-2 px-4"
        type="range"
        min="1"
        max="10"
        defaultValue={1}
        onChange={(e) => onChange(parseInt(e.currentTarget.value))}
      />
    </InputField>
  );
}
