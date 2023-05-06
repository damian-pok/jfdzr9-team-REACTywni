import styled from "styled-components";

export const ProfileInputFreelancerStyled = styled.form`
  width: 47.5rem;
  padding: 3.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  margin-bottom: var(--Default-Distanse-beetween-sections);
  background-color: var(--cardgroundcolor);
`;

export const AboutMeStyled = styled.input`
  min-height: 5rem;
`;

export const CategoryPair = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: flex-start;
  gap: 1rem;
`;

export const CategoryGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
`;

export const ProfileInputFreelancerStyledOrder = styled.form`
  border-radius: 1rem;
  padding: 3.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: var(--Default-Distanse-beetween-sections);
  background-color: var(--cardgroundcolor);
`;
