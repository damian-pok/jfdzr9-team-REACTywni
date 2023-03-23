import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../UI/Buttons/Buttons.styled";
import { MenuField, ButtonMenuField } from "./Menu.styled";

const Menu = () => {
  return (
    <MenuField>
      <Link to={`/`}>
        <h2>Find a Designer</h2>
      </Link>
      <ButtonMenuField>
        <Link to={`/login`}>
          <SecondaryButton>Zaloguj się</SecondaryButton>
        </Link>
        <Link to={`/register`}>
          <PrimaryButton>Zarejestruj się</PrimaryButton>
        </Link>
      </ButtonMenuField>
    </MenuField>
  );
};

export default Menu;
