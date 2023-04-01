import { CategoriesButton } from "./CategoriesButton.styled";
import { DropDownListDigital } from "../../DropDownLists/DropDownListDigital.component";
import { useState } from "react";

export const DigitalButton = () => {
  const [dropdown, setDropdown] = useState("");

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CategoriesButton>Digital</CategoriesButton>
      {dropdown && <DropDownListDigital />}
    </div>
  );
};
