import { CategoriesButton } from "./CategoriesButton.styled";
import { DropDownListBranding } from "../../DropDownLists/DropDownListBranding.component";
import { useState } from "react";

export const BrandingButton = () => {
  const [dropdown, setDropdown] = useState("");

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CategoriesButton>Branding</CategoriesButton>
      {dropdown && <DropDownListBranding />}
    </div>
  );
};
