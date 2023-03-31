import { useState } from "react";
import { QuestionArea } from "./SingleQuestion.styled";
import { QuestionField } from "./SingleQuestion.styled";
import { QuestionButton } from "./SingleQuestion.styled";
import { Answer } from "../Answer/Answer.component";
import { FaMinus, FaPlus } from "react-icons/fa";

export const SingleQuestion = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleButtonClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <QuestionArea>
      <QuestionButton onClick={handleButtonClick}>{showAnswer ? <FaMinus /> : <FaPlus />}</QuestionButton>
      {showAnswer && <Answer />}
      <QuestionField>How does it work?</QuestionField>
    </QuestionArea>
  );
};
