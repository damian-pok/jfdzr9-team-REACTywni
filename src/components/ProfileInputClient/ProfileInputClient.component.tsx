//libraries
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

//components
import { ProfileInputClientStyled } from "./ProfileInputClient.styled";
import { addClient } from "../../firebase/addClient";
import { useNavigate } from "react-router-dom";

//firebase
import { auth } from "../../firebase/firebase.config";

//context
import { useAuth } from "../../context/auth.context";
import { PrimaryButton } from "../UI/Buttons/Buttons.styled";

//types
export interface IProfileInputClient {
  uid?: string;
  company: string;
  email: string;
  nip: number;
  country: string;
  city: string;
  street: string;
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
    addClient(data).then(() => {
      setSuccess(true);
    });
  });

  return (
    <>
      <ProfileInputClientStyled onSubmit={onSubmit}>
        <Controller
          name="company"
          control={control}
          render={({ field }) => <input placeholder="Nazwa firmy" type={"text"} {...field} />}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input placeholder="Email" type={"email"} {...field} />}
        />
        <Controller
          name="nip"
          control={control}
          render={({ field }) => <input placeholder="NIP" type={"number"} {...field} />}
        />
        <Controller
          name="country"
          control={control}
          render={({ field }) => <input placeholder="Kraj" type={"text"} {...field} />}
        />
        <Controller
          name="city"
          control={control}
          render={({ field }) => <input placeholder="Miasto" type={"text"} {...field} />}
        />
        <Controller
          name="street"
          control={control}
          render={({ field }) => <input placeholder="Ulica i numer" type={"text"} {...field} />}
        />
        <PrimaryButton type="submit">Wyślij</PrimaryButton>
      </ProfileInputClientStyled>
    </>
  );
};
