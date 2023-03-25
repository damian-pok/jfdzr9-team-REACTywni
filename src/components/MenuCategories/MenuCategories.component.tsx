import { MenuButton } from "./MenuCategories.styled";
import { MenuCategoriesButtons } from "./MenuCategories.styled";

export const MenuCategories = () => {
  return (
    <MenuCategoriesButtons>
      <MenuButton>Branding</MenuButton>
      <MenuButton>Druk</MenuButton>
      <MenuButton>Digital</MenuButton>
      <MenuButton>UX/UI</MenuButton>
      <MenuButton>Ilustracje</MenuButton>
      <MenuButton>Inne</MenuButton>
    </MenuCategoriesButtons>
  );
};
