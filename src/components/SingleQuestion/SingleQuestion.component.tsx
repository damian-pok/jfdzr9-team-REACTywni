import { QuestionArea } from "./SingleQuestion.styled";
import { QuestionField } from "./SingleQuestion.styled";
import { QuestionButton } from "./SingleQuestion.styled";

export const SingleQuestion = () => {
  return (
    <QuestionArea>
      <QuestionButton>+</QuestionButton>
      <QuestionField>How does it work?</QuestionField>
    </QuestionArea>
  );
};
