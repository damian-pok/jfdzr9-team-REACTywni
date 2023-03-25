import { SecondaryButton } from "../UI/Buttons/Buttons.styled";
import { MenuCategoriesButtons } from "./MenuCategories.styled";

export const MenuCategories = () => {
  return (
    <MenuCategoriesButtons>
      <SecondaryButton>Branding</SecondaryButton>
      <SecondaryButton>Druk</SecondaryButton>
      <SecondaryButton>Digital</SecondaryButton>
      <SecondaryButton>UX/UI</SecondaryButton>
      <SecondaryButton>Ilustracje</SecondaryButton>
      <SecondaryButton>Inne</SecondaryButton>
    </MenuCategoriesButtons>
  );
};
