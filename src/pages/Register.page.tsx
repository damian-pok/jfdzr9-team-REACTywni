//import libraries
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import styles
import { RegisterFormStyled, RegisterFormWrapper } from "../components/RegisterForm/RegisterForm.styled";

//firebase config files
import { firebaseErrors } from "../firebase/firebase.errors";
import { auth } from "../firebase/firebase.config";
import { PrimaryButton } from "../components/UI/Buttons/Buttons.styled";

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
      <h1>Zarejestruj się!</h1>
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
        <PrimaryButton type="submit">Zarejestruj!</PrimaryButton>
        {error}
      </RegisterFormStyled>
    </RegisterFormWrapper>
  );
};

export default Register;
