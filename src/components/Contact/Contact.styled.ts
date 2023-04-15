import styled from "styled-components";

export const SectionContactField = styled.div`
  max-width: 1332px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 0.5rem;
  //padding: 3rem 2.5rem;
  background-color: var(--lime-yellow);
`;

export const ContactField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
  gap: 2rem;
`;

export const ContactInformationField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 2rem;
  gap: 3rem;
`;

export const IconField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: auto;
`;
