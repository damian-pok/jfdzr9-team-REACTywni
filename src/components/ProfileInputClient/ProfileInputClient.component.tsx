//libraries
import { Controller, useForm } from "react-hook-form";

//components
import { ProfileInputClientStyled } from "./ProfileInputClient.styled";

//types
interface IProfileInputClient {
  company: string;
  email: string;
  nip: number;
  country: string;
  city: string;
  street: string;
}

export const ProfileInputClient = () => {
  const { control } = useForm<IProfileInputClient>();
  return (
    <>
      <ProfileInputClientStyled>
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
        <button>Send</button>
      </ProfileInputClientStyled>
    </>
  );
};
