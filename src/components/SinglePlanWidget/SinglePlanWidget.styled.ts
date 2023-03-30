import styled from "styled-components";

export const PlanWidgetArea = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding-top: 6rem;
  text-align: left;
`;

export const SinglePlanWidgetField = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const PlanContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
