import { HeaderStyles, PlansArea } from "./Plans.styled";
import SinglePlanWidget from "../SinglePlanWidget/SinglePlanWidget.component";

export const Plans = () => {
  return (
    <PlansArea>
      <HeaderStyles>Jak to działa?</HeaderStyles>
      <SinglePlanWidget />
    </PlansArea>
  );
};

export default Plans;
