import { FAQArea } from "./FAQ.styled";
import { SingleQuestion } from "../SingleQuestion/SingleQuestion.component";
import { Answer } from "../Answer/Answer.component";

export const FAQ = () => {
  return (
    <FAQArea>
      <h2>Frequently Asked Questions</h2>
      <SingleQuestion />
      <Answer />
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
    </FAQArea>
  );
};
