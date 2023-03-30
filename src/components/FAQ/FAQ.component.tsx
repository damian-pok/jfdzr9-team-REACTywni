import { FAQArea } from "./FAQ.styled";
import { SingleQuestion } from "../SingleQuestion/SingleQuestion.component";

export const FAQ = () => {
  return (
    <FAQArea>
      <h2>Frequently Asked Questions</h2>
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
    </FAQArea>
  );
};
