import { Link } from "react-router-dom";
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
//import DarkLogoFindADesigner from "./../../assets/logos/find-a-designer-white-logo.svg";
import ToggleSwitch from "./../UI/Toggle/Toggle.components";
import LightLogoMode from "./../../assets/logos/find-a-designer-logo.svg";
//import DarkLogoMode from "./../../assets/logos/find-a-designer-logo-white.svg";

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
          <Logo src={LightLogoMode} />
        </Link>
        <ButtonMenuField>
          {user ? (
            <>
              <Link to={`/client`}>
                <PrimaryGreenButton>Mój Profil</PrimaryGreenButton>
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
        <LinkMenu smooth to={`/#contact`}>
          Kontakt
        </LinkMenu>
        <ToggleSwitch />
      </SecoundMenuField>
    </MenuField>
  );
};

export default Menu;
