import { PrimaryNavyButton } from "../UI/Buttons/Buttons.styled";
import { InputForm } from "../UI/Input/Input.styled";
import { TextareaForm } from "../UI/Textarea/Textarea.styled";
import { ContactFormField } from "./ContactForm.styled";

const ContactForm = () => {
  return (
    <ContactFormField>
      <InputForm type="text" placeholder="Wpisz swoje imię i nazwisko" />
      <InputForm type="email" placeholder="Wpisz swój adres e-mail" />
      <TextareaForm placeholder="Wpisz swoją wiadomość" />
      <PrimaryNavyButton>Wyślij</PrimaryNavyButton>
    </ContactFormField>
  );
};

export default ContactForm;
