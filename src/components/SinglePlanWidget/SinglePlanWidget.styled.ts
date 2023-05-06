import styled from "styled-components";

export const PlanWidgetArea = styled.div`
  //max-width: var(--Default-Body-width);
  box-sizing: border-box;
  width: 80vw;
  max-width: 1440px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  gap: 2.5rem;
  padding-bottom: 3.75rem;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 265px);
  }
`;

export const Headlines3 = styled.h3`
  font-size: var(--Default-Body-size);
  padding-top: 1rem;
  text-align: center;
`;

export const ImagesIcons = styled.img`
  width: 6.25rem;
  height: auto;
`;

export const SinglePlanWidgetField = styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--secondary-light-grey);
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
