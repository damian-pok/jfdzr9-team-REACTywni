//import libraries
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import styles
import { RegisterFormStyled } from "../components/RegisterForm/RegisterForm.styled";

//firebase config files
import { firebaseErrors } from "../firebase/firebase.errors";
import { auth } from "../firebase/firebase.config";

//types and interfaces
interface IForm {
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
      .then((userCredential) => {
        setUser(userCredential.user.uid);
      })
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
      <h1>Rejestracja!</h1>
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
        <button type="submit">Zarejestruj!</button>
        {error}
      </RegisterFormStyled>
    </>
  );
};

export default Register;
