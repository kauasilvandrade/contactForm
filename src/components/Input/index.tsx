import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Props = React.ComponentProps<"input"> & {
  label: string;
  name: string;
};

type FormData = {
  firtsName: string;
  lastName: string;
  name: string;
  email: string;
};

const schema = yup.object({
  firtsName: yup
    .string()
    .required("Primerio nome é obrigatório")
    .min(3, "Precisa ter pelo menos 3 caracteres"),
  lastName: yup
    .string()
    .required("Segundo nome é obrigatório")
    .min(3, "Precisa ter pelo menos 3 caracteres"),
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "Precisa ter pelo menos 3 caracteres"),
  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Email precisa ter @"),
});

export function Input({ type = "text", label, name, ...rest }: Props) {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

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
        {...register(name)}
        aria-invalid={errors.name ? "true" : "false"}
      />

      {errors.name?.message && <span>{errors.name.message}</span>}
    </div>
  );
}
