//libraries
import { Controller, useForm } from "react-hook-form";

//types
interface IProfileInputFreelancer {
  firstName: string;
  secondName: string;
  email: string;
  country: string;
  city: string;
  experience: number;
  aboutMe: string;
  services: string;
  gallery: string;
}

export const ProfileInputFreelancer = () => {
  const { control } = useForm<IProfileInputFreelancer>();
  return (
    <>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <input placeholder="Imię" type={"text"} {...field} />}
      />
      <Controller
        name="secondName"
        control={control}
        render={({ field }) => <input placeholder="Nazwisko" type={"text"} {...field} />}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => <input placeholder="Email" type={"email"} {...field} />}
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
        name="experience"
        control={control}
        render={({ field }) => <input placeholder="Doświadczenie" type={"number"} {...field} />}
      />
      <Controller
        name="aboutMe"
        control={control}
        render={({ field }) => <input placeholder="O mnie..." type={"text"} {...field} />}
      />
      <Controller
        name="services"
        control={control}
        render={({ field }) => <input placeholder="Usługi" type={"text"} {...field} />}
      />
      <Controller
        name="gallery"
        control={control}
        render={({ field }) => <input placeholder="Galeria" type={"text"} {...field} />}
      />

      <button>Send</button>
    </>
  );
};
