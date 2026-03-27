type Props = React.ComponentProps<"input"> & {
  label: string;
  name: string;
};

export function Input({ type = "text", label, name, ...rest }: Props) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-ms">
        {label}
      </label>
      <input
        type={type}
        id={name}
        required
        {...rest}
        className="pl-1.5 border-b-2 border-violet-300 outline-0 focus-within:border-violet-500 text-base placeholder:text-base py-1.5 transition"
      />
    </div>
  );
}
