import { useState } from "react";
import { QuestionArea, QuestionButton, QuestionField, QuestionDiv } from "./SingleQuestion.styled";
import { Answer } from "../Answer/Answer.component";
import { FaMinus, FaPlus } from "react-icons/fa";

export const SingleQuestion = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleButtonClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <QuestionArea>
      <QuestionDiv>
        <QuestionButton onClick={handleButtonClick}>{showAnswer ? <FaMinus /> : <FaPlus />}</QuestionButton>
        <div style={{ display: "flex", flexDirection: "column", paddingLeft: "1rem" }}>
          <QuestionField>How does it work?</QuestionField>
          {showAnswer && <Answer />}
        </div>
      </QuestionDiv>
    </QuestionArea>
  );
};
