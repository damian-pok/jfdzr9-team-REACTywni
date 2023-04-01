import { useState } from "react";
import { Link } from "react-router-dom";
import { DetailsList } from "./DropDownLists.styled";
import { ListElement } from "./DropDownLists.styled";
import {
  dropDownBranding,
  dropDownDigital,
  dropDownDruk,
  dropDownIlustracje,
  dropDownInne,
  dropDownUXUI,
} from "./DropDownElements";

type DropElement = {
  title: string;
};

export const DropDownListBranding = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownBranding = dropDownBranding.map((element: DropElement) => ({
    title: element.title,
  }));

  return (
    <DetailsList>
      <ListElement>{element.title}</ListElement>
    </DetailsList>
  );

  const handleDropdownDigital = dropDownDigital.map((element: DropElement) => ({
    title: element.title,
  }));

  const handleDropdownDruk = dropDownDruk.map((element: DropElement) => ({
    title: element.title,
  }));

  const handleDropdownIlustracje = dropDownIlustracje.map((element: DropElement) => ({
    title: element.title,
  }));

  const handleDropdownInne = dropDownInne.map((element: DropElement) => ({
    title: element.title,
  }));

  const handleDropdownUXUI = dropDownUXUI.map((element: DropElement) => ({
    title: element.title,
  }));

  return (
    <DetailsList onClick={() => setDropdown(!dropdown)}>
      {dropDownBranding.map((element) => (
        <ListElement key={element.title} title={element.title}>
          {element.title}
        </ListElement>
      ))}
    </DetailsList>
  );
};
