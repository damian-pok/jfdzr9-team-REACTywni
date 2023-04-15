import { BrandingButton } from "./CategoriesButtons/BrandingButton.component";
import { DigitalButton } from "./CategoriesButtons/DigitalButton.component";
import { DrukButton } from "./CategoriesButtons/DrukButton.component";
import { UXUIButton } from "./CategoriesButtons/UXUIButton.component";
import { InneButton } from "./CategoriesButtons/InneButton.component";
import { Link } from "react-router-dom";

export const MenuButtons = () => {
  return (
    <>
      <BrandingButton />
      <DigitalButton />
      <DrukButton />
      <UXUIButton />
      <InneButton />
      <Link to={`/search`}>Search</Link>
    </>
  );
};
