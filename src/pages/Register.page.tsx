//import libraries
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PrimaryGreenButton } from "../components/UI/Buttons/Buttons.styled";
import { InputForm } from "../components/UI/Input/Input.styled";
import { HeaderStyles } from "../components/Plans/Plans.styled";
import { FormField } from "../components/Contact/Contact.styled";

//import styles
import {
  AnotherContainer,
  ImageStyle,
  RegisterLabelStyle,
  SiteContainer,
  FormContainer,
  RegisterNavyButton,
} from "../components/RegisterForm/RegisterForm.styled";

//firebase config files
import { firebaseErrors } from "../firebase/firebase.errors";
import { auth } from "../firebase/firebase.config";

//image
import RegisterIllustration from "./../assets/illustrations/register-illustration.svg";

//types and interfaces
export interface IForm {
  email: string;
  password: string;
}

type FirebaseErrorsKeys = keyof typeof firebaseErrors;

//function
const Register = () => {
  const { control, handleSubmit } = useForm<IForm>();
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IForm> = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => setUser(userCredentials.user.uid))
      .catch((error: FirebaseError) => {
        setError(firebaseErrors[error.code as FirebaseErrorsKeys]);
      });
  };

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user]);

  return (
    <>
      <SiteContainer>
        <HeaderStyles>Zarejestruj się!</HeaderStyles>
        <FormContainer>
          <ImageStyle src={RegisterIllustration} />
          <FormField onSubmit={handleSubmit(onSubmit)}>
            <RegisterLabelStyle>Adres email</RegisterLabelStyle>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <InputForm placeholder="Podaj email" type={"email"} {...field} />}
            />
            <RegisterLabelStyle>Hasło</RegisterLabelStyle>
            <Controller
              name="password"
              control={control}
              render={({ field }) => <InputForm placeholder="Podaj hasło" type={"password"} {...field} />}
            />
            <RegisterNavyButton type="submit">Rejestracja</RegisterNavyButton>
            {error}
          </FormField>
        </FormContainer>
        <AnotherContainer>
          <h4>Masz już konto? Zaloguj się!</h4>
          <Link to={"/login"}>
            <PrimaryGreenButton>Zaloguj się</PrimaryGreenButton>
          </Link>
        </AnotherContainer>
      </SiteContainer>
    </>
  );
};

export default Register;
