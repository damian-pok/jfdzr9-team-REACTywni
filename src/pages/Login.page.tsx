//libraries
import { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../firebase/firebase.errors";
import { FirebaseError } from "@firebase/util";
import { auth } from "../firebase/firebase.config";

//components

//interfaces and types
import { IForm } from "./Register.page";
import { RegisterFormStyled, RegisterFormWrapper } from "../components/RegisterForm/RegisterForm.styled";
import { PrimaryButton } from "../components/UI/Buttons/Buttons.styled";
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
        <h1>Zaloguj się!</h1>
        <RegisterFormStyled onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <input placeholder="Podaj email" type={"email"} {...field} />}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => <input placeholder="Podaj hasło" type={"password"} {...field} />}
          />
          <PrimaryButton type="submit">Zaloguj!</PrimaryButton>
          <p>Nie masz konta?</p>
          <Link to={"/register"}>Zarejestruj się</Link>
          {error}
        </RegisterFormStyled>
      </RegisterFormWrapper>
    </>
  );
};

export default Login;
