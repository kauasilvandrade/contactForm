import LocationIcon from "./../src/assets/locationIcon.png";
import EmailIcon from "./../src/assets/emailIcon.png";
import PhoneIcon from "./../src/assets/phoneIcon.png";

import { ContactHeader } from "./components/ContactHeader";
import { ContactInfo } from "./components/ContactInfo";
import { Input } from "./components/Input";
import { Textarea } from "./components/Textarea";
import { Button } from "./components/Button";

export function App() {
  return (
    <div className="w-screen h-screen px-3 font-sans flex items-center justify-center gap-x-8">
      <div className="w-md bg-violet-600 p-10 pb-2 rounded-xl">
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

      <form className="w-2xl">
        <div className="w-full flex gap-4 mb-7">
          <Input
            label="First Name"
            name="firstName"
            placeholder="Enter your First Name"
          />
          <Input
            label="Last Name"
            name="lastname"
            placeholder="Enter your Last Name"
          />
        </div>

        <div className="w-full flex gap-4 mb-7">
          <Input label="Name" name="name" placeholder="Enter your Name" />

          <Input
            label="Email"
            type="email"
            name="name"
            placeholder="Enter a valid email address"
          />
        </div>

        <Textarea
          label="Message"
          name="message"
          placeholder="Enter your message"
        />

        <Button />
      </form>
    </div>
  );
}
