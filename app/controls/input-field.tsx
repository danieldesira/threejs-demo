import type { PropsWithChildren } from "react";

type Props = { label: string; id: string };

export function InputField({ children, id, label }: PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-sm">
        {label}
      </label>
      {children}
    </div>
  );
}
