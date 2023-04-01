//libraries
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";
import { addFreelancer } from "../../firebase/addFreelancer";
import { auth } from "../../firebase/firebase.config";
import { AboutMeStyled, ProfileInputFreelancerStyled } from "./ProfileInputFreelancer.styled";

//types
export interface IProfileInputFreelancer {
  uid: string;
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
  const { control, handleSubmit } = useForm<IProfileInputFreelancer>();
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
    addFreelancer(data).then(() => {
      setSuccess(true);
    });
  });

  return (
    <>
      <ProfileInputFreelancerStyled onSubmit={onSubmit}>
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
          render={({ field }) => <AboutMeStyled placeholder="O mnie..." type={"text"} {...field} />}
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

        <button type="submit">Send</button>
      </ProfileInputFreelancerStyled>
    </>
  );
};
