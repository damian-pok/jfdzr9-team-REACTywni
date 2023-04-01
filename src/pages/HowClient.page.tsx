import { MenuCategories } from "../components/MenuCategories/MenuCategories.component";
import Plans from "../components/Plans/Plans.component";
import { FAQ } from "../components/FAQ/FAQ.component";
import HowClientDescription from "../components/HowClientDescription/HowClientDescription.component";

const HowClient = () => {
  return (
    <>
      <HowClientDescription />
      <MenuCategories />
      <Plans />
      <FAQ />
    </>
  );
};

export default HowClient;
