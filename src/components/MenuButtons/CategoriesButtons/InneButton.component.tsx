import { CategoriesButton } from "./CategoriesButton.styled";
import { DropDownListInne } from "../../DropDownLists/DropDownListInne.component";
import { useState } from "react";

export const InneButton = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CategoriesButton>Inne</CategoriesButton>
      {dropdown && <DropDownListInne />}
    </div>
  );
};
