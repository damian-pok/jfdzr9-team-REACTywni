import { AnswerArea } from "./Answer.styled";

interface IAnswear {
  answear: string;
}

export const Answer = ({ answear }: IAnswear) => {
  return <AnswerArea>{answear}</AnswerArea>;
};
