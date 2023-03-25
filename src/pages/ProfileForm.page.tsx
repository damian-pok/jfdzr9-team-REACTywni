//import libraries
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import styles
import { ChoiceRadio, ChoiceRadioGroup, ProfileInput } from "../components/ProfileInput/ProfileInput.styled";

//firebase config files
import { firebaseErrors } from "../firebase/firebase.errors";
import { auth } from "../firebase/firebase.config";
import { ProfileInputClient } from "../components/ProfileInputClient/ProfileInputClient.component";
import { ProfileInputFreelancer } from "../components/ProfileInputFreelancer/ProfileInputFreelancer.component";

//types and interfaces
interface IProfileForm {
  client: string;
  freelancer: string;
}

type FirebaseErrorsKeys = keyof typeof firebaseErrors;

const ProfileForm = () => {
  const { control } = useForm<IProfileForm>();
  const [role, setRole] = useState<string>("");

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  return (
    <>
      <h1>Profile Form!</h1>
      <ProfileInput>
        <ChoiceRadioGroup>
          <Controller
            name="client"
            control={control}
            render={() => (
              <ChoiceRadio>
                <input name={"role"} type={"radio"} value={"client"} onChange={radioHandler} />{" "}
                <label htmlFor="Freelancer">Client</label>
              </ChoiceRadio>
            )}
          />
          <Controller
            name="freelancer"
            control={control}
            render={() => (
              <ChoiceRadio>
                <input name={"role"} type={"radio"} value={"freelancer"} onChange={radioHandler} />{" "}
                <label htmlFor="Freelancer">Freelancer</label>
              </ChoiceRadio>
            )}
          />
        </ChoiceRadioGroup>
        {role === "client" && <ProfileInputClient />}
        {role === "freelancer" && <ProfileInputFreelancer />}
      </ProfileInput>
    </>
  );
};

export default ProfileForm;
