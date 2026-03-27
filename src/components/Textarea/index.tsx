type Props = React.ComponentProps<"textarea"> & {
  label: string;
  name: string;
  register: any;
  error?: any;
};

export function Textarea({ label, name, register, error, ...rest }: Props) {
  return (
    <div className="flex flex-col relative mb-4 sm:mb-6">
      <label htmlFor={name} className="text-xs sm:text-sm md:text-base">
        {label}
      </label>
      <textarea
        id={name}
        rows={3}
        {...register(name)}
        {...rest}
        className="pl-1.5 border-b-2 border-violet-300 outline-0 focus-within:border-violet-500 text-sm sm:text-base md:text-base placeholder:text-sm sm:placeholder:text-base py-1.5 mb-4 sm:mb-6 transition resize-none"
      />
      {error && (
        <span className="text-red-500 text-xs sm:text-sm mt-2 absolute top-24 sm:top-28 pl-2">
          {error.message}
        </span>
      )}
    </div>
  );
}
