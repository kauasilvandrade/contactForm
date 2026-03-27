import { ContactHeader } from "./components/ContactHeader";
import { ContactInfo } from "./components/ContactInfo";

import LocationIcon from "./../src/assets/locationIcon.png";
import EmailIcon from "./../src/assets/emailIcon.png";
import PhoneIcon from "./../src/assets/phoneIcon.png";

export function App() {
  return (
    <div className="w-screen h-screen font-sans flex items-center justify-center gap-x-6">
      <div className="w-2xs bg-violet-600 p-5 pb-2 rounded-xl">
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

      <form>FORM</form>
    </div>
  );
}
