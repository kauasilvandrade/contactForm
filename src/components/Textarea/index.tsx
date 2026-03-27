type Props = React.ComponentProps<"textarea"> & {
  label: string;
  name: string;
};

export function Textarea({ label, name, ...rest }: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-ms">
        {label}
      </label>
      <textarea
        id={name}
        required
        {...rest}
        rows={3}
        className="pl-1.5 border-b-2 border-violet-300 outline-0 focus-within:border-violet-500 text-base placeholder:text-base py-1.5 mb-6 transition resize-none"
      />
    </div>
  );
}
