import { BrandingButton } from "./CategoriesButtons/BrandingButton.component";
import { DigitalButton } from "./CategoriesButtons/DigitalButton.component";
import { DrukButton } from "./CategoriesButtons/DrukButton.component";
import { UXUIButton } from "./CategoriesButtons/UXUIButton.component";
import { IlustracjeButton } from "./CategoriesButtons/IlustracjeButton.component";
import { InneButton } from "./CategoriesButtons/InneButton.component";

export const MenuButtons = () => {
  return (
    <>
      <BrandingButton />
      <DigitalButton />
      <DrukButton />
      <UXUIButton />
      <IlustracjeButton />
      <InneButton />
    </>
  );
};
