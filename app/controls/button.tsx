type Props = {
  label: string;
  clickHandler: () => void;
};

export function Button({ label, clickHandler }: Props) {
  return (
    <button
      type="button"
      className="h-fit rounded bg-blue-500 px-4 py-2 text-white"
      onClick={clickHandler}
    >
      {label}
    </button>
  );
}
