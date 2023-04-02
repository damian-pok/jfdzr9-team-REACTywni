import styled from "styled-components";

export const PlanWidgetArea = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  //align-items: center;
  gap: 4rem;
  padding-top: 4rem;
  padding-bottom: 6rem;
  text-align: left;
  margin-bottom: 4rem;
`;

export const SinglePlanWidgetField = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  border: solid 1px black;
  padding: 20px;
  border-radius: 15px;
  background-color: var(--lime-yellow);
  min-width: 300px;
`;

export const PlanContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
