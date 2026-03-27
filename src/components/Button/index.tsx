type Props = React.ComponentProps<"button">;

export function Button({ ...rest }: Props) {
  return (
    <button className="w-full bg-violet-500 text-white rounded-xl py-2.5 text-base cursor-pointer hover:bg-violet-600 transition">
      Enviar
    </button>
  );
}
