type Props = {
  label: string;
  id: string;
  onChange: (value: number) => void;
};

export function Slider({ label, id, onChange }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        type="range"
        min="1"
        max="10"
        defaultValue={1}
        onChange={(e) => onChange(parseInt(e.currentTarget.value))}
      />
    </div>
  );
}
