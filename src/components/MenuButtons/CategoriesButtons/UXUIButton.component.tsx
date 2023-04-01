import { CategoriesButton } from "./CategoriesButton.styled";
import { DropDownListUXUI } from "../../DropDownLists/DropDownListUXUI.component";
import { useState } from "react";

export const UXUIButton = () => {
  const [dropdown, setDropdown] = useState("");

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CategoriesButton>UX/UI</CategoriesButton>
      {dropdown && <DropDownListUXUI />}
    </div>
  );
};
