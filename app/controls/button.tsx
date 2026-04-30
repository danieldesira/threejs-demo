type Props = {
  label: string;
  clickHandler?: () => void;
};

export function Button({ label, clickHandler }: Props) {
  return (
    <button
      type={clickHandler ? "button" : "submit"}
      role="button"
      className="rounded bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 text-white cursor-pointer"
      onClick={clickHandler}
    >
      {label}
    </button>
  );
}
