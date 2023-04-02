import styled from "styled-components";

export const ProfileInputFreelancerStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const AboutMeStyled = styled.input`
  min-height: 5rem;
`;

export const CategoryPair = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
`;

export const CategoryGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
`;
