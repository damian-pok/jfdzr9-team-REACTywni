import {
  SectionContactField,
  ContactField,
  InformationField,
  FormField,
  ImageContact,
  IconField,
  Icon,
  IconCointainer,
} from "./Contact.styled";
//icon import
import PhoneIcon from "./../../assets/icons/phone-icon.svg";
import MailIcon from "./../../assets/icons/mail-icon.svg";
import PinIcon from "./../../assets/icons/pin-icon.svg";
import ContactIllustration from "./../../assets/illustrations/mail-illustration.svg";
import ContactForm from "../ContactForm/ContactForm.component";

const Contact = () => {
  return (
    <SectionContactField>
      <h2>Masz pytania? Jesteśmy dla Ciebie!</h2>
      <ContactField>
        <InformationField>
          <ImageContact src={ContactIllustration} />
          <IconCointainer>
            <IconField>
              <Icon src={PhoneIcon} />
              <p>(+48) 321 456 789</p>
            </IconField>
            <IconField>
              <Icon src={MailIcon} />
              <p>kontakt@findadesigner.pl</p>
            </IconField>
            <IconField>
              <Icon src={PinIcon} />
              <p>
                ul. Grunwaldzka 128a <br />
                00-754 Warszawa
              </p>
            </IconField>
          </IconCointainer>
        </InformationField>
        <FormField>
          <p>Jesteśmy do Twojej dyspozycji codziennie od poniedziałku do piątku od 8:00 do 17:00.</p>
          <ContactForm />
        </FormField>
      </ContactField>
    </SectionContactField>
  );
};

export default Contact;
