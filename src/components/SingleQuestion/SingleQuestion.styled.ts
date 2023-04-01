import styled from "styled-components";

export const QuestionArea = styled.div`
  height: fit-content;
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  align-self: flex-start;
  padding: 2rem;
  border-bottom: 1px solid var(--dark-grey-color);
`;

export const QuestionField = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
`;

export const QuestionButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0.4rem;
`;

export const QuestionDiv = styled.div``;
