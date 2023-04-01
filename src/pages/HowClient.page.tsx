import { MenuCategories } from "../components/MenuCategories/MenuCategories.component";
import HowItWorksDescription from "../components/HowItWorksDescription/HowItWorksDescription.component";
import Plans from "../components/Plans/Plans.component";
import { FAQ } from "../components/FAQ/FAQ.component";

const HowClient = () => {
  return (
    <>
      <HowItWorksDescription />
      <MenuCategories />
      <Plans />
      <FAQ />
    </>
  );
};

export default HowClient;
