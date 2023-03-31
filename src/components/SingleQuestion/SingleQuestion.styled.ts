import styled from "styled-components";

export const QuestionArea = styled.div`
  height: fit-content;
  width: 95%;
  display: flex;
  gap: 1.7rem;
  align-self: flex-start;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid var(--dark-grey-color);
`;

export const QuestionField = styled.div`
  height: fit-content;
`;

export const QuestionButton = styled.button`
  font-weight: bold;
  font-size: 30px;
  border: none;
  cursor: pointer;
  padding: 0.4rem;
  background-color: none;
`;
