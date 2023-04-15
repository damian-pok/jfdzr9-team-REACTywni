import styled from "styled-components";

export const PlanWidgetArea = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  gap: 2.5rem;
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
  gap: 3rem;
  border: solid 1px black;
  padding: 2rem;
  border-radius: 15px;
  background-color: var(--lime-yellow);
  min-width: 295px;
`;

export const PlanContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  height: auto;
  width: 145px;
`;
