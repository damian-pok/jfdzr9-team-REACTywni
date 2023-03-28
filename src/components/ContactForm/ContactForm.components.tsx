import { InputForm } from "../UI/Input/Input.styled";
import { ContactFormField } from "./ContactForm.styled";
import { TextareaForm } from "./../UI/Textarea/Textarea.styled";
import { SubmitButton } from "./../UI/Submit Buttons/SubmitButtons.styled";

const ContactForm = () => {
  return (
    <ContactFormField action="mailto:reactywni@gmail.com" method="post">
      <InputForm type="text" name="name and lastname" placeholder="Wpisz imię i nazwisko" />
      <InputForm type="text" name="email" placeholder="Wpisz swój adres e-mail" />
      <TextareaForm name="message" placeholder="Wpisz swoją wiadomość" />
      <SubmitButton type="submit" value="Wyślij" />
    </ContactFormField>
  );
};

export default ContactForm;
