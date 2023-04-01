import { PlansArea } from "./Plans.styled";
import SinglePlanWidget from "../SinglePlanWidget/SinglePlanWidget.component";

export const Plans = () => {
  return (
    <PlansArea>
      <h2>Our plans</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa tempore consequatur consectetur voluptas
        exercitationem dolore? Rem odit excepturi deserunt distinctio sequi hic aliquam. Cumque deserunt officia ad
        excepturi, suscipit repellat?
      </p>
      <SinglePlanWidget />
    </PlansArea>
  );
};

export default Plans;
