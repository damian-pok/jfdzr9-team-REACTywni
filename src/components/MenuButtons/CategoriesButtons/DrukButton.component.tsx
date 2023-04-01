import { CategoriesButton } from "./CategoriesButton.styled";
import { DropDownListDruk } from "../../DropDownLists/DropDownListDruk.component";
import { useState } from "react";

export const DrukButton = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CategoriesButton>Druk</CategoriesButton>
      {dropdown && <DropDownListDruk />}
    </div>
  );
};
