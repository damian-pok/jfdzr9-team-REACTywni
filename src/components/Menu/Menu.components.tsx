import { HashLink as Link } from "react-router-hash-link";
import { PrimaryGreenButton, PrimaryNavyButton } from "../UI/Buttons/Buttons.styled";
import {
  MenuField,
  ButtonMenuField,
  Logo,
  LogosAndPrimaryButtonsField,
  SecoundMenuField,
  LinkMenu,
  MainLinkMenu,
} from "./Menu.styled";
import { useUser } from "../../context/auth.context";
import { getAuth, signOut } from "firebase/auth";
import LogoFindADesigner from "./../../assets/logos/find-a-designer-logo.svg";
import ToggleSwitch from "./../UI/Toggle/Toggle.components";

const Menu = () => {
  const user = useUser();
  const auth = getAuth();
  const logOut = () => {
    signOut(auth).then().catch();
    //skonsultowac powyszy zapis
  };
  return (
    <MenuField>
      <LogosAndPrimaryButtonsField>
        <Link to={`/`}>
          <Logo src={LogoFindADesigner} />
        </Link>
        <ButtonMenuField>
          {user ? (
            <>
              <Link to={`/search`}>
                <PrimaryNavyButton>Szukaj</PrimaryNavyButton>
              </Link>
              <Link to={`/client`}>
                <PrimaryNavyButton>Mój Profil</PrimaryNavyButton>
              </Link>
              <Link to={`/homepage`}>
                <PrimaryNavyButton onClick={logOut}>Wyloguj się</PrimaryNavyButton>
              </Link>
            </>
          ) : (
            <Link to={`/login`}>
              <PrimaryNavyButton>Zaloguj się</PrimaryNavyButton>
            </Link>
          )}
          {user ? (
            <></>
          ) : (
            <Link to={`/register`}>
              <PrimaryGreenButton>Zarejestruj się</PrimaryGreenButton>
            </Link>
          )}
        </ButtonMenuField>
      </LogosAndPrimaryButtonsField>
      <SecoundMenuField>
        <MainLinkMenu to={`/howfreelancer`}>Dla freelancerów</MainLinkMenu>
        <MainLinkMenu to={`/howclient`}>Dla klientów</MainLinkMenu>
        <LinkMenu to={`/search`}>Wyszukiwarka</LinkMenu>
        <LinkMenu to={`/#contact`}>Kontakt</LinkMenu>
        <ToggleSwitch />
      </SecoundMenuField>
    </MenuField>
  );
};

export default Menu;
