import { MenuButton } from "./MenuCategories.styled";
import { MenuCategoriesButtons } from "./MenuCategories.styled";
import { menuElements } from "./MenuElements";
import { DropDownList } from "../DropDownLists/DropDownLists.component";
import { useState } from "react";
import { Link } from "react-router-dom";

export const MenuCategories = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <MenuCategoriesButtons>
        {menuElements.map((item) => {
          return (
            <MenuButton key={item.id}>
              <Link to={item.path}>{item.title}</Link>
            </MenuButton>
          );
        })}
      </MenuCategoriesButtons>
    </>
  );
};
