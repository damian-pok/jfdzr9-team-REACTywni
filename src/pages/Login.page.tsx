//libraries
import { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../firebase/firebase.errors";
import { FirebaseError } from "@firebase/util";
import { auth } from "../firebase/firebase.config";

//components

//interfaces and types
import { IForm } from "./Register.page";
import {
  HeadlineTitle,
  LoginField,
  LoginLink,
  RegisterFormStyled,
  RegisterFormWrapper,
} from "../components/RegisterForm/RegisterForm.styled";
import { ButtonBlack } from "../components/UI/Buttons/Buttons.styled";
import { InputLoginSign } from "../components/UI/Input/Input.styled";
type FirebaseErrorsKeys = keyof typeof firebaseErrors;

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
      <RegisterFormWrapper>
        <RegisterFormStyled onSubmit={handleSubmit(onSubmit)}>
          <HeadlineTitle>Zaloguj się!</HeadlineTitle>

          <Controller
            name="email"
            control={control}
            render={({ field }) => <InputLoginSign placeholder="Wpisz swój adres email" type={"email"} {...field} />}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => <InputLoginSign placeholder="Wpisz swoje hasło" type={"password"} {...field} />}
          />
          <ButtonBlack type="submit">Zaloguj!</ButtonBlack>

          <LoginField>
            <h4>Dont have an account?</h4>
            <LoginLink to={"/register"}>Zarejestruj się</LoginLink>
            {error}
          </LoginField>
        </RegisterFormStyled>
      </RegisterFormWrapper>
    </>
  );
};

export default Login;
