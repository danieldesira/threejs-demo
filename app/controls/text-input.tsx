import { InputField } from "./input-field";

type Props = {
  label: string;
  id: string;
  type?: "text" | "email" | "password";
  required?: boolean;
};

export function TextInput({ label, id, type = "text", required }: Props) {
  return (
    <InputField id={id} label={label}>
      <input
        id={id}
        name={id}
        className="py-2 px-4 w-fit rounded border border-blue-600"
        type={type}
        required={required}
        aria-required={required}
      />
    </InputField>
  );
}
