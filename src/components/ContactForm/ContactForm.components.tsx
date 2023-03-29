import { InputForm } from "../UI/Input/Input.styled";
import { ContactFormField } from "./ContactForm.styled";
import { TextareaForm } from "./../UI/Textarea/Textarea.styled";
import { SubmitButton } from "./../UI/Submit Buttons/SubmitButtons.styled";
import { ChangeEvent, useState } from "react";
import nodemailer from "nodemailer";

function validateEmail(email: string): boolean {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);

  function handleChangeName(event: ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value);
  }

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
    setValid(validateEmail(event.target.value));
  }

  function handleChangeMessage(event: ChangeEvent<HTMLTextAreaElement>): void {
    setMessage(event.target.value);
  }

  function handleSubmit(event: ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "YOUR_GMAIL_ADDRESS",
        pass: "YOUR_GMAIL_PASSWORD",
      },
    });

    const mailOptions = {
      from: email,
      to: "DESTINATION_EMAIL_ADDRESS",
      subject: `Message from ${name}`,
      text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }

  return (
    <ContactFormField onSubmit={handleSubmit}>
      <InputForm type="text" name="name" value={name} placeholder="Wpisz imię i nazwisko" onChange={handleChangeName} />
      <InputForm
        type="email"
        name="email"
        value={email}
        placeholder="Wpisz swój adres e-mail"
        onChange={handleChangeEmail}
      />
      {!valid && <p>Wprowadź poprawny adres email</p>}
      <TextareaForm name="message" value={message} placeholder="Wpisz swoją wiadomość" onChange={handleChangeMessage} />
      <SubmitButton type="submit" value="Wyślij" />
    </ContactFormField>
  );
};

export default ContactForm;
