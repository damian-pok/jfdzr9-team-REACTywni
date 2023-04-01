//import libraries
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import styles
import {
  ButtonRegister,
  HeadlineTitle,
  RegisterFormStyled,
  RegisterFormWrapper,
} from "../components/RegisterForm/RegisterForm.styled";

//firebase config files
import { firebaseErrors } from "../firebase/firebase.errors";
import { auth } from "../firebase/firebase.config";
import { ButtonBlack, PrimaryButton } from "../components/UI/Buttons/Buttons.styled";
import { InputLoginSign } from "../components/UI/Input/Input.styled";

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
    <RegisterFormWrapper>
      <RegisterFormStyled onSubmit={handleSubmit(onSubmit)}>
        <HeadlineTitle>Zarejestruj się!</HeadlineTitle>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <InputLoginSign placeholder="Podaj email" type={"email"} {...field} />}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => <InputLoginSign placeholder="Podaj hasło" type={"password"} {...field} />}
        />
        <ButtonRegister type="submit">Zarejestruj!</ButtonRegister>
        {error}
      </RegisterFormStyled>
    </RegisterFormWrapper>
  );
};

export default Register;
