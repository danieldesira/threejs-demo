type Props = {
  label: string;
  id: string;
  type?: "text" | "email" | "password";
  required?: boolean;
};

export function TextInput({ label, id, type = "text", required }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-sm">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="py-2 px-4 w-fit rounded border border-blue-600"
        type={type}
        required={required}
        aria-required={required}
      />
    </div>
  );
}
