import { CategoriesButton } from "./CategoriesButton.styled";
import { DropDownListUXUI } from "../../DropDownLists/DropDownListUXUI.component";
import { useState, useEffect, useRef } from "react";

export const UXUIButton = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const handleDocumentClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div>
      <CategoriesButton onClick={handleClick}>UX/UI</CategoriesButton>
      {dropdown && <DropDownListUXUI ref={dropdownRef} />}
    </div>
  );
};
