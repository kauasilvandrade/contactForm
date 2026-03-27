import LocationIcon from "./../src/assets/locationIcon.png";
import EmailIcon from "./../src/assets/emailIcon.png";
import PhoneIcon from "./../src/assets/phoneIcon.png";

import { ContactHeader } from "./components/ContactHeader";
import { ContactInfo } from "./components/ContactInfo";
import { Input } from "./components/Input";
import { Textarea } from "./components/Textarea";
import { Button } from "./components/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  message: string;
};

const schema = yup.object({
  firstName: yup
    .string()
    .required("Primeiro nome é obrigatório")
    .min(3, "Precisa ter pelo menos 3 caracteres"),

  lastName: yup
    .string()
    .required("Sobrenome nome é obrigatório")
    .min(3, "Precisa ter pelo menos 3 caracteres"),

  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "Precisa ter pelo menos 3 caracteres"),

  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Email precisa ser válido"),

  message: yup
    .string()
    .required("Mensagem obrigatória")
    .min(10, "Precisa ter pelo menos 10 caracteres"),
});

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  function onSubmit(data: FormData) {
    console.log(data);
    reset();
  }

  return (
    <div className="min-h-screen w-full px-2 sm:px-3 md:px-4 lg:px-6 py-4 sm:py-6 md:py-8 font-sans flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
      <div className="w-full sm:w-80 md:w-72 lg:w-96 bg-violet-600 p-6 sm:p-8 md:p-10 pb-2 rounded-xl flex-shrink-0">
        <ContactHeader />

        <ContactInfo
          image={LocationIcon}
          title={"Nossa Localização"}
          contact={"29832 Rio Makenzie"}
        />

        <ContactInfo
          image={EmailIcon}
          title={"Endereço de email"}
          contact={"info@company.com"}
        />

        <ContactInfo
          image={PhoneIcon}
          title={"Telefone"}
          contact={"+27825100457"}
        />
      </div>

      <form
        className="w-full sm:w-96 md:w-2xl lg:w-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
          <Input
            label="First Name"
            name="firstName"
            placeholder="Enter your First Name"
            register={register}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            name="lastName"
            placeholder="Enter your Last Name"
            register={register}
            error={errors.lastName}
          />
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
          <Input
            label="Name"
            name="name"
            placeholder="Enter your Name"
            register={register}
            error={errors.name}
          />

          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter a valid email address"
            register={register}
            error={errors.email}
          />
        </div>

        <Textarea
          label="Message"
          name="message"
          placeholder="Enter your message"
          register={register}
          error={errors.message}
        />

        <Button />
      </form>
    </div>
  );
}
