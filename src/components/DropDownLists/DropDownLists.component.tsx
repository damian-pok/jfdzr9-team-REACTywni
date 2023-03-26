import { useState } from "react";
import { Link } from "react-router-dom";
import { DetailsList } from "./DropDownLists.styled";
import { ListElement } from "./DropDownLists.styled";
import { dropDownBranding } from "./DropDownElements";

export const DropDownList = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <DetailsList onClick={() => setDropdown(!dropdown)}>
      {dropDownBranding.map((item) => {
        return (
          <ListElement key={item.id}>
            <Link to={item.path} onClick={() => setDropdown(false)}>
              {item.title}
            </Link>
          </ListElement>
        );
      })}
    </DetailsList>
  );
};
