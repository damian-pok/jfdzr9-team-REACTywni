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
import { RegisterFormStyled } from "../components/RegisterForm/RegisterForm.styled";
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
      <h1>Log in!</h1>
      <RegisterFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input placeholder="Type email" type={"email"} {...field} />}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => <input placeholder="Type password" type={"password"} {...field} />}
        />
        <button type="submit">Zaloguj!</button>
        Dont have an account?
        <Link to={"/register"}>Zarejestruj się</Link>
        {error}
      </RegisterFormStyled>
      ;
    </>
  );
};

export default Login;
