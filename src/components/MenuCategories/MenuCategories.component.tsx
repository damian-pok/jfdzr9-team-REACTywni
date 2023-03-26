import { MenuButton } from "./MenuCategories.styled";
import { MenuCategoriesButtons } from "./MenuCategories.styled";
import { DropDownList } from "../DropDownLists/DropDownLists.component";
import { useState } from "react";

export const MenuCategories = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <MenuCategoriesButtons>
      <MenuButton>Branding</MenuButton>
      <DropDownList />
      <MenuButton>Druk</MenuButton>
      <MenuButton>Digital</MenuButton>
      <MenuButton>UX/UI</MenuButton>
      <MenuButton>Ilustracje</MenuButton>
      <MenuButton>Inne</MenuButton>
    </MenuCategoriesButtons>
  );
};
