import { MenuButton } from "./MenuCategories.styled";
import { MenuCategoriesButtons } from "./MenuCategories.styled";
import { menuElements } from "./MenuElements";
import { DropDownList } from "../DropDownLists/DropDownLists.component";
import { useState } from "react";

export const MenuCategories = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <MenuCategoriesButtons>
        {menuElements.map((item) => {
          if (item.title === "Branding") {
            return (
              <MenuButton key={item.id} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {item.title}
                {hovered && <DropDownList />}
              </MenuButton>
            );
          }
          return <MenuButton key={item.id}>{item.title}</MenuButton>;
        })}
      </MenuCategoriesButtons>
    </>
  );
};
