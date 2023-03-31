import { MenuButton } from "./MenuCategories.styled";
import { MenuCategoriesButtons } from "./MenuCategories.styled";
import { menuElements } from "./MenuElements";
import { DropDownList } from "../DropDownLists/DropDownLists.component";
import { useState } from "react";

type MenuElement = {
  title: string;
};

export const MenuCategories = (props) => {
  const [dropdown, setDropdown] = useState("");
  const [option, setOption] = useState(false);

  const handleSelectChange = (event) => {
    setOption(event.target.value);
    props.onCategorySelect(props.title, event.target.value);
  };

  const handleMenuElements = menuElements.map((element: MenuElement) => ({
    title: element.title,
  }));

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <>
      <MenuCategoriesButtons onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {handleMenuElements.map((element) => (
          <MenuButton key={element.title} title={element.title}>
            {element.title}
          </MenuButton>
        ))}
        {dropdown && <DropDownList />}
      </MenuCategoriesButtons>
    </>
  );
};
