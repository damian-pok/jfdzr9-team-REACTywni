//libraries
import { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../firebase/firebase.errors";
import { FirebaseError } from "@firebase/util";
import { auth } from "../firebase/firebase.config";
//interfaces and types
import { IForm } from "./Register.page";
import {
  FormContainer,
  SiteContainer,
  ImageStyle,
  HeaderStyles,
  FormField,
  AnotherContainer,
  LabelStyle,
} from "../components/RegisterForm/RegisterForm.styled";
import { PrimaryGreenButton, PrimaryNavyButton } from "../components/UI/Buttons/Buttons.styled";
import { InputForm } from "../components/UI/Input/Input.styled";
type FirebaseErrorsKeys = keyof typeof firebaseErrors;
//import illustration
import LoginIllustration from "./../assets/illustrations/login-illustration.svg";

const Login = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const { handleSubmit, control } = useForm<IForm>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IForm> = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then()
      .then((userCredentials) => setUser(userCredentials.user.uid))
      .catch((error: FirebaseError) => {
        setError(firebaseErrors[(error as FirebaseError).code as FirebaseErrorsKeys]);
      });
  };

  useEffect(() => {
    if (user) navigate("/search");
  }, [user]);

  return (
    <>
      <SiteContainer>
        <HeaderStyles>Logowanie</HeaderStyles>
        <FormContainer>
          <ImageStyle src={LoginIllustration} />
          <FormField onSubmit={handleSubmit(onSubmit)}>
            <LabelStyle>Adres email</LabelStyle>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <InputForm placeholder="Wpisz swój adres email" type={"email"} {...field} />}
            />
            <LabelStyle>Hasło</LabelStyle>
            <Controller
              name="password"
              control={control}
              render={({ field }) => <InputForm placeholder="Wpisz swoje hasło" type={"password"} {...field} />}
            />
            <PrimaryNavyButton type="submit">Zaloguj!</PrimaryNavyButton>
            {error}
          </FormField>
        </FormContainer>
        <AnotherContainer>
          <h4>Nie masz jeszcze konta?</h4>
          <Link to={"/register"}>
            <PrimaryGreenButton>Zarejestruj się</PrimaryGreenButton>
          </Link>
        </AnotherContainer>
      </SiteContainer>
    </>
  );
};

export default Login;
