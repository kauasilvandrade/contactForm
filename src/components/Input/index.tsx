type Props = React.ComponentProps<"input"> & {
  label: string;
  name: string;
  register: any;
  error?: any;
};

export function Input({
  type = "text",
  label,
  name,
  register,
  error,
  ...rest
}: Props) {
  return (
    <div className="flex flex-col w-full relative">
      <label htmlFor={name} className="text-xs sm:text-sm md:text-base">
        {label}
      </label>
      <input
        type={type}
        id={name}
        {...register(name)}
        {...rest}
        className="pl-1.5 border-b-2 border-violet-300 outline-0 focus-within:border-violet-500 text-sm sm:text-base md:text-base placeholder:text-sm sm:placeholder:text-base py-1.5 transition"
      />

      {error && (
        <span className="text-red-500 text-xs sm:text-sm mt-2 absolute top-14 sm:top-16 pl-2">
          {error.message}
        </span>
      )}
    </div>
  );
}
