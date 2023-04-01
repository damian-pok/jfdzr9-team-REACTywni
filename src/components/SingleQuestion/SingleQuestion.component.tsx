import { useState } from "react";
import { QuestionArea, QuestionButton, QuestionField, QuestionDiv } from "./SingleQuestion.styled";
import { Answer } from "../Answer/Answer.component";
import { FaMinus, FaPlus } from "react-icons/fa";

interface ISingleQuestion {
  question: string;
  answear: string;
}

export const SingleQuestion = ({ question, answear }: ISingleQuestion) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleButtonClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <QuestionArea>
      <QuestionDiv>
        <QuestionField>
          <QuestionButton onClick={handleButtonClick}>{showAnswer ? <FaMinus /> : <FaPlus />}</QuestionButton>
          {question}
        </QuestionField>
        {showAnswer && <Answer answear={answear} />}
      </QuestionDiv>
    </QuestionArea>
  );
};
