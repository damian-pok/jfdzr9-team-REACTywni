import { SectionContactField, Icon, ContactInformationField, IconField } from "./Contact.styled";
//icon import
import PhoneIcon from "./../../assets/phone-icon.png";
import MailIcon from "./../../assets/mail-icon.png";
import PinIcon from "./../../assets/pin-icon.png";

const Contact = () => {
  return (
    <SectionContactField>
      <h2>Masz pytania? Jesteśmy dla Ciebie!</h2>
      <p>Jesteśmy do Twojej dyspozycji codziennie od poniedziałku do piątku od 8:00 do 17:00.</p>
      <ContactInformationField>
        <IconField>
          <Icon src={PhoneIcon} />
          <p>+48 321 456 789 </p>
        </IconField>
        <IconField>
          <Icon src={MailIcon} />
          <p>contact@findadesigner.pl</p>
        </IconField>
        <IconField>
          <Icon src={PinIcon} />
          <p>ul. Grunwaldzka 128a</p>
          <p>00-754 Warszawa</p>
        </IconField>
      </ContactInformationField>
    </SectionContactField>
  );
};

export default Contact;
