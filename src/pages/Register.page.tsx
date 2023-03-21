//import libraries
import { useForm } from "react-hook-form";

//import styles
//...

//types and interfaces
interface IForm {
  email: string;
  password: string;
}

//function
const Register = () => {
  const { control, handleSubmit } = useForm<IForm>();

  return <h1>Rejestracja!</h1>;
};

export default Register;
