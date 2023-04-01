import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../UI/Buttons/Buttons.styled";
import { MenuField, ButtonMenuField, Logo } from "./Menu.styled";
import { useUser } from "../../context/auth.context";
import { getAuth, signOut } from "firebase/auth";
import LogoFindADesigner from "./../../assets/logos/find-a-designer-logo.svg";

const Menu = () => {
  const user = useUser();
  console.log("Menu ", user);
  const auth = getAuth();
  const logOut = () => {
    signOut(auth).then().catch();
    //skonsultowac powyszy zapis
  };

  return (
    <MenuField>
      <Link to={`/`}>
        <Logo src={LogoFindADesigner} />
      </Link>
      <ButtonMenuField>
        {user ? (
          <Link to={`/homepage`}>
            <SecondaryButton onClick={logOut}>Wyloguj się</SecondaryButton>
          </Link>
        ) : (
          <Link to={`/login`}>
            <SecondaryButton>Zaloguj się</SecondaryButton>
          </Link>
        )}
        {user ? (
          <></>
        ) : (
          <Link to={`/register`}>
            <PrimaryButton>Zarejestruj się</PrimaryButton>
          </Link>
        )}
      </ButtonMenuField>
    </MenuField>
  );
};

export default Menu;
