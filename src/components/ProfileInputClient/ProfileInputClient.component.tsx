//libraries
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

//components
import { ProfileInputClientStyled, TitleHeadline } from "./ProfileInputClient.styled";
import { addClient } from "../../firebase/addClient";
import { useNavigate } from "react-router-dom";

//firebase
import { auth } from "../../firebase/firebase.config";

//context
import { useAuth } from "../../context/auth.context";
import { PrimaryNavyButton } from "../UI/Buttons/Buttons.styled";
import { InputForm } from "../UI/Input/Input.styled";

//types

export interface IJob {
  job: string[];
}
export interface IProfileInputClient {
  uid?: string;
  company: string;
  email: string;
  nip: number;
  country: string;
  city: string;
  street: string;
  jobs: IJob[];
}

export const ProfileInputClient = () => {
  const { control, handleSubmit } = useForm<IProfileInputClient>();
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate("/search");
    }
  }, [success]);

  const { loading } = useAuth();
  if (loading) return <div>Loading...</div>;

  const onSubmit = handleSubmit((data) => {
    auth.currentUser != null ? (data.uid = String(auth.currentUser.uid)) : "error";
    auth.currentUser != null ? (data.jobs = []) : "error";
    addClient(data).then(() => {
      setSuccess(true);
    });
  });

  return (
    <>
      <ProfileInputClientStyled onSubmit={onSubmit}>
        <TitleHeadline>Uzupełnij dane</TitleHeadline>
        <Controller
          name="company"
          control={control}
          render={({ field }) => <InputForm placeholder="Nazwa firmy" type={"text"} {...field} />}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => <InputForm placeholder="Email" type={"email"} {...field} />}
        />
        <Controller
          name="nip"
          control={control}
          render={({ field }) => <InputForm placeholder="NIP" type={"number"} {...field} />}
        />
        <Controller
          name="country"
          control={control}
          render={({ field }) => <InputForm placeholder="Kraj" type={"text"} {...field} />}
        />
        <Controller
          name="city"
          control={control}
          render={({ field }) => <InputForm placeholder="Miasto" type={"text"} {...field} />}
        />
        <Controller
          name="street"
          control={control}
          render={({ field }) => <InputForm placeholder="Ulica i numer" type={"text"} {...field} />}
        />
        <PrimaryNavyButton type="submit">Wyślij</PrimaryNavyButton>
      </ProfileInputClientStyled>
    </>
  );
};
